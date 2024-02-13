import { Heading, Box, Stack } from "@chakra-ui/react";
import { TechStackTab } from "../Components/Skills/TechStackTab";

export const Skills = () => {
  return (
    <Stack
      justify={"center"}
      align={"center"}
      w={"100%"}
      name={"skills"}
      h={{ base: "95vh", sm: "95vh", md: "100vh", lg: "100vh" }}
      id="skills"
    >
      <Heading m={"20px auto"} as={"h1"}>
        Techstack and Tools
      </Heading>

      <TechStackTab />
    </Stack>
  );
};
