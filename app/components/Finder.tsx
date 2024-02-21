import { VStack, HStack, Button, Grid, Text, Box } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaRegFolderClosed } from "react-icons/fa6";
import MacFolder from "~/images/MacFolder";
import CloseMinMaxIcons from "./CloseMinMaxIcons";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "app/components/ProjectsSection";

export default function Finder() {
  const {
    folderStructure,
    setFolderStructure,
    getCurrentFolder,
    cdBack,
    cdIntoFolder,
  } = useContext(ThemeContext);
  const [currContents, setCurrContents] = useState(folderStructure.contents);

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
            <Button
              m={0}
              p={0}
              ml={4}
              mr={2}
              bg="#F8F6F7"
              size="sm"
              onClick={cdBack}
            >
              <FaChevronLeft color="#4B4A4B" />
            </Button>
            <Button m={0} p={0} mr={4} size="sm" bg="#F8F6F7">
              <FaChevronRight color="#BEBCBD" />
            </Button>
            <Text color="#4B4A4B" fontWeight="semibold">
              {
                folderStructure.directories.currDirectory
                  .split("/")
                  .slice(-1)[0]
              }
            </Text>
          </Box>
          <Box flex="1" bg="white" w="full">
            <Grid
              gridTemplate="repeat(1, minmax(0,1fr)) / repeat(4, minmax(0,1fr))"
              p={2}
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
                        p={2}
                        mx={2}
                        bg="none"
                        h="full"
                        onClick={() =>
                          cdIntoFolder(content.name, getCurrentFolder())
                        }
                      >
                        <MacFolder />
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
        </VStack>
      </Box>
    </Box>
  );
}
