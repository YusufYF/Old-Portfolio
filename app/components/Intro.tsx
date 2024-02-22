import {
  Heading,
  Box,
  Text,
  Stack,
  Button,
  HStack,
  Divider,
} from "@chakra-ui/react";
import InfiniteScroll from "./InfiniteScroll";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Wave from "~/images/Wave";
import { useBreakpointValue } from "@chakra-ui/react";

export default function Intro() {
  const linkSizes = useBreakpointValue({ base: 48, sm: 48, lg: 32 });
  const handleOpenLinkedIn = () => {
    window.open("https://www.linkedin.com/in/yusufsedail/", "_blank");
  };
  const handleOpenGitHub = () => {
    window.open("https://github.com/Sestios", "_blank");
  };
  return (
    <>
      <Heading fontSize="7xl" display="inline" whiteSpace="nowrap">
        Hi there!{" "}
        <Text
          className="handwave"
          color="blue.300"
          transformOrigin="75% 75%"
          display="inline-block"
          height="1em"
          width="1em"
        >
          <Wave />
        </Text>
      </Heading>
      <Heading className="headingexample" fontSize="7xl" whiteSpace="nowrap">
        <Text className="im" display="inline">
          I'm{" "}
        </Text>
        <Text
          as="span"
          className="surname"
          display="inline-block"
          color="blue.300"
          style={{ transformOrigin: "0% 100%" }}
        >
          Yusuf.
        </Text>
      </Heading>
      <Text
        fontSize={{ base: "3xl", sm: "3xl", lg: "lg" }}
        py={{ base: "10" }}
        align={{ base: "center", sm: "center", lg: "start" }}
      >
        Aspiring software engineer with an interest in frontend development.{" "}
        <Box
          as="br"
          display={{
            base: "none",
            sm: "none",
            lg: "inline",
          }}
        ></Box>
        Second-year BSc Computer Science student at King's College London.
      </Text>
      <HStack mt={{ base: 6, md: 12 }} spacing={{ base: 8, sm: 8, lg: 0 }}>
        <Button bg="none" p={0} m={0} onClick={handleOpenLinkedIn}>
          <FaLinkedin size={linkSizes} />
        </Button>
        <Button bg="none" p={0} m={0} onClick={handleOpenGitHub}>
          <FaGithubSquare size={linkSizes} />
        </Button>
      </HStack>
      <HStack mt={{ base: 6, md: 12 }} w="full">
        <Text
          fontSize={{ base: "2xl", sm: "2xl", lg: "lg" }}
          whiteSpace="nowrap"
          fontWeight="semibold"
        >
          Tech Stack
        </Text>
        <Divider orientation="vertical" mx={2}></Divider>
        <InfiniteScroll />
      </HStack>
    </>
  );
}
