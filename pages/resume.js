import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Divider,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/gridItem'
import Layout from '../components/layouts/article'

const Projects = () => {
  return (
    <Layout title="Resume">
      <Container variant="resume" bg={useColorModeValue('#ded9d7', '#d9d7')}>
        <Flex flexDir="column" align="center" blur="xl">
          <Heading as="h1" fontSize="40" mb={1} textDecor="underline">
            Victor Guerrero
          </Heading>{' '}
          <Heading fontSize="20" mb={4}>
            Software Engineer
          </Heading>
        </Flex>
        <Section delay={0.1}>
          <Flex flexDir="column">
            <Heading as="h3" variant="section-title">
              Technical Skills
            </Heading>
            <ul>
              <li>
                Proficient:JavaScript,Node.js,React,GraphQL,Redux,SQL,NoSQL,Express,Apollo,Git,REST,HTML,Linux,CSS,
                Python,Object Oriented Programming
              </li>
              <li>
                Knowledgeable: Mocha,Jasmine,React Testing Library,SCSS,Heroku,
                CI,CD,TensorFlow 2.0,React Native,Solidity,BaSH
              </li>
            </ul>
          </Flex>
        </Section>
        <Section delay={0.1}>
          <Flex flexDir="column">
            <Heading as="h3" variant="section-title">
              Projects
            </Heading>
            <p>
              Fishjawn: A tool for Anglers to record their catches with various
              data points that in turn allows a prediction model to give best x
              output for inputs a,b,c etc such as tide, weather, equipment,
              specific species. Javascript, React-native,
              Express,Node.js,Graphql,Tensorflow
              2.0,Jwt(https://github.com/Vguerrero42/Fishjawn)
            </p>
            <p>
              FishJawn-Scraper: A simple web crawler/scraper I built to help
              populate my fish species database for my Fishjawn project. It
              successfully grabs the names and descriptions of 50 species of
              fish and writes the collected and normalized data to a file which
              is later used in my seed file.
              Python3,BeautifulSoup,Regex,(http://github.com/Vguerrero42/FishjawnScraper)
            </p>
            <p>
              Allsign : Educational web app for people who want to begin their
              journey into learning the ASL(American Sign Language) alphabet.
              Uses motion capture and machine learning to give users real time
              feedback on their gestures Javascript, React,
              Express,Node.js,Python3,Tensorflow 2.0,Opencv, TensorFlow
              Serving(https://github.com/D3Doritos)
            </p>
            <p>
              Stackathon: Train neural network to provide optimal initial state
              given specific goal and board size using Conways Game of Life
              rules.
              Javascript,Node.js,Brain.js,HTML(https://github.com/Vguerrero42/GOL)
            </p>
            <p>
              YachtsDontStop: E-commerce platform for selling luxury Yachts.
              JavaScript,Node.js,React,Redux,PostgreSQL,Sequelize,Express,Git,HTML,CSS,Stripe(https://github.com/destinys-append-child/grace-shopper)
            </p>
          </Flex>
        </Section>
        <Section delay={0.1}>
          <Flex flexDir="column">
            <Heading as="h3" variant="section-title">
              Experience
            </Heading>
            <Flex flexDir="columm" border="solid black">
              <h4>Logchimp</h4>
              <ul>
                <li>
                  Contributed to a fullstack codebase using
                  React,GraphQL,MongoDB
                </li>
                <li>
                  Collaborated on a team of 3 engineers to implement new
                  experimental features for LogChimp Web App
                </li>
                <li>
                  Added unit tests to &gt;90% of added code in
                  Jest/React-Testing-Library
                </li>
              </ul>
            </Flex>
          </Flex>
        </Section>
        <Section delay={0.1}>
          <Flex flexDir="column">
            <Heading as="h3" variant="section-title">
              Education
            </Heading>
          </Flex>
        </Section>
      </Container>
    </Layout>
  )
}

export default Projects
