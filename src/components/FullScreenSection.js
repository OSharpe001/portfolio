import * as React from "react";
import { VStack } from "@chakra-ui/react";

export default function FullScreenSection({ children, isDarkBackground, ...boxProps }) {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};
