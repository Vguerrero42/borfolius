import {Container,Box,Heading,SimpleGrid,Divider} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkItemGrid } from '../components/gridItem'
import thumbSynthya from '../public/synth.png'
import thumbConway from '../public/conway.png'
import Layout from '../components/layouts/article'

const Projects = () =>{
  return (
    <Layout>
    <Container>
      <Heading as='h3' fontSize={20} mb={4}>
         Projects
      </Heading>
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section delay={0.3}>
          <WorkItemGrid id='synthya' title='Synthya' thumbnail={thumbSynthya}>
            A simple synthesizer/sequencer in the browser
          </WorkItemGrid>
        </Section>
        <Section delay={0.3}>
          <WorkItemGrid id='gameOfLife' title='GameOfLife' thumbnail={thumbConway}>
            A simple synthesizer/sequencer in the browser
          </WorkItemGrid>
        </Section>
      </SimpleGrid>
    </Container>
    </Layout>
  )
}

export default Projects