import {
  VStack,
  Container,
  Flex,
  Text,
  Box,
  Button,
  HStack,
  Heading,
  Grid,
  Code,
} from "@chakra-ui/react";

import GammaCVJobs from "~/images/GammaCVJobs";
import { FaRegFolderClosed } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import MacFolder from "~/images/MacFolder";
import Terminal from "./Terminal";
import CloseMinMaxIcons from "./CloseMinMaxIcons";
import React from "react";
import Finder from "./Finder";
import { useState } from "react";

export const ThemeContext = React.createContext(null);

export default function ProjectsSection() {
  // First object contains the folders and files, second object stores current working directory
  const [folderStructure, setFolderStructure] = useState({
    name: "start",
    contents: [
      {
        type: "folder",
        name: "Projects",
        contents: [
          { type: "folder", name: "gammacv", contents: [] },
          { type: "folder", name: "Revoira", contents: [] },
        ],
      },
    ],
    directories: { currDirectory: "", prevDirectory: "", lastMovement: "" },
  });

  const cdBack = () => {
    if (folderStructure.directories.currDirectory !== "") {
      let newPath = folderStructure.directories.currDirectory
        .split("/")
        .slice(0, -1)
        .join("/");

      // Go back if possible
      setFolderStructure((folderStructure) => ({
        ...folderStructure,
        directories: {
          ...folderStructure.directories,
          prevDirectory: folderStructure.directories.currDirectory,
          currDirectory: newPath,
        },
      }));
    }
  };

  const cdIntoFolder = (folderName, currFolder) => {
    let l = currFolder.contents.filter((content) => {
      return content.name === folderName && content.type === "folder";
    }).length;
    if (l > 0) {
      setFolderStructure((folderStructure) => ({
        ...folderStructure,
        directories: {
          ...folderStructure.directories,
          prevDirectory: folderStructure.directories.currDirectory,
          currDirectory: `${folderStructure.directories.currDirectory}/${folderName}`,
        },
      }));
    }
  };

  const getCurrentFolder = () => {
    const jumps = folderStructure.directories.currDirectory.split("/");
    let currFolder = folderStructure;
    jumps.forEach((jump) => {
      if (jump !== "") {
        const foundFolder = currFolder.contents.find(
          (content) => content.name === jump && content.type === "folder"
        );
        if (foundFolder) {
          currFolder = foundFolder;
        }
      }
    });
    return currFolder;
  };

  return (
    <ThemeContext.Provider
      value={{
        folderStructure,
        setFolderStructure,
        getCurrentFolder,
        cdBack,
        cdIntoFolder,
      }}
    >
      <VStack
        id="projects"
        bgGradient="linear(to-b, blue.200 0%, blue.300 100%)"
        h={{ base: "min-content", lg: "100vh" }}
        overflow="hidden"
      >
        <Container h="full" maxWidth="9xl" px={{ base: 0, sm: 0, lg: 6 }}>
          <Flex
            h="full"
            direction={{ base: "column", sm: "column", lg: "row" }}
          >
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
                bgGradient="linear(to-bl, blue.600, blue.600)"
                bgClip="text"
              >
                Projects
              </Heading>
              <Text my={4} color="blue.900">
                This section is interactive. Open each project's file to view it
                - if you're handy with a terminal try doing it without using the
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
                <Finder />
                {/* Terminal */}
                <Terminal />
              </Flex>
            </VStack>
            {/* Online display */}
            <VStack
              p={10}
              pt={{ base: "6", sm: "6", lg: "10" }}
              display="flex"
              h="full"
              w="full"
              flex="2"
            >
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
                  <CloseMinMaxIcons />
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
    </ThemeContext.Provider>
  );
}
