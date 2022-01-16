import bioPicUrl from '../assets/images/bio.png'
import bioTextParagraph1 from '../assets/text/bio/p1.txt'
import bioTextParagraph2 from '../assets/text/bio/p2.txt'
import { biographyTextCSS } from '../common/styles/text'
import { style } from 'typestyle'
import * as csstips from 'csstips'
import * as csx from 'csx'
import { px } from 'csx'

const bioRoot = style(
  csstips.horizontal,
  csstips.horizontallySpaced(px(29)),
  csstips.centerJustified,
  {
    marginTop: px(49),
    marginLeft: px(74),
    marginRight: px(75)
  }
)

const bioPicContainer = style(
  csstips.inlineBlock,
  csstips.width(px(299)),
  csstips.height(px(263)),
  {
    borderRadius: px(22),
    backgroundImage: csx.url(bioPicUrl),
    backgroundRepeat: 'no-repeat'
  }
)

const bioTextContainer = style(
  biographyTextCSS,
  csstips.width(px(384))
)

export function Biography() {
  return (
    <div className={bioRoot}>
      <div className={bioPicContainer}></div>
      <div className={bioTextContainer}>
        {bioTextParagraph1}
        <br></br>
        <br></br>
        {bioTextParagraph2}
      </div>
    </div>
  )
}
