import React from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";

const Loader = () => {
    return (
        <Box
            position="fixed"
            top="0"
            left="0"
            width="100%"
            height="100%"
            zIndex="9999"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
                <Text fontSize={"18px"} fontWeight="medium" color={"blue.500"} >Please Wait...</Text>
            </Box>

        </Box>
    )

};

export default Loader;