import {
  VStack,
  Stack,
  Slider,
  Box,
  SliderTrack,
  Text,
  SliderFilledTrack,
  SliderThumb,
  keyframes,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import AIRealBlob from "~/images/AIRealBlob";
import AIYusuf from "~/images/AIYusuf";
import RealYusuf from "~/images/RealYusuf";
import { useState, useEffect } from "react";

export default function BlobSlider() {
  // Used for controlling the split in the Real/AI photo
  const [blobSliderValue, setBlobSliderValue] = useState(0);

  const handleBlobSliderChange = (val: number) => {
    setBlobSliderValue(val);
  };

  const RealYusufAnimationKeyframes = keyframes`
  0% { width: 100%; }
  10% { width: 40%; }
  40% { width: 60%; }
  70% { width: 0%; }
  100% { width: 100%; }
`;

  const RYanimation = `${RealYusufAnimationKeyframes} 8s ease-in-out `;

  useEffect;

  return (
    <VStack>
      <Stack
        w="600px"
        h="600px"
        p={0}
        m={0}
        position="relative"
        alignItems="end"
        justifyContent="center"
      >
        <Box
          w="full"
          h="full"
          zIndex={1}
          position="absolute"
          bottom={0}
          right={0}
        >
          <AIRealBlob />
        </Box>
        <VStack
          as={motion.div}
          animation={RYanimation}
          onAnimationEnd={() => setBlobSliderValue(100)}
          w={`${blobSliderValue}%`}
          position="absolute"
          p={0}
          m={0}
          left={0}
          h="94.2%"
          alignItems="center"
          justifyContent="center"
          zIndex={3}
          border="0"
        >
          <RealYusuf />
        </VStack>
        <VStack
          w={`${100 - blobSliderValue}%`}
          h="94.2%"
          position="absolute"
          right={0}
          alignItems="center"
          justifyContent="center"
          zIndex={2}
        >
          <AIYusuf />
        </VStack>
      </Stack>
      <Slider
        aria-label="slider-ex-1"
        defaultValue={0}
        value={blobSliderValue}
        onChange={(val) => handleBlobSliderChange(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Text size="sm">👈 Cartoon | Me 👉</Text>
    </VStack>
  );
}
