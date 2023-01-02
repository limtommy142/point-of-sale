import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const theme = extendTheme({
    fonts: {
        heading: 'Roboto, Open Sans, Segoe UI, Arial',
        body: 'Roboto, Open Sans, Segoe UI, Arial',
    },
    breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '70em',
        '2xl': '96em',
    },
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                fontFamily: 'body',
                color: mode('gray.800', 'whiteAlpha.900')(props),
                bg: mode('white', 'gray.800')(props),
                lineHeight: 'base',
            },
        })
    }
})

export default theme