import { fontFace } from 'typestyle'

// Font faces are generated with https://google-webfonts-helper.herokuapp.com/fonts

// Days One Regular
import eotDaysOneRegular from '../assets/fonts/days-one/days-one-v10-latin-regular.eot'
import svgDaysOneRegular from '../assets/fonts/days-one/days-one-v10-latin-regular.svg'
import ttfDaysOneRegular from '../assets/fonts/days-one/days-one-v10-latin-regular.ttf'
import woffDaysOneRegular from '../assets/fonts/days-one/days-one-v10-latin-regular.woff'
import woff2DaysOneRegular from '../assets/fonts/days-one/days-one-v10-latin-regular.woff2'

// Titillium Web Regular
import eotTitilliumWebRegular from '../assets/fonts/titillium-web/titillium-web-v10-latin-regular.eot'
import svgTitilliumWebRegular from '../assets/fonts/titillium-web/titillium-web-v10-latin-regular.svg'
import ttfTitilliumWebRegular from '../assets/fonts/titillium-web/titillium-web-v10-latin-regular.ttf'
import woffTitilliumWebRegular from '../assets/fonts/titillium-web/titillium-web-v10-latin-regular.woff'
import woff2TitilliumWebRegular from '../assets/fonts/titillium-web/titillium-web-v10-latin-regular.woff2'

// Titillium Web Bold
import eotTitilliumWebBold from '../assets/fonts/titillium-web/titillium-web-v10-latin-700.eot'
import svgTitilliumWebBold from '../assets/fonts/titillium-web/titillium-web-v10-latin-700.svg'
import ttfTitilliumWebBold from '../assets/fonts/titillium-web/titillium-web-v10-latin-700.ttf'
import woffTitilliumWebBold from '../assets/fonts/titillium-web/titillium-web-v10-latin-700.woff'
import woff2TitilliumWebBold from '../assets/fonts/titillium-web/titillium-web-v10-latin-700.woff2'

// Helpers

type FontSource = {
  url: string,
  format: string
}

const serializeFontSource = (src: FontSource): string => {
  return `url("${src.url}") format("${src.format}")`
}

const serializeFontSourceList = (srcList: FontSource[]): string => {
  return srcList.map(serializeFontSource).join(',')
}


// Font source lists

const daysOneRegularList: FontSource[] = [
  {
    url: `${eotDaysOneRegular}?#iefix`,
    format: 'embedded-opentype'
  },
  {
    url: woff2DaysOneRegular,
    format: 'woff2'
  },
  {
    url: woffDaysOneRegular,
    format: 'woff'
  },
  {
    url: ttfDaysOneRegular,
    format: 'truetype'
  },
  {
    url: svgDaysOneRegular,
    format: 'svg'
  }
]

const titilliumWebRegularList: FontSource[] = [
  {
    url: `${eotTitilliumWebRegular}?#iefix`,
    format: 'embedded-opentype'
  },
  {
    url: woff2TitilliumWebRegular,
    format: 'woff2'
  },
  {
    url: woffTitilliumWebRegular,
    format: 'woff'
  },
  {
    url: ttfTitilliumWebRegular,
    format: 'truetype'
  },
  {
    url: svgTitilliumWebRegular,
    format: 'svg'
  }
]

const titilliumWebBoldList: FontSource[] = [
  {
    url: `${eotTitilliumWebBold}?#iefix`,
    format: 'embedded-opentype'
  },
  {
    url: woff2TitilliumWebBold,
    format: 'woff2'
  },
  {
    url: woffTitilliumWebBold,
    format: 'woff'
  },
  {
    url: ttfTitilliumWebBold,
    format: 'truetype'
  },
  {
    url: svgTitilliumWebBold,
    format: 'svg'
  },
]

export function loadFontFaces() {
  fontFace({
    fontFamily: 'Days One',
    fontStyle: 'normal',
    fontWeight: 400,
    src: serializeFontSourceList(daysOneRegularList),
  })

  fontFace({
    fontFamily: 'Titillium Web',
    fontStyle: 'normal',
    fontWeight: 400,
    src: serializeFontSourceList(titilliumWebRegularList),
  })

  fontFace({
    fontFamily: 'Titillium Web Bold',
    fontStyle: 'normal',
    fontWeight: 700,
    src: serializeFontSourceList(titilliumWebBoldList),
  })
}