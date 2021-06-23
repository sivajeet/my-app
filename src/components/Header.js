import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Stack, Square, Circle, Flex, Text, Box } from "@chakra-ui/layout";
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode == "dark";
    const { isNotSmallerScreen } = useMediaQuery("(min.width=600px)");
    return (
        <Stack>
            <Square position="absolute" bg="blue.100" opacity="0.1" w="200px" h="400px" alignSelf="flex-end" />
            <Circle position="absolute" bg="blue.100" opacity="0.1" w="350px" h="350px" alignSelf="flex-start" />
            <Square position="absolute" bg="blue.100" opacity="0.1" w="70px" h="70px" alignSelf="center" />
            
            <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} align-self="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : "16" } align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, red.400 , orange.500, pink.300)" bgClip='text' >Sivajeet Chand</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>I'm most passionate about giving back to the community, I am interested in exploring the fields of Software Engineering.</Text>
                    <Button mt={5} colorScheme="yellow" onClick={()=> 
                        window.open("https://drive.google.com/file/d/1_TaQ9O5dzT0RpC0-Iu3l90ualV436KLt/view")}>Download CV</Button>
                </Box>
                <Image alignSelf="center"  mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" 
                    src="https://eshendetesia.com/images/user-profile.png" />
            </Flex>
        </Stack>
    )
}

export default Header
