import { style } from 'typestyle'
import * as csstips from 'csstips'
import { px } from 'csx'
import { portfolioImages } from '../assets/images/portfolio'
import { useState } from 'react'
import { ImageModal } from './ImageModal'

const portfolioRoot = style(
  csstips.horizontal,
  csstips.centerJustified,
  csstips.wrap,
  {
    marginTop: px(5),
    marginLeft: px(25),
    marginRight: px(25)
  }
)

const portfolioItem = style(
  csstips.block,
  csstips.width(px(152)),
  csstips.height(px(110)),
  {
    objectFit: 'cover',
    cursor: 'pointer',
    marginLeft: px(25),
    marginRight: px(25),
    marginBottom: px(36),
    transition: 'filter .5s',
    filter: 'none',
    $nest: {
      '&:hover': {
        filter: 'grayscale(100%)'
      }
    }
  }
)

export function Portfolio() {
  const [modalImgSrc, setModalImgSrc] = useState<string | null>(null)

  function openModal(imgSrc: string) {
    setModalImgSrc(imgSrc)
    console.log(imgSrc)
  }

  function closeModal() {
    setModalImgSrc(null)
  }

  return (
    <div id="portfolio-root" className={portfolioRoot}>
      {portfolioImages.map((imgUrl, i) => (
        // Uses index as key, since portfolioImages is ultimately static
        <img
          key={i}
          onClick={() => openModal(imgUrl)}
          src={imgUrl}
          className={portfolioItem}></img>
      ))}
      <ImageModal onClick={closeModal} imgSrc={modalImgSrc}></ImageModal>
    </div>
  )
}
