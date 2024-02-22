import {
  VStack,
  HStack,
  Button,
  Grid,
  Text,
  Box,
  background,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaRegFolderClosed } from "react-icons/fa6";
import MacFolder from "~/images/MacFolder";
import CloseMinMaxIcons from "./CloseMinMaxIcons";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "app/components/ProjectsSection";
import GammaCVJobs from "~/images/GammaCVJobs";

export default function Finder() {
  const {
    folderStructure,
    setFolderStructure,
    getCurrentFolder,
    cdBack,
    cdIntoFolder,
    openFile,
  } = useContext(ThemeContext);
  const [currContents, setCurrContents] = useState(folderStructure.contents);
  const [cdForwardAvailable, setCdForwardAvailable] = useState(false);
  const [cdBackAvailable, setCdBackAvailable] = useState(false);

  useEffect(() => {
    setCdBackAvailable(folderStructure.directories.currDirectory !== "");
  }, [folderStructure.directories.currDirectory]);

  useEffect(() => {
    const available =
      folderStructure.directories.prevDirectory.startsWith(
        folderStructure.directories.currDirectory
      ) &&
      folderStructure.directories.prevDirectory.length >
        folderStructure.directories.currDirectory.length;
    setCdForwardAvailable(available);
  }, [
    folderStructure.directories.currDirectory,
    folderStructure.directories.prevDirectory,
  ]);

  useEffect(() => {
    const jumps = folderStructure.directories.currDirectory.split("/");
    let newCurrContents = [...folderStructure.contents]; // Initialize with the root contents

    jumps.forEach((jump) => {
      if (jump !== "") {
        const foundFolder = newCurrContents.find(
          (content) => content.name === jump && content.type === "folder"
        );
        if (foundFolder) {
          newCurrContents = foundFolder.contents; // Update contents to the contents of found folder
        }
      }
    });

    setCurrContents(newCurrContents);
  }, [folderStructure.contents, folderStructure.directories.currDirectory]);

  return (
    <Box id="folder-wrapper" w="full" flex="1">
      <Box h="full" columnGap={0} rowGap={0} display="flex" flexDirection="row">
        {/* Sidebar */}
        <Box flex="1" w="min-content" minH={24}>
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
              <CloseMinMaxIcons />
            </Box>
            <Text ml={4} fontSize="xs" fontWeight="bold" color="#9A9899">
              Folders
            </Text>
            <HStack ml={5} mt={1}>
              <FaRegFolderClosed color="#0A74F4" size={14} />
              <Text fontSize="sm" color="#434343">
                Projects
              </Text>
            </HStack>
          </Box>
        </Box>
        {/* Folders and Nav */}
        <Box
          display="flex"
          flexDirection="column"
          w="full"
          h="full"
          minH={32}
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
            <Button
              m={0}
              p={0}
              ml={4}
              mr={2}
              bg="#F8F6F7"
              size="sm"
              onClick={cdBack}
              disabled={!cdBackAvailable}
              _hover={
                !cdBackAvailable
                  ? { background: "none" }
                  : { background: "#E2E0E2" }
              }
            >
              <FaChevronLeft color={cdBackAvailable ? "#4B4A4B" : "#BEBCBD"} />
            </Button>
            <Button
              m={0}
              p={0}
              mr={4}
              size="sm"
              bg="#F8F6F7"
              onClick={() => {
                if (cdForwardAvailable) {
                  cdIntoFolder(
                    folderStructure.directories.prevDirectory
                      .replace(folderStructure.directories.currDirectory, "")
                      .split("/")[1],
                    getCurrentFolder(),
                    folderStructure.directories.prevDirectory
                      .replace(folderStructure.directories.currDirectory, "")
                      .split("/")[1]
                  );
                }
              }}
              disabled={!cdForwardAvailable}
              _hover={
                !cdForwardAvailable
                  ? { background: "none" }
                  : { background: "#E2E0E2" }
              }
            >
              <FaChevronRight
                color={cdForwardAvailable ? "#4B4A4B" : "#BEBCBD"}
              />
            </Button>
            <Text color="#4B4A4B" fontWeight="semibold">
              {
                folderStructure.directories.currDirectory
                  .split("/")
                  .slice(-1)[0]
              }
            </Text>
          </Box>
          <Box flex="1" bg="white" w="full" h="full">
            <Grid
              gridTemplate="repeat(1, minmax(0,1fr)) / repeat(4, minmax(0,1fr))"
              p={2}
              h="full"
            >
              {currContents &&
                currContents.map((content) => {
                  if (content.type === "folder") {
                    return (
                      <Button
                        key={content.name}
                        flexDirection="column"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        w="full"
                        p={2}
                        mx={2}
                        bg="none"
                        h="min-content"
                        onClick={() =>
                          cdIntoFolder(content.name, getCurrentFolder())
                        }
                      >
                        <Box
                          w="100%"
                          aspectRatio="1/1"
                          display="flex"
                          p={1}
                          justifyContent="center"
                          alignItems="center"
                          mb={3}
                        >
                          <Box
                            w="full"
                            aspectRatio="1/1"
                            border="1px"
                            borderColor="rgba(0,0,0,0)"
                          >
                            <MacFolder />
                          </Box>
                        </Box>
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
                          color="#272727"
                          fontWeight="normal"
                        >
                          {content.name}
                        </Text>
                      </Button>
                    );
                  }
                  if (content.type === "file") {
                    return (
                      <Button
                        w="100%"
                        key={content.name}
                        flexDirection="column"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        p={2}
                        mx={2}
                        bg="none"
                        h="min-content"
                        onClick={() => {
                          openFile(
                            getCurrentFolder().name,
                            content.name,
                            content.contents
                          );
                        }}
                      >
                        <Box
                          w="100%"
                          aspectRatio="1/1"
                          display="flex"
                          p={1}
                          justifyContent="center"
                          alignItems="center"
                          bg="white"
                          mb={3}
                          boxShadow="base"
                        >
                          <Box
                            w="full"
                            aspectRatio="1/1"
                            _hover={{ background: "white" }}
                            border="1px"
                            borderColor="#B2B2B2"
                          >
                            {content.contents}
                          </Box>
                        </Box>
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
                          color="#272727"
                          fontWeight="normal"
                        >
                          {content.name}
                        </Text>
                      </Button>
                    );
                  }
                })}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
