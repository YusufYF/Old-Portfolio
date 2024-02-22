import { VStack, HStack, Input, Box, Text, Textarea } from "@chakra-ui/react";
import CloseMinMaxIcons from "./CloseMinMaxIcons";
import { useState, useRef, useContext, useEffect } from "react";
import { ThemeContext } from "app/components/ProjectsSection";

export default function Terminal() {
  const {
    folderStructure,
    setFolderStructure,
    getCurrentFolder,
    cdBack,
    cdIntoFolder,
    terminalLog,
    setTerminalLog,
    openFile,
  } = useContext(ThemeContext);
  const terminalEndRef = useRef(null);
  const terminalContainerRef = useRef(null);

  const [terminalPrefix, setTerminalPrefix] = useState(
    "visitor@Portfolio ~ % "
  );
  const [terminalInput, setTerminalInput] = useState("");

  const handleTerminalInputChange = (value) => {
    if (value.includes(terminalLog.join("\n") + "\n" + terminalPrefix)) {
      setTerminalInput(
        value.replace(terminalLog.join("\n") + "\n" + terminalPrefix, "")
      );
    } else {
      setTerminalInput("");
    }
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollTop = terminalEndRef.current.scrollHeight;
    }
  }, [terminalInput, terminalLog]);

  useEffect(() => {
    const values = folderStructure.directories.currDirectory
      .split("/")
      .filter((elm) => elm);
    let folders = " ~ ";
    if (values.length > 0) {
      folders = " ";
      values.forEach((value) => {
        folders += value + " ";
      });
    }
    setTerminalPrefix("visitor@Portfolio" + folders + "% ");
  }, [folderStructure.directories.currDirectory]);

  const handleTerminalEnterPress = () => {
    setTerminalLog((terminalLog) => [
      ...terminalLog,
      terminalPrefix + terminalInput,
    ]);
    const words = terminalInput.trim().split(" ");

    // Handling different commands:
    switch (words[0]) {
      case "cd": {
        if (words.length === 1 && words[0] === "cd") {
          break;
        }
        if (words.length >= 2 && words[1] === "..") {
          cdBack();
          break;
        }
        // Traverse through all directories until you get to current folder
        let currFolder = getCurrentFolder();
        if (words.length >= 2) {
          cdIntoFolder(words[1], currFolder, words);
        }
        break;
      }
      case "display": {
        if (words.length === 1 && words[0] === "display") {
          break;
        }
        let currFolder = getCurrentFolder();
        if (words.length >= 2) {
          const foundFile = currFolder.contents.find(
            (content) => content.name === words[1] && content.type === "file"
          );
          if (foundFile) {
            openFile(getCurrentFolder().name, words[1], foundFile.contents);
          } else {
            setTerminalLog((terminalLog) => [
              ...terminalLog,
              "display: no such file found: " + words[1],
            ]);
          }
        }
        break;
      }

      case "": {
        break;
      }
      case "help": {
        setTerminalLog((terminalLog) => [
          ...terminalLog,
          "[cd <folder>: Changes directory] [clear: Clears the terminal history] [help: Shows available commands] [ls: Lists files in current directory] [display <filename>: Displays a project file]",
        ]);
        break;
      }
      case "clear": {
        setTerminalLog([""]);
        break;
      }
      default: {
        setTerminalLog((terminalLog) => [
          ...terminalLog,
          "command not found: " + terminalInput,
        ]);
        break;
      }
    }
    // Clear terminal input
    setTerminalInput("");
  };

  return (
    <VStack
      id="terminal-wrapper"
      w="full"
      columnGap={0}
      rowGap={0}
      minH={32}
      position="relative"
      flex="1"
      h="full"
    >
      <Box
        id="search"
        borderTopRadius="10"
        w="full"
        bg="#413F3F"
        border="1px"
        borderColor="#767575"
        h={12}
        minH={12}
        m={0}
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <CloseMinMaxIcons />
      </Box>
      <Box
        id="terminal"
        ref={terminalContainerRef}
        className="terminal-input"
        borderBottomRadius="10"
        borderBottom="1px"
        borderLeft="1px"
        borderRight="1px"
        borderBottomColor="#767575"
        borderLeftColor="#767575"
        borderRightColor="#767575"
        w="full"
        bg="#1E1E1E"
        m={0}
        pb={6}
        pr={6}
        pl={6}
        pt={2}
        rowGap={0}
        columnGap={0}
        position="absolute"
        left={0}
        top={12}
        height="full"
        overflowY="scroll"
      >
        <Textarea
          border="none"
          id="terminal-textarea"
          ref={terminalEndRef}
          className="terminal-text"
          color="white"
          p={0}
          h="full"
          mt={0}
          wordBreak="break-all"
          overflowY="hidden"
          resize="none"
          style={{ boxSizing: "border-box" }}
          spellCheck="false"
          value={(
            terminalLog.join("\n") +
            "\n" +
            terminalPrefix +
            terminalInput +
            "\n"
          ).slice(0, -1)}
          borderRadius={0}
          _focus={{ boxShadow: "none" }}
          onChange={(e) => handleTerminalInputChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleTerminalEnterPress();
            }
          }}
        ></Textarea>
      </Box>
    </VStack>
  );
}
