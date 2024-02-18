import { Container, Flex, VStack } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import "public/styles/homepage_styles.css";
import BlobSlider from "~/components/BlobSlider";

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
    <Container maxWidth="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <VStack
          w="full"
          h="full"
          p={10}
          spacing={10}
          alignItems="flex-start"
        ></VStack>
        <VStack bg="gray.50" w="full" h="full">
          <BlobSlider />
        </VStack>
      </Flex>
    </Container>
  );
}
