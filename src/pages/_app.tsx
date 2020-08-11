import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/Global'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

interface CustomAppProps extends AppProps {}

const CustomApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out-quart',
      duration: 800,
      once: true,
    })
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default CustomApp
