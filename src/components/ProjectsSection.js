import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Anime Hunter",
    description:
      `Anime searches made easy! You can count on your friendly, neighborhood Anime Hunter's Guild for the best info for your quarry!`,
    getImageSrc: () => require("../images/anime_hunter.png"),
    site: "https://animehunterguild.netlify.app"
  },
  {
    title: "Dev^2",
    description:
      "Dev Squared is a developer's greatest asset for development! Create new blogs and document your experience for the progeny!",
    getImageSrc: () => require("../images/dev_squared.png"),
    site: "https://devsquared.onrender.com"
  },
  {
    title: "Pokemon Memory Match Game",
    description:
      `A tournament-style, card memory-match game that's fun for all ages!`,
    getImageSrc: () => require("../images/poke_memory_match.png"),
    site: "https://osharpe001.github.io"
  },
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
  // {
  //   title: "Our Tip Calculator",
  //   description:
  //     "An intuitive tip calculator for any occasion.",
  //   getImageSrc: () => require("../images/our_tip_calculator.png"),
  //   site: "https://ourtipcalculator.netlify.app"
  // },
  // {
  //   title: "The Sharpe Pages",
  //   description:
  //     'My first full-stack "CRUD-app" (2021)! Although it may need visual polishing, it is fully functional.',
  //   getImageSrc: () => require("../images/sharpe_pages.png"),
  //   site: "https://osharpe.pythonanywhere.com"
  // },
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
