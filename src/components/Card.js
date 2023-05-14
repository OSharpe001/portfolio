import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Card({ title, description, imageSrc }) {

  return (
    <Box bg="rgb(245, 245, 220)" color="black" borderRadius="15px">
      <VStack align="flex-start" spacing="14px">
        <Image src={imageSrc} borderRadius="15px"/>
        <Heading padding="0 0 0 20px" size="md" >{title}</Heading>
        <Text padding="0 20px">{description}</Text>
        <HStack padding="0 0 0 20px" spacing="14px">
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </HStack>
      </VStack>
    </Box>
  );
};
