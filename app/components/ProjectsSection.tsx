import {
  VStack,
  Container,
  Flex,
  Text,
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Grid,
  GridItem,
  Code,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import InfiniteScroll from "./InfiniteScroll";
import GammaCVJobs from "~/images/GammaCVJobs";
import { FaRegFolderClosed } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import MacFolder from "~/images/MacFolder";

export default function ProjectsSection() {
  return (
    <VStack
      id="projects"
      bgGradient="linear(to-b, blue.200 0%, blue.300 100%)"
      h={{ base: "min-content", lg: "100vh" }}
      overflow="hidden"
    >
      <Container h="full" maxWidth="9xl" px={{ base: 6, md: 6 }}>
        <Flex h="full" direction={{ base: "column", lg: "row" }}>
          <VStack
            p={10}
            w="full"
            h="full"
            pt={16}
            alignItems="flex-start"
            justifyContent="flex-start"
            minW="40vw"
            flex="1"
          >
            <Heading
              fontSize="7xl"
              bgGradient="linear(to-bl, blue.400, blue.700)"
              bgClip="text"
            >
              Projects
            </Heading>
            <Text my={4} color="blue.900">
              This section is interactive. Open each project's file to view it -
              if you're handy with a terminal try doing it without using the
              Finder! Type <Code>help</Code> to see all commands.
            </Text>
            <Flex
              w="full"
              h="full"
              flexDirection="column"
              columnGap={4}
              rowGap={4}
            >
              {/* Finder */}
              <Box id="folder-wrapper" w="full" h="full" flex="1">
                <Box
                  h="full"
                  columnGap={0}
                  rowGap={0}
                  display="flex"
                  flexDirection="row"
                >
                  {/* Sidebar */}
                  <VStack flex="1" w="min-content">
                    <Box
                      w="min-content"
                      display="flex"
                      flexDirection="column"
                      bg="#E2E0E1"
                      pr={6}
                      h="full"
                      borderLeftRadius="10"
                      border="1px"
                      borderColor="#B3B3B3"
                    >
                      <Box
                        w="full"
                        h={12}
                        mb={4}
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                      >
                        <HStack px={6}>
                          <Box
                            h={3}
                            w={3}
                            bg="#FA5F57"
                            borderRadius="100%"
                            border="1px"
                            borderColor="#E7473F"
                          ></Box>
                          <Box
                            h={3}
                            w={3}
                            bg="#FEBC2E"
                            borderRadius="100%"
                            border="1px"
                            borderColor="#E7A419"
                          ></Box>
                          <Box
                            h={3}
                            w={3}
                            bg="#39C840"
                            borderRadius="100%"
                            border="1px"
                            borderColor="#36AF28"
                          ></Box>
                        </HStack>
                      </Box>
                      <Text
                        ml={4}
                        fontSize="xs"
                        fontWeight="bold"
                        color="#9A9899"
                      >
                        Folders
                      </Text>
                      <HStack ml={5} mt={1}>
                        <FaRegFolderClosed color="#0A74F4" size={14} />
                        <Text fontSize="sm" color="#434343">
                          Projects
                        </Text>
                      </HStack>
                    </Box>
                  </VStack>
                  {/* Folders and Nav */}
                  <VStack
                    display="flex"
                    flexDirection="column"
                    w="full"
                    h="full"
                    rowGap={0}
                    borderRight="1px"
                    borderTop="1px"
                    borderBottom="1px"
                    borderRightRadius="10"
                    borderColor="#B3B3B3"
                    overflow="hidden"
                  >
                    <Box
                      display="flex"
                      justifyContent="flex-start"
                      alignItems="center"
                      h={12}
                      bg="#F8F6F7"
                      w="full"
                    >
                      {/* TODO: Change color of arrows when open folder changes */}
                      <Button m={0} p={0} ml={4} mr={2} bg="#F8F6F7" size="sm">
                        <FaChevronLeft color="#4B4A4B" />
                      </Button>
                      <Button m={0} p={0} mr={4} size="sm" bg="#F8F6F7">
                        <FaChevronRight color="#BEBCBD" />
                      </Button>
                      <Text color="#4B4A4B" fontWeight="semibold">
                        Projects
                      </Text>
                    </Box>
                    <Box flex="1" bg="white" w="full">
                      <Grid
                        gridTemplate="repeat(1, minmax(0,1fr)) / repeat(4, minmax(0,1fr))"
                        p={2}
                      >
                        <Box
                          p={2}
                          flexDirection="column"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <MacFolder />
                          <Text
                            fontSize={{ base: "xs", md: "sm" }}
                            color="#272727"
                          >
                            Revoira
                          </Text>
                        </Box>
                        <Box
                          p={2}
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                          display="flex"
                        >
                          <MacFolder />
                          <Text
                            fontSize={{ base: "xs", md: "sm" }}
                            color="#272727"
                          >
                            gammacv
                          </Text>
                        </Box>
                      </Grid>
                    </Box>
                  </VStack>
                </Box>
              </Box>
              {/* Terminal */}
              <VStack
                id="terminal-wrapper"
                w="full"
                flex="1"
                h="full"
                columnGap={0}
                rowGap={0}
              >
                <Box
                  id="search"
                  borderTopRadius="10"
                  w="full"
                  bg="#413F3F"
                  border="1px"
                  borderColor="#767575"
                  h={12}
                  m={0}
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                >
                  <HStack px={6}>
                    <Box
                      h={3}
                      w={3}
                      bg="#FA5F57"
                      borderRadius="100%"
                      border="1px"
                      borderColor="#E7473F"
                    ></Box>
                    <Box
                      h={3}
                      w={3}
                      bg="#FEBC2E"
                      borderRadius="100%"
                      border="1px"
                      borderColor="#E7A419"
                    ></Box>
                    <Box
                      h={3}
                      w={3}
                      bg="#39C840"
                      borderRadius="100%"
                      border="1px"
                      borderColor="#36AF28"
                    ></Box>
                  </HStack>
                </Box>
                <Box
                  id="terminal"
                  borderBottomRadius="10"
                  borderBottom="1px"
                  borderLeft="1px"
                  borderRight="1px"
                  borderBottomColor="#767575"
                  borderLeftColor="#767575"
                  borderRightColor="#767575"
                  w="full"
                  h="full"
                  bg="#1E1E1E"
                  m={0}
                  p={6}
                >
                  <Text className="terminal-text" color="white">
                    hello
                  </Text>
                </Box>
              </VStack>
            </Flex>
          </VStack>
          {/* Online display */}
          <VStack p={10} display="flex" h="full" w="full" flex="2">
            <Flex
              w="full"
              h="full"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                id="search"
                borderTopRadius="10"
                w="full"
                bg="#F6F5F7"
                border="1px"
                borderColor="#CECECE"
                h={12}
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <HStack p={6}>
                  <Box
                    h={3}
                    w={3}
                    bg="#FA5F57"
                    borderRadius="100%"
                    border="1px"
                    borderColor="#E7473F"
                  ></Box>
                  <Box
                    h={3}
                    w={3}
                    bg="#FEBC2E"
                    borderRadius="100%"
                    border="1px"
                    borderColor="#E7A419"
                  ></Box>
                  <Box
                    h={3}
                    w={3}
                    bg="#39C840"
                    borderRadius="100%"
                    border="1px"
                    borderColor="#36AF28"
                  ></Box>
                </HStack>
                <Box
                  border="1px"
                  w="full"
                  flex="1"
                  h={6}
                  mx={10}
                  borderColor="#CECECE"
                  borderRadius="4"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text
                    fontSize="xs"
                    textColor="gray.500"
                    letterSpacing="widest"
                  >
                    www.gammacv.com
                  </Text>
                </Box>
              </Box>
              <Box
                id="viewbox"
                borderX="1px"
                borderBottom="1px"
                borderBottomRadius="10"
                borderColor="#CECECE"
                borderBottomColor="#CECECE"
                overflow="hidden"
                w="full"
                boxShadow="0px 80px 40px rgba(0, 0, 0, 0.1)"
              >
                <GammaCVJobs />
              </Box>
            </Flex>
          </VStack>
        </Flex>
      </Container>
      <Box w="full" h={12}></Box>
    </VStack>
  );
}
