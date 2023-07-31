import React from "react";
import {Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Menu = () => {
    return (
        <nav>
            <ul>
           
        <li>
          <Button as={Link} to="/" variant="outline" 
          borderRadius="2px" top="20px" left="100px"
          bgColor="pink.700"
           color="white">
          Home
          </Button>
         
        </li>

        <li>
          <Button as={Link} to="/Tasks" variant="outline"
           borderRadius="2px"
           position="absolute"
           top="140px" left="200px"
           bgColor="pink.700"
           color="white">
          Tasks
          </Button>
          
        </li>

        <li>
         <Button as={Link} to="/AboutUs" variant="outline"
          borderRadius="2px"
          pos="absolute"
          top="140px" left="300px"
          bgColor="pink.700"
           color="white">
          AboutUs
          </Button>
        </li>
        
      </ul>
        </nav>  
    )
}

export default Menu;