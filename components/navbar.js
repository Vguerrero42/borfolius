import Logo from './logo'
import NextLink from 'next/link'

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  IconButton,
  useColorModeValue,
  MenuButton
} from "@chakra-ui/react"
import {HamburgerIcon} from "@chakra-ui/icons"
import ThemeToggleButton from './theme-toggle-button'


const LinkItem = ({href,path,children})=>{
  const active = path ==href
  const inactiveColor = useColorModeValue('gray200','whigreenpha.900')
  return(
    <NextLink href={href}>
      <Link p={2}
      bg={active ? 'glassgreen' : undefined}
      color={active ? '#202023' : inactiveColor}>
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props  =>{
  const {path} = props
  return(
    <Box position='fixed'
    as='nav'
    w='100%'
    bg={useColorModeValue('#ffffff40','#202023')}
    style={{backdropFilter:'blur(0.6rem'}}
    zIndex={1}
    {...props}
    >
      <Container display='flex' p={2} maxW="container.md" wrap='wrap' align='center' justify='space-between'>
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing='tighter'>
            <Logo/>
          </Heading>
        </Flex>
            <Stack
            direction={{base:'column',md:'row'}}
            display={{base:'none',md:'flex'}}
            width={{base:'full', md:'auto'}}
            alignItems='center'
            flexGrow={1}
            mt={{base:4,md:0}}
            >
            <LinkItem href="/projects" path={path}>
              Projects
            </LinkItem>
            <LinkItem href="/posts" path={path}>
              Posts
            </LinkItem>
            </Stack>
            <Box flex={1} align='right' >
              <ThemeToggleButton/>
              <Box ml={2} display={{base:'inline-block',md:'none'}}>
                <Menu>
                  <MenuButton as={IconButton} icon={<HamburgerIcon />} variant='outline' aria-label='Options' />
                  <MenuList>
                  <NextLink href='/' passHref>
                      <MenuItem as={Link}>About</MenuItem>
                    </NextLink>
                    <NextLink href='/projects' passHref>
                      <MenuItem as={Link}>Projects</MenuItem>
                    </NextLink>
                    <NextLink href='/posts' passHref>
                      <MenuItem as={Link}>Posts</MenuItem>
                    </NextLink>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
      </Container>
    </Box>
  )
}

export default Navbar