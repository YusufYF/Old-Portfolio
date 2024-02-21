import { VStack, HStack, Input, Box, Text } from "@chakra-ui/react";
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
  } = useContext(ThemeContext);
  const terminalEndRef = useRef<HTMLInputElement>(null);
  const [terminalLog, setTerminalLog] = useState(["visitor@Portfolio ~ % "]);
  const [terminalPrefix, setTerminalPrefix] = useState(
    "visitor@Portfolio ~ % "
  );
  const [terminalInput, setTerminalInput] = useState("");
  const [inputHistory, setInputHistory] = useState([]);

  const handleTerminalInputChange = (value) => {
    if (value.includes(terminalPrefix)) {
      setTerminalInput(value.replace(terminalPrefix, ""));
    } else {
      setTerminalInput("");
    }
  };

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

    terminalEndRef.current?.scrollIntoView({ behavior: "instant" });
    terminalEndRef.current?.focus();
    const words = terminalInput.trim().split(" ");

    // Handling different commands:
    switch (words[0]) {
      case "cd": {
        if (words.length >= 2 && words[1] === "..") {
          cdBack();
          setTerminalInput("");
          break;
        }
        // Traverse through all directories until you get to current folder
        let currFolder = getCurrentFolder();
        if (words.length >= 2) {
          cdIntoFolder(words[1], currFolder);
        } else {
          setTerminalLog((terminalLog) => [
            ...terminalLog,
            "cd: no such file or directory found: " + words[1],
          ]);
        }
        setTerminalInput("");
        break;
      }

      case "": {
        setTerminalInput("");
        break;
      }
      case "help": {
        setTerminalLog((terminalLog) => [
          ...terminalLog,
          "[ls: Lists files in current directory] [help: Shows available commands] [open <filename>: Opens a project file] [cd <folder>: Changes directory]",
        ]);
        setTerminalInput("");
        break;
      }
      default: {
        setTerminalInput("");
        break;
      }
    }
  };

  return (
    <VStack
      id="terminal-wrapper"
      w="full"
      columnGap={0}
      rowGap={0}
      position="relative"
      flex="1"
      h="full"
      minH={40}
      onClick={() => {
        terminalEndRef.current?.focus();
      }}
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
        {terminalLog.map((log, index) => {
          return (
            <Text
              key={index}
              className="terminal-text"
              color="white"
              m={0}
              p={0}
            >
              {log}
            </Text>
          );
        })}
        <Input
          border="none"
          ref={terminalEndRef}
          className="terminal-text"
          color="white"
          mb={4}
          p={0}
          h="24px"
          value={terminalPrefix + terminalInput}
          borderRadius={0}
          _focus={{ boxShadow: "none" }}
          onChange={(e) => handleTerminalInputChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleTerminalEnterPress();
          }}
        ></Input>
      </Box>
    </VStack>
  );
}
