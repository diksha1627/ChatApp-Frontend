import React from "react";
import { Container, Box, Text , Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
import  backg from '../images/ufo-g69827ed10_1280.jpg'
function Homepage() {
  return ( 
    <Container maxW="10xl" centerContent bgImg={backg}   h="100vh" bgRepeat='none'  bgSize='cover'>
      <Box
        d="flex"
        p={3}
        bg={"white"}
        justifyContent="center"
        w="50%"
        m="40px 0 1rem 0"
        borderRadius="1rem"
        borderWidth="1px"
        bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'
      >
        <Text> Chat App </Text>
      </Box>
      <Box
        d="flex"
        p={3}
        bg={"white"}
        justifyContent="center"
        w="50%"
        m="40px 0 1rem 0"
        borderRadius="1rem"
        borderWidth="1px"
        bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'

      >
        <Tabs variant='soft-rounded' colorScheme='blue'>
  <TabList>
    <Tab >Login</Tab>
    <Tab>Signup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel >
      {/* LOGIN */}
      <Login />
    </TabPanel>
    <TabPanel>
     {/* SIGNUP */}
     <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  
  );
}

export default Homepage;
