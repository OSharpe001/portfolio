import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Letter to Success",
    description:
      'My rendition of "Wheel of Fortune! A great way to wind-down after a busy day of coding. 😁 ',
    getImageSrc: () => require("../images/letter_to_success.png"),
    site: "https://lettertosuccess.netlify.app"
  },
  {
    title: "Little Lemon",
    description:
      "My rendition of a bistro's website, complete with online ordering for delivery.",
    getImageSrc: () => require("../images/little_lemon1.png"),
    site: "https://littlelemonbistro.vercel.app"
  },
  {
    title: "The Sharpe Pages",
    description:
      'My first full-stack "CRUD-app" (2021)! Although it may need visual polishing, it is fully functional.',
    getImageSrc: () => require("../images/sharpe_pages.png"),
    site: "https://osharpe.pythonanywhere.com"
  },
  {
    title: "More to Come",
    description:
      "Just like a city's skyline, there's more projects on the horizon. . .",
    getImageSrc: () => require("../images/city_top.jpeg"),
    site: null
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
            site={project.site}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};
