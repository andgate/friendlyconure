import bioPicUrl from '../assets/images/bio.png'
import bioTextParagraph1 from '../assets/text/bio/p1.txt'
import bioTextParagraph2 from '../assets/text/bio/p2.txt'
import { biographyTextCSS } from '../common/styles/text'
import { media, style } from 'typestyle'
import * as csstips from 'csstips'
import * as csx from 'csx'
import { percent, px } from 'csx'

const bioRoot = style(csstips.vertical, csstips.center)

const bioLayout = style(
  csstips.centerJustified,
  media(
    { maxWidth: px(699) },
    csstips.vertical,
    csstips.verticallySpaced(px(10)),
    csstips.center,
    {
      marginTop: px(10),
      marginBottom: px(100),
      marginLeft: px(10),
      marginRight: px(10)
    }
  ),
  media(
    { minWidth: px(700) },
    csstips.horizontal,
    csstips.horizontallySpaced(px(29)),
    {
      width: px(700),
      marginTop: px(49),
      marginLeft: px(74),
      marginRight: px(75)
    }
  )
)

const bioPicContainer = style(
  csstips.inlineBlock,
  csstips.width(px(299)),
  csstips.height(px(263)),
  {
    minWidth: px(299),
    minHeight: px(263),
    borderRadius: px(22),
    backgroundImage: csx.url(bioPicUrl),
    backgroundRepeat: 'no-repeat'
  }
)

const bioTextContainer = style(
  biographyTextCSS,
  media({ maxWidth: px(699) }, { minWidth: px(299), width: percent(80) }),
  media({ minWidth: px(700) }, { minWidth: px(229) }, { textAlign: 'center' })
)

export function Biography() {
  return (
    <div className={bioRoot}>
      <div className={bioLayout}>
        <div className={bioPicContainer}></div>
        <div className={bioTextContainer}>
          {bioTextParagraph1}
          <br></br>
          <br></br>
          {bioTextParagraph2}
        </div>
      </div>
    </div>
  )
}
