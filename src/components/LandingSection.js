import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import my_profile from "../images/small_profile.png"

const greeting = "Hello, I am Omari!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

export default function LandingSection() {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >

      <Avatar backgroundColor="rgb(245, 245, 220)" className="my-profile" name="O.Sharpe" size="2xl" alt="O.Sharpe"src={my_profile} />
      <VStack spacing="24px">
        <Heading color="rgb(245, 245, 220)" as="h1" size="sm">{greeting}</Heading>
        <br />
        <Heading color="rgb(245, 245, 220)" as="h2" size="2xl">{bio1}</Heading>
        <Heading color="rgb(245, 245, 220)" as="h2" size="2xl">{bio2}</Heading>
      </VStack>
    </FullScreenSection>
  );
};
