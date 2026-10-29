import * as React from "react"

/* Mouse drag-to-scroll for horizontal carousels (touch scroll works natively) */
const useDragScroll = () => {
  const ref = React.useRef(null)
  const state = React.useRef({ down: false, x: 0, left: 0, moved: false })

  const onMouseDown = e => {
    if (!ref.current) return
    state.current = { down: true, x: e.pageX, left: ref.current.scrollLeft, moved: false }
  }
  const end = () => { state.current.down = false }
  const onMouseMove = e => {
    if (!state.current.down || !ref.current) return
    const dx = e.pageX - state.current.x
    if (Math.abs(dx) > 4) state.current.moved = true
    e.preventDefault()
    ref.current.scrollLeft = state.current.left - dx
  }
  // Prevent click firing after a drag
  const onClickCapture = e => {
    if (state.current.moved) { e.stopPropagation(); e.preventDefault(); state.current.moved = false }
  }

  return { ref, role: "presentation", onMouseDown, onMouseLeave: end, onMouseUp: end, onMouseMove, onClickCapture }
}

export default useDragScroll

