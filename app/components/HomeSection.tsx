import { VStack, Container, Flex, Box } from "@chakra-ui/react";
import BlobSlider from "./BlobSlider";
import Intro from "./Intro";
import Navbar from "./Navbar";

export default function HomeSection() {
  return (
    <VStack
      id="home"
      bgGradient="linear(to-br, gray.100 0%, gray.50 50%, blue.50 100%)"
      h={{ base: "min-content", md: "100vh" }}
      overflow="hidden"
    >
      <Navbar />
      <Container h="full" maxWidth="8xl" px={{ base: 6, md: 6 }}>
        <Flex h="full" direction={{ base: "column", md: "row" }}>
          <VStack
            p={10}
            w="full"
            pt={{ base: "10", md: "0" }}
            alignItems="flex-start"
            justifyContent="center"
            minW="40vw"
          >
            <Intro />
          </VStack>
          <VStack p={10} justifyContent="center" w="full">
            <BlobSlider />
          </VStack>
        </Flex>
      </Container>
      <Box w="full" h={12}></Box>
    </VStack>
  );
}
