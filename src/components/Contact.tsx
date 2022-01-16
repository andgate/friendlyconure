import contactPicUrl from '../assets/images/bird-gets-worm.png'
import resumeBtnPicUrl from '../assets/images/resume-btn.png'
import { style } from 'typestyle'
import * as csstips from 'csstips'
import { px } from 'csx'
import * as csx from 'csx'
import { emailTextCSS, labelTextCSS } from '../common/styles/text'

const emailString = 'Raleigh.Blakeway@wsu.edu'

const contactRoot = style(
  csstips.horizontal,
  csstips.horizontallySpaced(px(25)),
  csstips.centerJustified,
  {
    marginTop: px(49),
    marginLeft: px(74),
    marginRight: px(79)
  }
)

const contactPic = style(
  csstips.inlineBlock,
  csstips.width(px(299)),
  csstips.height(px(263)),
  {
    borderRadius: px(22),
    backgroundImage: csx.url(contactPicUrl),
    backgroundRepeat: 'no-repeat'
  }
)

const contactContentContainer = style(
  csstips.vertical,
  csstips.verticallySpaced(px(21)),
  csstips.center
)

const contactInfoContainer = style(csstips.width(px(384)), {
  textAlign: 'center'
})

const contactLabel = style(labelTextCSS)

const emailText = style(emailTextCSS, {
  textDecoration: 'none'
})

const resumeButton = style(
  csstips.inlineBlock,
  csstips.width(px(157)),
  csstips.height(px(153)),
  {
    borderRadius: px(22),
    backgroundImage: csx.url(resumeBtnPicUrl),
    backgroundRepeat: 'no-repeat'
  }
)

function EmailLink() {
  return (
    <a href={`mailto:${emailString}`} className={emailText}>
      {emailString}
    </a>
  )
}

export function Contact() {
  return (
    <div className={contactRoot}>
      <div className={contactPic}></div>
      <div className={contactContentContainer}>
        <div className={contactInfoContainer}>
          <div className={contactLabel}>
            Email: <EmailLink></EmailLink>
            <br></br>
            <br></br>
            Resume:
          </div>
        </div>
        <div className={resumeButton}></div>
      </div>
    </div>
  )
}
