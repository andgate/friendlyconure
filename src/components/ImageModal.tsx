import { percent, px, rgba } from 'csx'
import { useEffect, useMemo, useRef } from 'react'
import { style } from 'typestyle'
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'

export type ImageModalProps = {
  onClick: () => void
  imgSrc: string | null
}

const modalBackground = (isVisible: boolean) =>
  style({
    // Shows when visible
    display: isVisible ? 'block' : 'none',
    position: 'fixed', // Stay in place
    zIndex: 1, // Sit on top
    paddingTop: px(100), // Location of the box
    left: 0,
    top: 0,
    width: percent(100), // Full width
    height: percent(100), // Full height
    overflow: 'auto', // Enable scroll
    backgroundColor: rgba(0, 0, 0, 0.8).toString(),
    cursor: 'pointer',
    '-webkit-overflow-scrolling': 'touch'
  })

const modalContent = style({
  display: 'block',
  margin: 'auto',
  width: percent(80),
  maxWidth: px(700),
  cursor: 'pointer'
})

export function ImageModal(props: ImageModalProps) {
  const isVisible = useMemo(() => props.imgSrc != null, [props.imgSrc])
  const imgSrc: string = props.imgSrc || ''
  const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    if (isVisible) {
      disableBodyScroll(modalRef.current, { reserveScrollBarGap: true })
      return
    }
    enableBodyScroll(modalRef.current)
  }, [isVisible])

  return (
    <div
      ref={modalRef}
      id="modal-background"
      onClick={props.onClick}
      className={modalBackground(isVisible)}>
      <img
        id="modal-content"
        src={imgSrc}
        onClick={props.onClick}
        className={modalContent}></img>
    </div>
  )
}
