import NextLink from 'next/link'

import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const ResumeItem = ({ children, title }) => (
  <Box>
    <Text mt={2} fontWeight="bold">
      {title}
    </Text>
    <Text fontSize={14} fontStyle="italic">
      {children}
    </Text>
  </Box>
)

export const ProjectGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/projects/${id}`} scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail{
      border-radius:0.8rem
    }`}
  />
)
