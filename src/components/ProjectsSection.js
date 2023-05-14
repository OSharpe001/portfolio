import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Letter to Success",
    description:
      'My rendition of "Wheel of Fortune! A great way to wind-down a busy day of coding. 😁 ',
    getImageSrc: () => require("../images/letter_to_success.png"),
  },
  {
    title: "Little Lemon",
    description:
      'A "Full-Front End" rendition of a bistro website, complete with online ordering for delivery.',
    getImageSrc: () => require("../images/little_lemon1.png"),
  },
  {
    title: "The Sharpe Pages",
    description:
      'My first full-stack "CRUD-app"! Although it may need visual polishing, it is fully functional.',
    getImageSrc: () => require("../images/sharpe_pages.png"),
  },
  {
    title: "More to Come",
    description:
      "Just like any city, there's more projects on the horizon. . .",
    getImageSrc: () => require("../images/city_top.jpeg"),
  },
];

export default function ProjectsSection() {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};
