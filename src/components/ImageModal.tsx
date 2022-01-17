import { percent, px, rgba } from 'csx'
import { style } from 'typestyle'

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
    cursor: 'pointer'
  })

const modalContent = style({
  display: 'block',
  margin: 'auto',
  width: percent(80),
  maxWidth: px(700),
  cursor: 'pointer'
})

export function ImageModal(props: ImageModalProps) {
  const isVisible = props.imgSrc != null
  const imgSrc: string = isVisible ? (props.imgSrc as string) : ''
  return (
    <div
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
