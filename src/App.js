import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { VStack, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from "./components/Header";
import Social from "./components/Social";

import Achievements from "./components/Achievements";
import About from "./components/About";
import Education from "./components/Education";


function App() {

  const { colorMode, toggleColorMode}= useColorMode();
  const isDark = colorMode == "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight='semibold' color="orange.400">Sivajeet Chand</Heading>

      <Spacer></Spacer>
      <IconButton icon={<FaLinkedin /> } isRound="true" onClick={()=> 
                window.open("https://www.linkedin.com/in/sivajeet-chand-87857b12b/?originalSubdomain=in")}></IconButton>
      <IconButton ml={2} icon={<FaInstagram />} isRound="true" onClick={()=> 
                window.open("https://www.instagram.com/sivajeet/?hl=en")}></IconButton>
      <IconButton ml={2} icon={<FaGithub />} isRound="true" onClick={()=> 
                window.open("https://github.com/sivajeet")}></IconButton>
      <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <About></About>
      
      <Education></Education>
      <Social></Social>
      
    </VStack>
  );
}

export default App;
