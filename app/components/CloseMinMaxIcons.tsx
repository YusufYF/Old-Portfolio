import { HStack, Box } from "@chakra-ui/react";

export default function CloseMinMaxIcons() {
  return (
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
  );
}
