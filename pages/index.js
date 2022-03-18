import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  Text,
  useColorModeValue,
  AspectRatio
} from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          display={'flex'}
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.200')}
          p={3}
          mb={6}
          justifyContent="space-around"
        >
          <NextLink href="https://github.com/Vguerrero42/borfolius">
            <Button
              variant="ghost"
              colorScheme="green"
              rightIcon={<IoLogoGithub />}
            >
              Github
            </Button>
          </NextLink>
          <NextLink href="https://www.linkedin.com/in/victor-guerrero42/">
            <Button
              variant="ghost"
              colorScheme="green"
              rightIcon={<IoLogoLinkedin />}
            >
              Linkedin
            </Button>
          </NextLink>
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Victor Guerrero
            </Heading>
            <p>Art & Science</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/headshot.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Hey
          </Heading>
          <Paragraph>I'm a Software Engineer from NYC.</Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
                My Projects
              </Button>
            </NextLink>
          </Box>
        </Section>
        {/* <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Bio ?
        </Heading>
        <BioSection>
          <BioYear>1969  </BioYear>
          Was born
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          I am here
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>
          Other things 
        </Heading>
        <Paragraph>That I Enjoy Doing</Paragraph>
        </Section> */}
      </Container>
    </Layout>
  )
}

export default Page
