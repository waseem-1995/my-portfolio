import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  UnorderedList,
  useToast,
  VStack,
} from "@chakra-ui/react";
import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilAt,
  UilTelegramAlt,
} from "@iconscout/react-unicons";
import resume from "./Mohd_Waseem_Khan_Resume.pdf";

export const HomeContent = () => {
  const toast = useToast();
  const copyEmail = () => {
    const email = "iwaseemkhan1995@gmail.com";
    navigator.clipboard.writeText(email);
    toast({
      title: "Copied iwaseemkhan1995@gmail.com",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  const debounce = (func, delay) => {
    let id;
    return () => {
      id && clearTimeout(id);

      id = setTimeout(() => {
        func();
      }, delay);
    };
  };

  return (
    <>
      <UnorderedList
        boxSizing={"border-box"}
        w={"100%"}
        h={{ base: "95vh", sm: "95vh", md: "100vh", lg: "100vh" }}
        bg={"#f8f7fd"}
        m={"auto"}
        display={{ base: "none", sm: "none", md: "none", lg: "block" }}
      
      >
        <Grid
          maxW={"968px"}
          minWidth={"767px"}
          h={"100%"}
          templateColumns={"repeat(2,70% 30%)"}
          m={"auto"}
        >
          <Stack
            w={"100%"}
            justify={"center"}
            align={"center"}
            position={"relative"}
          >
            <VStack
              justify={"space-around"}
              position={"absolute"}
              left={"0"}
              pt={"20px"}
              h={"200px"}
            >
              <Link
                _hover={{ color: "cornflowerblue" }}
                href={"https://www.linkedin.com/in/waseem-khan-909228117/"}
                isExternal
              >
                <UilLinkedinAlt />
              </Link>
              <Link
                _hover={{ color: "cornflowerblue" }}
                onClick={debounce(copyEmail, 500)}
              >
                <UilAt />
              </Link>
              <Link
                _hover={{ color: "cornflowerblue" }}
                href={"https://github.com/waseem-1995"}
                isExternal
              >
                <UilGithubAlt />
              </Link>
            </VStack>

            <Box w={"90%"} align={"left"} pl={"20px"}>
              <Heading color={"#505050"} as={"h1"} size={"xl"} id="user-detail-name">
                Hi I'm Mohd Waseem Khan.
              </Heading>
              <Heading color={"cornflowerblue"} as={"h2"} size={"2xl"} id="user-detail-intro">
                Full Stack Web Developer
              </Heading>
              <Text
                w={"80%"}
                textAlign={"justify"}
                m={"10px 0px 20px 0px"}
                fontSize={"14px"}
                
              >
                 I'm a creative  full stack web developer having expertise in MERN
                development. I'm very passionate and dedicated to my work.
              </Text>
              <Link
                href={resume}
                download
                mt={"20px"}
                _hover={{ bg: "#4c87f1" }}
                _active={{ bg: "#033b9f" }}
                color={"#f8f7fd"}
                bg={"#3e75d7"}
                p={"10px 20px"}
                borderRadius={"5px"}
                id="resume-link-2"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1doZ1soHPfbyx2DZdQ1GW2rrldMrIPe_g/view?usp=sharing"
                  )
                }
              >
                Resume
              </Link>
            </Box>
          </Stack>

          <Box
            w={"100%"}
            display={"flex"}
            overflow={"hidden"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              m={"auto"}
              border={"5px solid cornflowerblue"}
              src={"/profile/ME.jpg"}
              alt={"Waseem Khan"}
              w={"105%"}
              borderRadius={"50%"}
            />
          </Box>
        </Grid>
      </UnorderedList>

      <UnorderedList
        boxSizing={"border-box"}
        w={"100%"}
        h={{ base: "95vh", sm: "95vh", md: "100vh", lg: "100vh" }}
        bg={"#f8f7fd"}
        m={"0"}
        pt={"50px"}
        display={{ base: "block", sm: "block", md: "block", lg: "none" }}
        position={"relative"}
      >
        <Stack
          w={"95%"}
          h={"100%"}
          justify={"center"}
          align={"center"}
          m={"auto"}
        >
          <Stack w={"100%"} justify={"center"} align={"center"}>
            <Box w={"100%"} m={"auto"} position={"relative"}>
              <Stack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
                <VStack
                  justify={"space-around"}
                  position={"absolute"}
                  left={"0"}
                  h={"200px"}
                >
                  <Link
                    _hover={{ color: "cornflowerblue" }}
                    href={"https://www.linkedin.com/in/waseem-khan-909228117/"}
                    isExternal
                  >
                    <UilLinkedinAlt />
                  </Link>
                  <Link
                    _hover={{ color: "cornflowerblue" }}
                    onClick={debounce(copyEmail, 500)}
                  >
                    <UilAt />
                  </Link>
                  <Link
                    _hover={{ color: "cornflowerblue" }}
                    href={"https://github.com/waseem-1995"}
                    isExternal
                    
                  >
                    <UilGithubAlt />
                  </Link>
                </VStack>

                <Box maxW={"300px"} m={"auto"}>
                  <Image
                   class="home-img"
                    m={"auto"}
                    border={"5px solid cornflowerblue"}
                    src={"/profile/ME.jpg"}
                    alt={"kashif-Rezwi"}
                    w={"85%"}
                    borderRadius={"50%"}
                  />
                </Box>
              </Stack>
            </Box>

            <Box w={"100%"} p={"30px 0px"} align={"left"}>
              <Heading color={"#505050"} as={"h1"} size={"xl"}>
                Hi I'm Mohd Waseem Khan.
              </Heading>
              <Heading
                color={"cornflowerblue"}
                as={"h2"}
                size={{ base: "xl", sm: "xl", md: "2xl", lg: "2xl" }}
              >
                Full Stack Web Developer
              </Heading>
              <Text
                w={"90%"}
                textAlign={"justify"}
                m={"10px 0px 20px 0px"}
                fontSize={"14px"}
              >
                 I'm a creative  full stack web developer having expertise in MERN
                development. I'm very passionate and dedicated to my work.
              </Text>

              <Link
                href={resume}
                download
                mt={"10px"}
                _hover={{ bg: "#4c87f1" }}
                _active={{ bg: "#033b9f" }}
                color={"#f8f7fd"}
                bg={"#3e75d7"}
                p={"10px 20px"}
                borderRadius={"5px"}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1doZ1soHPfbyx2DZdQ1GW2rrldMrIPe_g/view?usp=sharing"
                  )
                }
              >
                Resume
              </Link>
            </Box>
          </Stack>
        </Stack>
      </UnorderedList>
    </>
  );
};