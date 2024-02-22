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
import React, { useEffect } from "react";
import Finder from "./Finder";
import { useState } from "react";
import GammaCVHome from "~/images/GammaCVHome";

export const ThemeContext = React.createContext(null);

export default function ProjectsSection() {
  // First object contains the folders and files, second object stores current working directory
  // Masks for images: Capture Selected Window, multiple tabs open, light mode, mask size W3809xH1947 on Figma, align top left corner
  const [folderStructure, setFolderStructure] = useState({
    name: "start",
    contents: [
      {
        type: "folder",
        name: "Projects",
        contents: [
          {
            type: "folder",
            name: "gammacv",
            hyperlink: "",
            contents: [
              {
                type: "file",
                name: "home",
                contents: [<GammaCVHome key="gammacvhome" />],
              },
              {
                type: "file",
                name: "jobs",
                contents: [<GammaCVJobs key="gammacvjobs" />],
              },
            ],
          },
          { type: "folder", name: "Revoira", hyperlink: "", contents: [] },
        ],
      },
    ],
    directories: { currDirectory: "", prevDirectory: "", lastMovement: "back" },
    websiteDisplay: { project: "", page: "", image: "empty" },
  });
  const [terminalLog, setTerminalLog] = useState([""]);

  const openFile = (project, filename, contents) => {
    setFolderStructure((folderStructure) => ({
      ...folderStructure,
      websiteDisplay: {
        ...folderStructure.websiteDisplay,
        project: project,
        page: filename,
        image: contents,
      },
    }));
  };

  const cdBack = () => {
    if (folderStructure.directories.currDirectory !== "") {
      let newPath = folderStructure.directories.currDirectory
        .split("/")
        .slice(0, -1)
        .join("/");

      // Go back if possible
      if (folderStructure.directories.lastMovement === "back") {
        setFolderStructure((folderStructure) => ({
          ...folderStructure,
          directories: {
            ...folderStructure.directories,
            currDirectory: newPath,
            lastMovement: "back",
          },
        }));
      } else {
        const curr = folderStructure.directories.currDirectory;
        setFolderStructure((folderStructure) => ({
          ...folderStructure,
          directories: {
            ...folderStructure.directories,
            prevDirectory: curr,
            currDirectory: newPath,
            lastMovement: "back",
          },
        }));
      }
    }
  };

  const cdIntoFolder = (folderName, currFolder, words) => {
    let l = currFolder.contents.filter((content) => {
      return content.name === folderName && content.type === "folder";
    }).length;
    if (l > 0) {
      if (
        folderStructure.directories.prevDirectory.startsWith(
          `${folderStructure.directories.currDirectory}/${folderName}`
        )
      ) {
        setFolderStructure((folderStructure) => ({
          ...folderStructure,
          directories: {
            ...folderStructure.directories,
            currDirectory: `${folderStructure.directories.currDirectory}/${folderName}`,
            lastMovement: "forward",
          },
        }));
      } else {
        setFolderStructure((folderStructure) => ({
          ...folderStructure,
          directories: {
            ...folderStructure.directories,
            prevDirectory: `${folderStructure.directories.currDirectory}/${folderName}`,
            currDirectory: `${folderStructure.directories.currDirectory}/${folderName}`,
            lastMovement: "forward",
          },
        }));
      }
    } else {
      setTerminalLog((terminalLog) => [
        ...terminalLog,
        "cd: no such file or directory found: " + words[1],
      ]);
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
        terminalLog,
        setTerminalLog,
        openFile,
      }}
    >
      <VStack
        id="projects"
        bgGradient="linear(to-b, blue.200 0%, blue.300 100%)"
        h={{ base: "min-content", lg: "100vh" }}
        overflow="hidden"
      >
        <Container h="full" maxWidth="9xl" px={{ base: 3, sm: 3, lg: 6 }}>
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
                      {folderStructure.websiteDisplay.project === ""
                        ? null
                        : "www." +
                          folderStructure.websiteDisplay.project +
                          ".com/" +
                          folderStructure.websiteDisplay.page}
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
                  {folderStructure.websiteDisplay.image == "empty"
                    ? null
                    : folderStructure.websiteDisplay.image}
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
