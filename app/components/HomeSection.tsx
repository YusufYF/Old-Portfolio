import { VStack, Container, Flex, Box } from "@chakra-ui/react";
import BlobSlider from "./BlobSlider";
import Intro from "./Intro";
import Navbar from "./Navbar";

export default function HomeSection() {
  return (
    <VStack
      id="home"
      bgGradient="linear(to-br, gray.100 0%, gray.50 50%, blue.50 100%)"
      h={{ base: "min-content", sm: "min-content", lg: "100vh" }}
    >
      <Navbar />
      <Container h="full" maxWidth="8xl" px={{ base: 6, sm: 6, md: 6 }}>
        <Flex h="full" direction={{ base: "column", sm: "column", lg: "row" }}>
          <VStack
            p={10}
            w="full"
            pt={{ base: "20", sm: "20", lg: "0" }}
            alignItems={{ base: "center", sm: "center", lg: "flex-start" }}
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
