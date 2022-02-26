import NextLink from 'next/link'
import {Box,Heading,Text,Container,Divider,Button} from '@chakra-ui/react'

const NotFound = ()=>{
  return(
    <Container>
      <Heading align='center' as='h1'>Not Found 🤔</Heading>
      <Text align='center'></Text>
      <Divider my={6}/>

      <Box my={6} align='center'>
        <NextLink href='/'>
          <Button colorScheme='green'>Theres sunshine back on this side</Button>
        </NextLink>
      </Box>

    </Container>
  )
}

export default NotFound