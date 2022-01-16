import { Link } from 'react-router-dom'
import { style } from 'typestyle'
import * as csstips from 'csstips'
import { px } from 'csx'
import { websiteTitleTextCSS, navItemTextCSS } from '../common/styles/text'

const headerRoot = style(
  csstips.vertical,
  csstips.verticallySpaced(px(5)),
  csstips.center,
  {
    marginTop: px(21),
    marginBottom: px(11)
  }
)

const headerTitle = style(
  websiteTitleTextCSS,
  {
    textAlign: 'center',
    textDecoration: 'none',
  }
)

const headerNavSection = style(
  csstips.horizontal
)

const headerNavItem = style(
  csstips.inlineBlock,
  {
    textAlign: 'center',
    minWidth: px(148),
    width: px(148)
  }
)

const headerNavLink = style( navItemTextCSS,
  {
    textDecoration: 'none',
  }
)

export function Header() {
  return <div id='header-root' className={headerRoot}>
    <Link to='/' className={headerTitle}>
      Raleigh Blakeway
    </Link>
    <div id='header-nav-section' className={headerNavSection}>
      <div id='header-nav-item' className={headerNavItem}>
        <Link to='/biography' className={headerNavLink}>
          Biography
        </Link>
      </div>
      <div id='header-nav-item' className={headerNavItem}>
        <Link to='/contact' className={headerNavLink}>
          Contact
        </Link>
      </div>
    </div>
  </div>
}
