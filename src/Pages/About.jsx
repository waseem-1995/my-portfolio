import { Box, Grid, Text, UnorderedList, Heading, Stack } from "@chakra-ui/react"

export const About = () => {
    return (
        <>

        <Box w={"100%"} h={{base:"95vh", sm:"95vh", md:"100vh", lg:"100vh"}} name={"about"} id="about" class="about section">

            <UnorderedList  w={"100%"} m={"0"} bg={"#f8f7fd"} h={"100%"} display={{ base: "none", sm: "none", md: "block", lg: "block" }}>

                <Stack h={"100%"} justify={"center"} align={"center"}>

                    <Heading as={"h1"}>About Me</Heading>

                    <Grid templateColumns={"repeat(2, 1fr)"}>

                        <Stack w={"100%"} justify={"center"} align={"flex-end"}>

                            <Text color={"cornflowerblue"} w={"90%"} fontSize={{base:"none", sm:"none", md:"30px", lg:"32px"}} fontWeight={"bolder"} textAlign={"right"} p={"0px 5px"}>
                                Hello there👋 I'm a Full Stack Web Developer having expertise in MERN stack. Please have a look around to know more about me.    {"   "}

                            </Text>
                        
                        </Stack>
                     

                        <Stack w={"100%"} justify={"center"} align={"flex-start"}>

                            <Text w={"90%"} fontSize={"17px"} fontWeight={"500"} textAlign={"left"} p={"0px 5px"}>
                            Full Stack Developer with 2+ years of expertise in designing, developing, and deploying web applications. Proven track record in improving user engagement and revenue growth through optimized performance, security measures, and integration of third-party services. Skilled in SQL queries, MongoDB, React, and Node.js, with a strong commitment to collaboration, troubleshooting, and delivering innovative solutions.
                            </Text>

                        </Stack>

                    </Grid>

                </Stack>

            </UnorderedList>

            <UnorderedList w={"100%"} m={"0"} bg={"#f8f7fd"} h={"100%"} display={{ base: "block", sm: "block", md: "none", lg: "none" }}>

                <Stack h={"100%"} justify={"center"} align={"center"}>

                    <Heading as={"h1"}>About Me</Heading>

                    <Grid templateColumns={"repeat(1, 1fr)"}>

                        <Stack w={"100%"} justify={"flex-end"} align={"center"}>

                            <Text color={"cornflowerblue"} w={"100%"} fontSize={"30px"} fontWeight={"bolder"} textAlign={"justify"} p={"0px 10px"}>
                            Hello there👋 I'm a Full Stack Web Developer having expertise in MERN stack. Please have a look around to know more about me.    {"   "}
                            </Text>

                        </Stack>

                        <Stack w={"100%"} justify={"flex-start"} align={"center"}>

                            <Text w={"100%"} fontSize={"20px"} fontWeight={"500"} textAlign={"justify"} p={"0px 10px"}>
                            Full Stack Developer with 2+ years of expertise in designing, developing, and deploying web applications. Proven track record in improving user engagement and revenue growth through optimized performance, security measures, and integration of third-party services. Skilled in SQL queries, MongoDB, React, and Node.js, with a strong commitment to collaboration, troubleshooting, and delivering innovative solutions.
                            </Text>

                        </Stack>

                    </Grid>

                </Stack>

            </UnorderedList>

            </Box>

        </>
    )
}