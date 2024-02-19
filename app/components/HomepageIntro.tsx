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
import { transform } from "framer-motion";

export default function HomepageIntro() {
  const handleOpenLinkedIn = () => {
    window.open("https://www.linkedin.com/in/yusufsedail/", "_blank");
  };
  const handleOpenGitHub = () => {
    window.open("https://github.com/Sestios", "_blank");
  };
  return (
    <>
      <Heading fontSize="7xl">
        Hi&nbsp;there!&nbsp;
        <Text
          className="handwave"
          color="blue.300"
          transformOrigin="75% 75%"
          display="inline-block"
        >
          &#128075;
        </Text>
      </Heading>
      <Heading className="headingexample" fontSize="7xl">
        <Text
          as="span"
          className="im"
          display="inline-block"
          style={{ transformOrigin: "0% 100%" }}
        >
          I'm&nbsp;
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
      <Text>
        Aspiring software engineer with an interest in frontend development.
        <br></br>Second-year BSc Computer Science student at King's College
        London.
      </Text>
      <HStack mt={{ base: 6, md: 12 }}>
        <Button bg="none" p={0} m={0} onClick={handleOpenLinkedIn}>
          <FaLinkedin size={32} />
        </Button>
        <Button bg="none" p={0} m={0} onClick={handleOpenGitHub}>
          <FaGithubSquare size={32} />
        </Button>
      </HStack>
      <HStack mt={{ base: 6, md: 12 }} w="full">
        <Text fontSize="lg" whiteSpace="nowrap" fontWeight="semibold">
          Tech Stack
        </Text>
        <Divider orientation="vertical" mx={2}></Divider>
        <InfiniteScroll />
      </HStack>
    </>
  );
}
