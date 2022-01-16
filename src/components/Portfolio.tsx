import { style } from 'typestyle'
import * as csstips from 'csstips'
import * as csx from 'csx'
import { px } from 'csx'
import { portfolioImages } from '../assets/images/portfolio'

const portfolioRoot = style(
  csstips.horizontal,
  csstips.start,
  csstips.centerJustified,
  csstips.wrap,
  {
    marginTop: px(5),
    marginLeft: px(25),
    marginRight: px(25)
  }
)

const portfolioItemContainer = style(csstips.content, {
  marginLeft: px(25),
  marginRight: px(25),
  marginBottom: px(36)
})

const portfolioItem = (imgUrl: string) =>
  style(csstips.inlineBlock, csstips.width(px(152)), csstips.height(px(110)), {
    backgroundImage: csx.url(imgUrl),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  })

export function Portfolio() {
  return (
    <div id="portfolio-root" className={portfolioRoot}>
      {portfolioImages.map((imgUrl) => (
        <div className={portfolioItemContainer}>
          <div className={portfolioItem(imgUrl)}></div>
        </div>
      ))}
    </div>
  )
}
