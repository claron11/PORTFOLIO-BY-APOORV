import { useScrollProgress, useCustomCursor } from '../../hooks/usePortfolio'

export function ScrollProgress() {
  const progressRef = useScrollProgress()

  return (
    <div className="progress-bar">
      <div ref={progressRef} className="progress-fill" style={{ width: '0%' }}>
        <span className="progress-spark" aria-hidden="true">
          <span className="progress-spark-particle" />
          <span className="progress-spark-particle" />
          <span className="progress-spark-particle" />
        </span>
      </div>
    </div>
  )
}

export function CustomCursor() {
  const { dotRef, ringRef } = useCustomCursor()

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor"
        style={{
          display: 'none',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />
      <div
        ref={ringRef}
        className="cursor-trail"
        style={{
          display: 'none',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />
    </>
  )
}
