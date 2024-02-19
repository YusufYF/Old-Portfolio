import { Container, Flex, VStack, Box } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import BlobSlider from "~/components/BlobSlider";
import HomepageIntro from "~/components/HomepageIntro";
import Navbar from "~/components/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Yusuf Yusuf Portfolio" },
    {
      name: "Find out about my work so far.",
      content: "Welcome to my portfolio!",
    },
  ];
};

export default function Index() {
  return (
    <>
      <VStack
        bgGradient="linear(to-br, blue.50 0%, white 20%, white 70%, gray.50 100%)"
        h={{ base: "min-content", md: "100vh" }}
        overflow="hidden"
      >
        <Navbar />
        <Container h="full" maxWidth="8xl" px={{ base: 6, md: 6 }}>
          <Flex h="full" direction={{ base: "column", md: "row" }}>
            <VStack
              w="full"
              p={10}
              pt={{ base: "10", md: "0" }}
              alignItems="flex-start"
              justifyContent="center"
              minW="40vw"
            >
              <HomepageIntro />
            </VStack>
            <VStack p={10} justifyContent="center" w="full">
              <BlobSlider />
            </VStack>
          </Flex>
        </Container>
        <Box w="full" h={12}></Box>
      </VStack>
    </>
  );
}
