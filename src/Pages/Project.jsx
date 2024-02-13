import {
  Stack,
  Heading,
  UnorderedList,
} from "@chakra-ui/react";
import { ProjectStackTab } from "../Components/Projects/ProjectStackTab";

export const Project = () => {
  return (
    <Stack
      justify={"center"}
      align={"center"}
      w={"100%"}
      name={"projects"}
      minH={{ base: "80vh", sm: "100vh", md: "100vh", lg: "100vh" }}
      id="projects"
    >
      <Heading
        mt={{ base: "30px", sm: "65px", md: "65px", lg: "65px" }}
        mb={"20px"}
        as={"h1"}
      >
        Projects
      </Heading>

      <ProjectStackTab />

      <UnorderedList
        display={{ base: "block", sm: "block", md: "block", lg: "none" }}
      ></UnorderedList>
    </Stack>
  );
};