import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/gridItem'
import thumbSynthya from '../public/synth.jpg'
import thumbConway from '../public/conway.jpg'
import thumbAsl from '../public/asl.jpg'
import Layout from '../components/layouts/article'

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <ProjectGridItem
              id="synthya"
              title="Synthya"
              thumbnail={thumbSynthya}
            >
              A simple synthesizer/sequencer in the browser
            </ProjectGridItem>
          </Section>
          <Section delay={0.3}>
            <ProjectGridItem
              id="gameOfLife"
              title="GameOfLife"
              thumbnail={thumbConway}
            >
              Using Conway's GOL rules to document cell behavior and determine
              optimal starting positions
            </ProjectGridItem>
          </Section>
          <Section delay={0.3}>
            <ProjectGridItem id="allSign" title="Allsign" thumbnail={thumbAsl}>
              Platform for learning ASL alphabet
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
