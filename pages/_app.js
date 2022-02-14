import { ChakraProvider } from "@chakra-ui/provider";
import Layout from "../components/layouts/main"
import Fonts from "../components/layouts/fonts";
import theme from '../lib/theme'
const site = ({Component,pageProps,router})=>{
  return(<ChakraProvider theme={theme}>
    <Fonts/>
    <Layout router={router}>
      <Component {...pageProps} key={router.route}/>
    </Layout>
  </ChakraProvider>)
}

export default site