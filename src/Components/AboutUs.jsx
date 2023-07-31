import React from "react";
import {Box} from "@chakra-ui/react";

const AboutUs = () => {
    const innerBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#67055a',
        textShadow: '0 0 20px grey',
        fontSize: '20px',}
    return (
    <div>
        <Box 
        position="absolute"
        bottom="1420px"
        right="700px"
        fontWeight="bold" 
        fontSize="10px"
        sx={innerBoxStyles} >
          
        <h1>About us</h1>
        </Box>
        <Box  textAlign="center"
         position="absolute" left="280px" 
         marginTop="90px" color="#67055a">
        <p>This app was designed to help you organize your tasks and maintain a high level of productivity.</p>
        </Box>
        <Box textAlign="center" color="#67055a" 
        fontWeight="bold" fontSize="20px" 
        marginTop="150px"
        >
        <h2>Functionalities</h2>
        </Box>
        <ul> 
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={20}>
            <Box 
            marginTop="20px"
            p={6}
            textAlign="center"
            width="220px"
            height="220px"
            border="3px solid #c41dab"
            borderRadius="20px"
            marginBottom="10px"
            bg="rgb(250, 219, 243)"
            borderBottomLeftRadius="30%">
            <li> <Box fontWeight="bold" color="#67055a">Add Tasks:</Box> You can add new tasks to your list by providing a title, description (optional), date, and state.</li>
            </Box>

            <Box 
            marginTop="20px"
            border="3px solid #c41dab"
            borderRadius="20px"
            marginBottom="5px"
            bg="rgb(250, 219, 243)"
            borderBottomLeftRadius="30%"
            p={6}
            textAlign="center"
            width="220px"
            height="220px">
            <li><Box fontWeight="bold" color="#67055a">Delete Tasks:</Box> You have the option to delete tasks from your list if they are no longer needed.</li>
            </Box>

            <Box 
             border="3px solid #c41dab"
             borderRadius="20px"
            marginBottom="5px"
            bg="rgb(250, 219, 243)"
            borderBottomLeftRadius="30%"
             p={6}
             textAlign="center"
             width="220px"
            height="220px">
            <li> <Box fontWeight="bold" color="#67055a">Mark as Completed: </Box>You can mark a task as completed by selecting the "Done" state from the dropdown menu and cross out the task by selecting the checkbox.</li>
            </Box>

            <Box 
            border="3px solid #c41dab"
            borderRadius="20px"
            marginBottom="5px"
            bg="rgb(250, 219, 243)"
            borderBottomLeftRadius="30%"
            p={6}
            textAlign="center"
            width="220px"
            height="220px">
            <li><Box fontWeight="bold" color="#67055a">Modify Date: </Box>If the dates of your tasks change, you can easily update them by selecting a new date in the corresponding field.</li>
            </Box>
         </Box>
        </ul>
        <Box position="relative" bottom="585px" color="#67055a" 
        fontWeight="bold" fontSize="20px" left="950px"
        >
        <h2>Technologies Used</h2>
        </Box>
       
        <ul>
        <Box position="relative" bottom="585px" left="795px">
         <Box marginTop="20px"
            p={6}
            textAlign="center"
            width="220px"
            height="220px"
            border="3px solid #c41dab"
            borderRadius="20px"
            marginBottom="10px"
            bg="rgb(250, 219, 243)"
            borderBottomLeftRadius="30%">
            <li><Box fontWeight="bold" color="#67055a">React: </Box>A popular JavaScript framework for building user interfaces.</li>
            </Box>
            </Box>
            <Box position="relative" bottom="827px" left="1095px">
            <Box marginTop="20px"
            p={6}
            textAlign="center"
            width="220px"
            height="220px"
            border="3px solid #c41dab"
            borderRadius="20px"
            marginBottom="10px"
            bg="rgb(250, 219, 243)"
            borderBottomLeftRadius="30%">
            <li><Box fontWeight="bold" color="#67055a">LocalStorage:</Box> To store tasks locally in the user's browser and maintain data persistence.</li>
            </Box>
            </Box>
            <Box position="relative" bottom="759px" left="960px">
            <Box marginTop="20px"
            p={6}
            textAlign="center"
            width="220px"
            height="220px"
            border="3px solid #c41dab"
            borderRadius="20px"
            marginBottom="10px"
            bg="rgb(250, 219, 243)"
            borderBottomLeftRadius="30%">
            <li><Box fontWeight="bold" color="#67055a">UUID: </Box>To generate inique identifiers for each created task.</li>
            </Box>
            </Box>
        </ul>
        <Box  textAlign="center"
         position="absolute" left="250px" 
         bottom="690px" color="#67055a">
        <p> We hope you enjoy using our application and that it helps you keep your tasks organized and achieve your goals effectively! </p>
        </Box>
    </div>
    );
};

export default AboutUs;