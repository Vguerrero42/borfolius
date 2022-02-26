import {forwardRef} from 'react'
import {Box,Spinner} from '@chakra-ui/react'
import Thing from './thing'

export const ThingSpinner = () =>(
  <Spinner 
  size='xl'
  position='absolute'
  left='50%'
  top='50%'
  ml='calc(0px-var(--spinner-size)/2)'
  mt='calc(0px-var(--spinner-size))'/>
)

export const ThingContainer = forwardRef(({children},ref) =>(
  <Box ref={ref} className='thing' m='auto' mt={['-20px','-60px','-120px']}
    mb={['-20px','-60px','-120px']}
    w={[280,480,640]}
    h={280,480,640}
    position='relative'
    >
      {children}
    </Box>
))

const Loader = () =>{
  return (
    <ThingContainer>
      <ThingSpinner/>
    </ThingContainer>
  )
}

export default Loader