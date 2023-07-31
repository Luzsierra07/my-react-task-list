import React from "react";
import TaskList from "./TaskList";
import {Box} from "@chakra-ui/react"


const Tasks= () => {
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
    return(
        <div>
            <Box 
             position="absolute"
             bottom="20px"
             right="60px"
             fontSize="10px"
             sx={innerBoxStyles}
              >
            <h1>Tasks List</h1>
            </Box>
            <Box  display="grid"
                  gap={5}
                  gridAutoFlow="column"
                  position="relative"
                  left="100px"
                  >
            <TaskList/>
            </Box>
            
        </div>
    );
};

export default Tasks; 