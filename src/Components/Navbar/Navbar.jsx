import {
  UilEstate,
  UilUser,
  UilLayerGroup,
  UilCommentsAlt,
  UilTelegramAlt,
  UilTimes,
  UilRocket,
  UilApps,
  UilBracketsCurly,
} from "@iconscout/react-unicons";
import { Box, Text, UnorderedList } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import "./style.css";
import { useState } from "react";
import resume from "../Home/Mohd_Waseem_Khan_Resume.pdf";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <Box
      className="header"
      p={{ base: "0px", sm: "0px", md: "0px", lg: "0px 5px" }}
    >
      <nav className="nav container" id="nav-menu">
        <UnorderedList
          m={"0"}
          display={{ base: "none", sm: "none", md: "block", lg: "block" }}
        >
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="nav__logo"
            class="nav-link home"
          >
            Mohd Waseem Khan
          </ScrollLink>
        </UnorderedList>

        <UnorderedList
          m={"0"}
          display={{ base: "block", sm: "block", md: "none", lg: "none" }}
        >
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="nav__logo"
          >
            waseem
          </ScrollLink>
        </UnorderedList>

        <div
          onClick={() => setShow(!show)}
          className={show ? "nav__menu show-menu" : "nav__menu"}
        >
          <ul className="nav__list">
            <li className="nav__item"  class="nav-link home">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setShow(!show)}
               
              >
                <Text className="nav__icon">
                  <UilEstate />
                </Text>{" "}
                Home
              </ScrollLink>
            </li>
            <li className="nav__item"   class="nav-link about">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setShow(!show)}
              
              >
                <Text className="nav__icon">
                  <UilUser />
                </Text>{" "}
                About Me
              </ScrollLink>
            </li>
            <li className="nav__item" class="nav-link skills">
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setShow(!show)}
              >
                <Text className="nav__icon">
                  <UilLayerGroup />
                </Text>{" "}
                Skills
              </ScrollLink>
            </li>
            <li className="nav__item" class="nav-link projects">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setShow(!show)}
              >
                <Text className="nav__icon">
                  <UilBracketsCurly />
                </Text>{" "}
                Projects
              </ScrollLink>
            </li>
            <li className="nav__item" class="nav-link contact">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setShow(!show)}
              >
                <Text className="nav__icon">
                  <UilCommentsAlt />
                </Text>{" "}
                Contact
              </ScrollLink>
            </li>
            <li className="nav__item" onClick={() => setShow(!show)} class="nav-link resume">
              <ChakraLink
                href={resume}
                _hover={{ textDecor: "none" }}
                download
                className="nav-link"
                id="resume-link-1"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1doZ1soHPfbyx2DZdQ1GW2rrldMrIPe_g/view?usp=sharing"
                  )
                }
              >
                <Text className="nav__icon">
                  <UilTelegramAlt />
                </Text>{" "}
                Resume
              </ChakraLink>
            </li>
          </ul>
          <Text onClick={() => setShow(!show)} className="nav__close">
            <UilTimes />
          </Text>
        </div>

        <div onClick={() => setShow(!show)} className="nav__toggle">
          <Text>
            <UilApps />
          </Text>
        </div>
      </nav>
    </Box>
  );
};
