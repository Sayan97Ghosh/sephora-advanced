import React from 'react'
import {Box, Button, HStack, Input, VStack,Heading, Text,Flex, Grid} from "@chakra-ui/react";
import"./Samefooter.css";
import { BsFacebook,BsTwitter,BsYoutube,BsInstagram } from "react-icons/bs";
import BacktoTop from '../BackTotop/BacktoTop';
function Samefooter() {
  return (
    <>
     {/* this is for back to top */}
     {/* <BacktoTop/> */}
         {/* this is for footer */}
         <Samefooter/>
    <Box p={1}   mt={"100px"}>
       <Box >
           <VStack backgroundColor={"rgb(242,242,242)"} p={10}  >
                 <Heading size={"xl"}>GET THE LATEST NEWS & OFFERS IN BEAUTY & FASHION</Heading>
                 <HStack mt="10px">
                    <Input variant={"white"} w={"300px"} placeholder='enter your email address'/>
                    <Button backgroundColor={"black"} color={"white"}>Subscribe</Button>
                 </HStack>
           </VStack>

           <Box lineHeight={"40px"} w={"70%"} m="auto">
            <Heading size={"s"}>The best face moisturizer will set your makeup and protect your skin from aging, fine lines, wrinkles, and skin imperfections.</Heading>
            <Text>Whether you have oily skin, regular or combination skin, moisturizer is essential. Sometimes, excess oil is produced due to the lack of moisture on the skin, resulting in excess sebum production. A skin moisturizer can also protect and preserve youthful skin. It's essential to nourish dehydrated skin at least twice a day.
           </Text>
            <Text>Whether you have oily skin, regular or combination skin, moisturizer is essential. Sometimes, excess oil is produced due to the lack of moisture on the skin, resulting in excess sebum production. A skin moisturizer can also protect and preserve youthful skin. It's essential to nourish dehydrated skin at least twice a day.
           </Text>
            <Text>Whether you have oily skin, regular or combination skin, moisturizer is essential. Sometimes, excess oil is produced due to the lack of moisture on the skin, resulting in excess sebum production. A skin moisturizer can also protect and preserve youthful skin. It's essential to nourish dehydrated skin at least twice a day.
           </Text>
           </Box>
           <Grid rowGap="40px">
           {/* mid */}
           <Flex   justifyContent={"space-evenly"} m={"auto"} w="50%">
            <Heading className='pink'size={"md"}>WHO WE ARE</Heading>
            <Heading className='pink'size={"md"}>ASKED QUESTIONS</Heading>
            <Heading className='pink'size={"md"}>CONTACT US</Heading>
           </Flex>
           {/* social icons */}
           <Flex  justifyContent={"space-around"} m={"auto"} w="25%">
            <BsFacebook size={20} className='pink'/>
            <BsTwitter size={20} className='pink'/>
            <BsInstagram size={20} className='pink'/>
            <BsYoutube size={20} className='pink'/>
             
           </Flex>
           {/* policies */}
           <Flex  justifyContent={"space-between"} m={"auto"} w="30%">
            <Text className='pink'>© 2023 NNNOW</Text>
            <Text className='pink'>Privacy Policy</Text>
            <Text className='pink'>Terms & Conditions</Text>
           </Flex>
           </Grid>
       </Box>

       <Heading mt="30px" size={"md"} textAlign={"center"}>MY SEPHORA</Heading>
       <Text w={"30%"}   m="auto" mt={6}> Myorders| Storelocator| SephoraFacebook| SephoraInstagram</Text>
        

    </Box>
    </>
  )
}

export default Samefooter
