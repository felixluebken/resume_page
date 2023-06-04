
import { Box, Container } from '@chakra-ui/react'




import AboutMe from './components/sections/AboutMe'


import Expertise from './components/sections/Expertise';
import Languages from './components/sections/Languages';
import Publications from './components/sections/Publications';
import Projects from './components/sections/Projects';



function App() {
  return (
    <Box h='100vh' overflowY='scroll'>
      <Container maxW='5xl' centerContent>
        <AboutMe />
        <Expertise />
        <Languages />
        <Publications />
        <Projects />
        <Box h='300px'>

        </Box>
      </Container>
    </Box>
  )
}

export default App
