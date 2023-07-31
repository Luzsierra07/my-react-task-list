import React from "react";
import  {Box, Image} from "@chakra-ui/react";

const Home = () => {
        
        const innerBoxStyles = {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          boxSize: 'full',
          color: '#67055a',
          textShadow: '0 0 20px grey',
          fontWeight: 'bold',
          fontSize: '20px',
        }
    return (
        <div>
             <Box oxSize= "md" w="1340px" flex="1" position="absolute"
         top="0px" left="0px">
           <Image src='https://images.herzindagi.info/image/2022/Nov/how-to-make-a-to-do-list-in-hindi.jpg' alt='To do list' 
            boxSize="500px"
            w="1500px"
            h="490px"
            p={2}
            filter="blur(2px)" 
            />
         </Box>
            <Box 
            position="absolute"
            top="180px"
            bottom="20px"
            right="60px"
            fontSize="27px"
            sx={innerBoxStyles}
             backdropFilter='invert(100%)'
             
            >
            <h1>Welcome to your Task List App!</h1>
            </Box>
            <Box
            position="absolute"
            top="280px"
            bottom="20px"
            right="90px"
            fontSize="19px"
            sx={innerBoxStyles}
             backdropFilter='invert(100%)'
            >
            <p>Start organizing your tasks and stay productive!</p>
            </Box>
        
           
        </div>
        
    );
};

export default Home;