import React from 'react'
import { Text } from "@chakra-ui/layout";

function Social() {
    return (
        <div>
           <Text fontSize="sm" >
    &copy; {new Date().getFullYear()} Sivajeet Chand. All rights reserved.
  </Text> 
        </div>
    )
}

export default Social
