import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: osharpe001@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/OSharpe001",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/omarisharpe",
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/OSharpe001",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/19149328/o-sharpe",
  },
];

const ScrollPosition = ({ render }) => {
  const [scrollPosition, setScrollPosition] = useState({
    y: 0,
  });
  const [prevScrollPosition, setPreviousScrollPositiion] = useState({
    y: 0,
  })

  useEffect(() => {
    const handleScrollPositionChange = (e) => {
      setPreviousScrollPositiion({
        y: scrollPosition.y
        },);
      setScrollPosition({
        y: window.scrollY
      },);
    };

    window.addEventListener("scroll", handleScrollPositionChange);

    return () => {
      window.removeEventListener("scroll", handleScrollPositionChange);
    };
  }, [[window.scrollY]]);

  let headerPos;
  scrollPosition.y>0?scrollPosition.y>prevScrollPosition.y? headerPos= "-200px": headerPos="0":headerPos="0";

  return "translateY("+headerPos+")"
};

export default function Header() {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      className="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transform={ScrollPosition}
      transitionProperty="transform"
      transitionDuration="0.3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box className="icon-box" color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          <HStack className="nav-icons" spacing={7}>
            {
              socials.map((socialLink) => {
                return (
                  <a aria-label="On Click" target="_blank" href={socialLink.url} key={socialLink.url}>
                    <FontAwesomeIcon className="icons" icon={socialLink.icon} size="2x" />
                  </a>
                )
              })
            }
            </HStack>
          </nav>

          <nav>
            <HStack spacing={8}>
              {
              <>
              <a aria-label="On Click" className="shift-page" onClick={handleClick("contactme")} href="/#contact-me">Contact Me</a>
              <a aria-label="On Click" className="shift-page" onClick={handleClick("projects")} href="/#projects">Projects</a>
              </>
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
