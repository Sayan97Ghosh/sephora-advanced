import React from 'react'
import { Box, Container, Divider, Flex, HStack, Heading, Image, Text, AspectRatio, VStack, Button  } from "@chakra-ui/react";
import Carosoul from '../../Components/Carosoul/Carosoul';
import Banner from '../../Components/Banner/Banner';
import { Link } from 'react-router-dom';
import { BsPlayCircleFill } from "react-icons/bs";
import"./Landingpage.css";
import Samefooter from '../../Components/Samefooter/Samefooter';
import BacktoTop from '../../Components/BackTotop/BacktoTop';
function Landingpage() {
  return (
     <>
      <Box m={"auto"}  h="auto" w="90%" >
          <Box>
            <Carosoul/>
          </Box>
         <HStack mb={15} gap={2}>
            {/* number 1 */}
            <Box position={"relative"} h="400px" w="40%" >
             <Image p={2} h="90%"  w="100%" src='https://logan.nnnow.com/content/dam/nnnow-project/03-april-2021/5APR21_SC_BRANDSTORE_VIDEO.jpg'/> 
             <div class="icon">
                {/* <a href="#" class="icon" title="User Profile"> */}
                   <BsPlayCircleFill color='white' size={80}/>
                {/* </a> */}
                </div> 
             
                    {/* <AspectRatio h="90%" maxW='560px' ratio={1}>
                    <iframe h="90%"
                        title='naruto'
                        src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                        allowFullScreen
                    />
                    </AspectRatio>  */}

                <Heading fontWeight="medium" size={"md"}>Skincare savvy with Sephora Collection</Heading>
            </Box>
            <Box h={"100%"} width={"65%"} >
              {/* this is the second box */}
              <Heading fontWeight="medium" size={"xl"}>Best Seller</Heading>
              <Box p={9} h="auto" width="100%">
                 <Banner/>
              </Box>
             
            </Box>
         </HStack>

         <Box mb={20} w={"100%"} h="300px">
            {/* This is for image */}
            <Link to="/gin">
            <Image src='https://logan.nnnow.com/content/dam/nnnow-project/31-may-2022/se/JustLaunched_Desk.jpg'/>
            </Link>
         </Box>


         <HStack mb={15} gap={5}>
            {/* number 2 */}
            <Box  position={"relative"} h="400px" w="38%">
             <Image p={5} h="90%" w="100%" src='https://logan.nnnow.com/content/dam/nnnow-project/31-may-2022/se/Makeup.jpg'/> 
             <div class="icon">
                {/* <a href="#" class="icon" title="User Profile"> */}
                   <BsPlayCircleFill color='white' size={80}/>
                {/* </a> */}
                </div>   

                <Heading fontWeight="medium" size={"md"}>Skincare savvy with Sephora Collection</Heading>
            </Box>
            <Box h={"100%"} width={"65%"} >
              {/* this is the second box */}
              <Heading fontWeight="medium" size={"xl"}>Best Seller</Heading>
              <Box p={9}  h="98%" width="100%">
              <Banner/>
              </Box>
             
            </Box>

         </HStack>
         <HStack mb={15} gap={5}>
            {/* number 3 */}
            <Box position={"relative"} h="400px" w="38%">
             <Image p={5} h="90%" w="100%" src='https://logan.nnnow.com/content/dam/nnnow-project/31-may-2022/se/Skincare.jpg'/>   
             <div class="icon">
                {/* <a href="#" class="icon" title="User Profile"> */}
                   <BsPlayCircleFill color='white' size={80}/>
                {/* </a> */}
                </div> 
                <Heading fontWeight="medium" size={"md"}>Skincare savvy with Sephora Collection</Heading>
            </Box>
            <Box h={"100%"} width={"65%"}>
              {/* this is the second box */}
              <Heading fontWeight="medium" size={"xl"}>Best Seller</Heading>
              <Box p={9}  h="98%" width="100%">
              <Banner/>
              </Box>
             
            </Box>
         </HStack>
         <HStack mb={15} gap={5}>
            {/* number 4 */}
            <Box position={"relative"} h="400px" w="38%" >
             <Image p={5} h="90%"  w="100%" src='https://logan.nnnow.com/content/dam/nnnow-project/31-may-2022/se/Accessories.jpg'/>   
             <div class="icon">
                {/* <a href="#" class="icon" title="User Profile"> */}
                   <BsPlayCircleFill color='white' size={80}/>
                {/* </a> */}
                </div> 
                <Heading fontWeight="medium" size={"md"}>Skincare savvy with Sephora Collection</Heading>
            </Box>
            <Box h={"100%"} width={"65%"} >
              {/* this is the second box */}
              <Heading fontWeight="medium" size={"xl"}>Best Seller</Heading>
              <Box p={9}  h="98%" width="100%">
              <Banner/>
              </Box>
             
            </Box>
         </HStack>
         <HStack mb={15} gap={5}>
            {/* number 5 */}
            <Box position={"relative"} h="400px" w="38%">
             <Image p={5} h="90%"  w="100%" src='https://logan.nnnow.com/content/dam/nnnow-project/31-may-2022/se/Haircare.jpg'/>   
             <div class="icon">
                {/* <a href="#" class="icon" title="User Profile"> */}
                   <BsPlayCircleFill color='white' size={80}/>
                {/* </a> */}
                </div> 
                <Heading fontWeight="medium" size={"md"}>Skincare savvy with Sephora Collection</Heading>
            </Box>
            <Box h={"100%"} width={"65%"}>
              {/* this is the second box */}
              <Heading fontWeight="medium" size={"xl"}>Best Seller</Heading>
              <Box p={9} h="98%" width="100%">
              <Banner/>
              </Box>
             
            </Box>
         </HStack>
         <VStack><Button borderRadius="none" width={"380px"} color="white" background="black">SHOP ALL</Button></VStack>
         <Box  mt={38} w={"100%"} h="250px">
            {/* This is for image */}
            <Link to="/gin">
            <Image h="300px" width="100%" src='https://logan.nnnow.com/content/dam/nnnow-project/30-march-2021/sc-refresh/31MAR21_SC_BRANDSTORE_ABOUTTHEBRAND_DESK.jpg'/>
            </Link>
         </Box>
         {/* samefooter */}
      </Box>
   
         {/* this is for back to top */}
        
         {/* this is for footer */}
         <Samefooter/>
     
        
      </>
   
  )
}

export default Landingpage
