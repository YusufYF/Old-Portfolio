import { Box, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box w="100vw" h={24}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        left={0}
        w="100vw"
        h={28}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
          left={0}
          w={{ base: "90vw", md: "50vw" }}
          h={24}
        >
          <a href="daskdj">
            <Text
              bgGradient="linear(to-br, blue.200, blue.600)"
              bgClip="text"
              fontSize="xl"
              fontWeight="600"
              letterSpacing="widest"
            >
              Home
            </Text>
          </a>
          <a href="daskdj">
            <Text
              bgGradient="linear(to-br, blue.200, blue.600)"
              bgClip="text"
              fontSize="xl"
              fontWeight="600"
              letterSpacing="widest"
            >
              Projects
            </Text>
          </a>
          <a href="daskdj">
            <Text
              bgGradient="linear(to-br, blue.200, blue.600)"
              bgClip="text"
              fontSize="xl"
              fontWeight="600"
              letterSpacing="widest"
            >
              About
            </Text>
          </a>
          <a href="daskdj">
            <Text
              bgGradient="linear(to-br, blue.200, blue.600)"
              bgClip="text"
              fontSize="xl"
              fontWeight="600"
              letterSpacing="widest"
            >
              Contact
            </Text>
          </a>
        </Box>
      </Box>
      <Box position="fixed" right={0} w="10vw" h={24}></Box>
    </Box>
  );
}
