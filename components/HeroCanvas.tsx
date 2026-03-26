'use client'
import { useEffect, useRef } from 'react'

// SF neighborhood nodes with relative positions (percent of canvas width/height)
const SF_NODES = [
  { id: 'Mission',  xPct: 0.48, yPct: 0.72, label: 'Mission'  },
  { id: 'Castro',   xPct: 0.38, yPct: 0.60, label: 'Castro'   },
  { id: 'SoMa',     xPct: 0.62, yPct: 0.55, label: 'SoMa'     },
  { id: 'FiDi',     xPct: 0.65, yPct: 0.30, label: 'FiDi'     },
  { id: 'Marina',   xPct: 0.30, yPct: 0.18, label: 'Marina'   },
  { id: 'NOPA',     xPct: 0.22, yPct: 0.42, label: 'NOPA'     },
]

interface Particle {
  fromIdx: number
  toIdx: number
  progress: number   // 0 → 1
  speed: number
  opacity: number
  isAlert: boolean   // 1 in 10 are red alert particles
}

interface Node {
  x: number
  y: number
  id: string
  label: string
  pulseRadius: number
  pulseOpacity: number
  pulseGrowing: boolean
  // Arrival pulse ring (triggered when particle reaches this node)
  arrivalRing: number       // radius of arrival ring (0 = inactive)
  arrivalOpacity: number
  hasActiveTransaction: boolean
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let tick = 0
    let W = 0
    let H = 0

    const particles: Particle[] = []
    let nodes: Node[] = []

    // Build paths between all node pairs
    const paths: [number, number][] = []
    for (let i = 0; i < SF_NODES.length; i++) {
      for (let j = i + 1; j < SF_NODES.length; j++) {
        paths.push([i, j])
      }
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas!.getBoundingClientRect()
      W = rect.width
      H = rect.height
      canvas!.width = W * dpr
      canvas!.height = H * dpr
      ctx!.scale(dpr, dpr)

      // Recalculate node positions
      nodes = SF_NODES.map((n) => ({
        x: n.xPct * W,
        y: n.yPct * H,
        id: n.id,
        label: n.label,
        pulseRadius: 6,
        pulseOpacity: 0.8,
        pulseGrowing: false,
        arrivalRing: 0,
        arrivalOpacity: 0,
        hasActiveTransaction: false,
      }))
    }

    resize()

    function spawnParticle() {
      const pathIdx = Math.floor(Math.random() * paths.length)
      const [fromIdx, toIdx] = paths[pathIdx]
      const reversed = Math.random() > 0.5
      const isAlert = Math.random() < 0.1  // 1 in 10 are alert (red)
      particles.push({
        fromIdx: reversed ? toIdx : fromIdx,
        toIdx: reversed ? fromIdx : toIdx,
        progress: 0,
        speed: 0.003 + Math.random() * 0.004,
        opacity: 0.4 + Math.random() * 0.6,
        isAlert,
      })
    }

    function getBezierPoint(from: Node, to: Node, t: number): { x: number; y: number; angle: number } {
      const mx = (from.x + to.x) / 2
      const my = (from.y + to.y) / 2
      const dx = to.x - from.x
      const dy = to.y - from.y
      const len = Math.sqrt(dx * dx + dy * dy)
      const offset = len * 0.25
      const cx = mx - (dy / len) * offset
      const cy = my + (dx / len) * offset

      // Quadratic bezier position
      const x = (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * cx + t * t * to.x
      const y = (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * cy + t * t * to.y

      // Tangent angle for orientation
      const tx2 = 2 * (1 - t) * (cx - from.x) + 2 * t * (to.x - cx)
      const ty2 = 2 * (1 - t) * (cy - from.y) + 2 * t * (to.y - cy)
      const angle = Math.atan2(ty2, tx2)

      return { x, y, angle }
    }

    function drawPath(from: Node, to: Node) {
      const mx = (from.x + to.x) / 2
      const my = (from.y + to.y) / 2
      const dx = to.x - from.x
      const dy = to.y - from.y
      const len = Math.sqrt(dx * dx + dy * dy)
      const offset = len * 0.25
      const cx = mx - (dy / len) * offset
      const cy = my + (dx / len) * offset

      ctx!.beginPath()
      ctx!.moveTo(from.x, from.y)
      ctx!.quadraticCurveTo(cx, cy, to.x, to.y)
      ctx!.strokeStyle = 'rgba(34, 197, 94, 0.06)'
      ctx!.lineWidth = 0.75
      ctx!.stroke()
    }

    function drawRect(x: number, y: number, angle: number, color: string, opacity: number) {
      // Draw a small 2x4px rectangle oriented along its path direction
      ctx!.save()
      ctx!.translate(x, y)
      ctx!.rotate(angle)
      ctx!.fillStyle = color.replace(')', `, ${opacity})`).replace('rgb(', 'rgba(')
      // Ensure it's already rgba
      ctx!.fillStyle = color
      ctx!.globalAlpha = opacity
      ctx!.fillRect(-2, -1, 4, 2)
      ctx!.globalAlpha = 1
      ctx!.restore()
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H)

      tick++

      // Spawn particle every 8 ticks
      if (tick % 8 === 0 && particles.length < 40) {
        spawnParticle()
      }

      // Reset active transaction flags each frame
      for (const node of nodes) {
        node.hasActiveTransaction = false
      }

      // Draw path lines
      for (const [fi, ti] of paths) {
        if (nodes[fi] && nodes[ti]) {
          drawPath(nodes[fi], nodes[ti])
        }
      }

      // Draw + update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.progress += p.speed

        if (p.progress >= 1) {
          // Trigger arrival pulse on destination node
          const destNode = nodes[p.toIdx]
          if (destNode) {
            destNode.arrivalRing = 6
            destNode.arrivalOpacity = 0.4
          }
          particles.splice(i, 1)
          continue
        }

        const from = nodes[p.fromIdx]
        const to = nodes[p.toIdx]
        if (!from || !to) continue

        // Mark nodes involved in active transactions
        from.hasActiveTransaction = true
        to.hasActiveTransaction = true

        const pos = getBezierPoint(from, to, p.progress)

        const particleColor = p.isAlert ? 'rgba(196, 30, 58, 0.8)' : 'rgba(34, 197, 94, 0.8)'
        const trailColor = p.isAlert ? 'rgba(196, 30, 58, 0.2)' : 'rgba(34, 197, 94, 0.2)'

        // Trail glow (small circle behind)
        ctx!.beginPath()
        ctx!.arc(pos.x, pos.y, 4, 0, Math.PI * 2)
        ctx!.fillStyle = trailColor
        ctx!.fill()

        // Rectangle "data packet" shape oriented along path
        ctx!.save()
        ctx!.translate(pos.x, pos.y)
        ctx!.rotate(pos.angle)
        ctx!.globalAlpha = p.opacity
        ctx!.fillStyle = particleColor
        ctx!.fillRect(-2, -1, 4, 2)
        ctx!.globalAlpha = 1
        ctx!.restore()
      }

      // Draw nodes
      for (const node of nodes) {
        // Arrival pulse ring (triggered by particle arrival)
        if (node.arrivalRing > 0) {
          ctx!.beginPath()
          ctx!.arc(node.x, node.y, node.arrivalRing, 0, Math.PI * 2)
          ctx!.strokeStyle = `rgba(255, 255, 255, ${node.arrivalOpacity})`
          ctx!.lineWidth = 1
          ctx!.stroke()
          node.arrivalRing += 1.5
          node.arrivalOpacity -= 0.012
          if (node.arrivalOpacity <= 0) {
            node.arrivalRing = 0
            node.arrivalOpacity = 0
          }
        }

        // Ambient pulse ring
        node.pulseRadius += node.pulseGrowing ? 0.3 : -0.1
        if (node.pulseRadius > 22) { node.pulseGrowing = false; node.pulseOpacity = 0 }
        if (node.pulseRadius < 7) { node.pulseGrowing = true; node.pulseOpacity = 0.5 }
        node.pulseOpacity = Math.max(0, 0.3 * (1 - (node.pulseRadius - 7) / 15))

        const nodeColor = node.hasActiveTransaction ? 'rgba(34, 197, 94' : 'rgba(34, 197, 94'

        ctx!.beginPath()
        ctx!.arc(node.x, node.y, node.pulseRadius, 0, Math.PI * 2)
        ctx!.strokeStyle = `${nodeColor}, ${node.pulseOpacity})`
        ctx!.lineWidth = 1
        ctx!.stroke()

        // Inner glow
        ctx!.beginPath()
        ctx!.arc(node.x, node.y, 5, 0, Math.PI * 2)
        ctx!.fillStyle = node.hasActiveTransaction
          ? 'rgba(34, 197, 94, 0.3)'
          : 'rgba(34, 197, 94, 0.15)'
        ctx!.fill()

        // Core dot
        ctx!.beginPath()
        ctx!.arc(node.x, node.y, 3, 0, Math.PI * 2)
        ctx!.fillStyle = node.hasActiveTransaction ? '#22c55e' : 'rgba(34, 197, 94, 0.7)'
        ctx!.fill()

        // Label — add $ prefix when a transaction is active at this node
        ctx!.font = '10px "Fira Code", monospace'
        ctx!.textAlign = 'center'
        const labelText = node.hasActiveTransaction
          ? `$${node.label.toUpperCase()}`
          : node.label.toUpperCase()
        ctx!.fillStyle = node.hasActiveTransaction
          ? 'rgba(34, 197, 94, 0.7)'
          : 'rgba(232, 234, 240, 0.25)'
        ctx!.fillText(labelText, node.x, node.y - 14)
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <>
      {/* Canvas — always behind everything */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Gradient overlay — ensures left side text is always readable */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(10,18,32,0.88) 0%, rgba(10,18,32,0.65) 55%, rgba(10,18,32,0.2) 80%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </>
  )
}
