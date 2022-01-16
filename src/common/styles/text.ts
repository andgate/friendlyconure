import { px } from 'csx'
import { CSSProperties } from 'typestyle/lib/types'
import { black, red1 } from './colors'
import { fontDaysOne, fontTitilliumWeb, fontTitilliumWebBold } from './fonts'

export const websiteTitleTextCSS: CSSProperties = {
  ...fontDaysOne,
  fontSize: px(24),
  lineHeight: px(30.55),
  color: red1.toHexString()
}

export const navItemTextCSS: CSSProperties = {
  ...fontTitilliumWeb,
  fontSize: px(18),
  lineHeight: px(27.38),
  color: black.toHexString()
}

export const biographyTextCSS: CSSProperties = {
  ...fontTitilliumWeb,
  fontSize: px(18),
  lineHeight: px(27.38),
  color: black.toHexString()
}

export const labelTextCSS: CSSProperties = {
  ...fontTitilliumWebBold,
  fontSize: px(18),
  lineHeight: px(27.38),
  color: black.toHexString()
}

export const emailTextCSS: CSSProperties = {
  ...fontTitilliumWeb,
  fontSize: px(18),
  lineHeight: px(27.38),
  color: black.toHexString()
}