import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Card({ title, description, imageSrc, site }) {

  return (
    <Box id="project-box" bg="rgb(245, 245, 220)" color="black" borderRadius="15px">
      <VStack align="flex-start" spacing="14px">
        <Image src={imageSrc} borderRadius="15px"/>
        <Heading padding="0 0 0 20px" size="md" >{title}</Heading>
        <Text padding="0 20px">{description}</Text>
        <HStack id="project-link" padding="0 0 0 20px" spacing="14px">
          {site?
            <a
            aria-label="On Click"
            target="_blank"
            href={site}>
              Visit Site <FontAwesomeIcon icon={faArrowRight} size="1x"/>
            </a>
            :
            null
          }
        </HStack>
      </VStack>
    </Box>
  );
};
