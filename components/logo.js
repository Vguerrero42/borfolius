import Link from 'next/link'
import Image from 'next/image'

import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { white } from 'color-name'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  height: 2.8rem;
  line-height: 1.5rem;
  padding: 1rem;

  &:hover img {
    transition: ease-in-out;
    transition-duration: 1s;
    transform: rotate(15deg);
  }
`

const Logo = () => {
  const bullImg = '/bull.png'
  const ottollImg = '/Ottoll.svg'

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image
            src={useColorModeValue(bullImg, ottollImg)}
            width={50}
            height={50}
            alt="logo"
          />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          />
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
