import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/layouts/article'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="synthya">
      <Container>
        <Title>
          Synthya <Badge>2020</Badge>
        </Title>
        <P>Synth jawn in the broswer, he crazy for this one.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Nodejs,Chakra ui</span>
          </ListItem>
          <ListItem>
            <Meta>Site</Meta>
            <Badge color={useColorModeValue('blue', 'orange')}>
              In Progress...
            </Badge>
          </ListItem>
        </List>
        <WorkImage src="public/synth.png" alt="synthya"></WorkImage>
      </Container>
    </Layout>
  )
}

export default Work
