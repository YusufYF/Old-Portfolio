import { Box, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box w="full" h={24}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        left={0}
        w="full"
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
          <a href="#home">
            <Text
              bgGradient="linear(to-br, blue.200, blue.600)"
              bgClip="text"
              fontSize={{ base: "3xl", sm: "3xl", lg: "xl" }}
              fontWeight="600"
              mx={{ base: "1", sm: "1", lg: "0" }}
            >
              Home
            </Text>
          </a>
          <a href="#projects">
            <Text
              bgGradient="linear(to-br, blue.200, blue.600)"
              bgClip="text"
              fontSize={{ base: "3xl", sm: "3xl", lg: "xl" }}
              fontWeight="600"
              mx={{ base: "1", sm: "1", lg: "0" }}
            >
              Projects
            </Text>
          </a>
        </Box>
      </Box>
    </Box>
  );
}
