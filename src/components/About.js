import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
  
  export default function CallToActionWithIllustration() {
    const { colorMode, toggleColorMode}= useColorMode();
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
             About{' '}
            <Text as={'span'} color={'orange.400'}>
              me
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          Hello! My name is Sivajeet and I am a Software Engineer at Cognizant. I graduated with my Bachelor's degree in Information Technology in May of 2020. The past two summers, I interned as a Web Engineer at Harp On This and Tata Technologies. I'm most passionate about giving back to the community, I am interested in exploring the fields of Software Engineering, Full-StackDevelopment, Data Science, and Machine Learning, and my goal is to pursue this passion within the field of software engineering!
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }} onClick={()=> 
                window.open("https://drive.google.com/file/d/1_TaQ9O5dzT0RpC0-Iu3l90ualV436KLt/view")}>
              Download CV
            </Button>
            <Button rounded={'full'} px={6}>
              Read more
            </Button>
            
          </Stack>
          <flex w="100%">
            <IconButton icon={<FaLinkedin size={60}/> } onClick={()=> 
                window.open("https://www.linkedin.com/in/sivajeet-chand-87857b12b/?originalSubdomain=in")}></IconButton>
            <IconButton ml={8} icon={<FaInstagram size={60}/>} onClick={()=> 
                window.open("https://www.instagram.com/sivajeet/?hl=en")}></IconButton>
            <IconButton ml={8} icon={<FaGithub size={60}/>} onClick={()=> 
                window.open("https://github.com/sivajeet")}></IconButton>
          </flex>
          
        </Stack>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10}}>
        <Heading 
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}>
         My{' '}
        <Text as={'span'} color={'orange.400'}>
          Experiences
        </Text>
      </Heading></Stack>
      </Container>
    );
  }
  
 