import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

    <Avatar name="Pete" size="2xl" alt="pete"src="https://i.pravatar.cc/150?img=7" />
    <VStack spacing="24px">
      <Heading as="h1" size="sm">{greeting}</Heading>
      <br />
      <Heading as="h2" size="2xl">{bio1}</Heading>
      <Heading as="h2" size="2xl">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
