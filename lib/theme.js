import { TriangleUpIcon } from '@chakra-ui/icons'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#d2d3db', '#202023')(props)
    }
  })
}
//7d7da1

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  },
  Container: {
    variants: {
      resume: {
        opacity: '95%',
        border: 'solid black',
        padding: '30px',

        'box-shadow': '12px 12px 2px 1px rgba(0,0,255,0.2)'
      }
    }
  }
}

const fonts = {
  heading: 'M PLUS Rounded 1c'
}

const colors = {
  glassgreen: '#88ccca'
}

const config = {
  initalColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme
