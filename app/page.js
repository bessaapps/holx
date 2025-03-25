import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text
} from "@chakra-ui/react";

export default function Home() {
  const themes = [
    {
      heading: "Money",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at dolorem eum excepturi fugiat incidunt iste placeat soluta? Atque debitis illum ipsum iste laudantium neque saepe veniam vero voluptatem voluptates."
    },
    {
      heading: "Body",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at dolorem eum excepturi fugiat incidunt iste placeat soluta? Atque debitis illum ipsum iste laudantium neque saepe veniam vero voluptatem voluptates."
    },
    {
      heading: "Soul",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at dolorem eum excepturi fugiat incidunt iste placeat soluta? Atque debitis illum ipsum iste laudantium neque saepe veniam vero voluptatem voluptates."
    }
  ];

  return (
    <>
      <main>
        <Container maxW={"container.xl"} mb={32}>
          <Heading as={"h1"} size={"4xl"} w={["66.66%"]} mb={4}>
            Your Money Body Sol Connection
          </Heading>
          <Text w={["50%"]}>
            Blending ancient and modern modalities to improve your wellbeing and
            achieve results. HOLX is honored to bring you professional,
            holistic, and personalized products and services you can count on.
            HOLX is a safe space for <Text as={"i"}>everybody</Text>,
            everywhere! Belinda, HOLX Manifestor
          </Text>
          <Button colorScheme={"blue"} size={"lg"} my={12}>
            Book yours Now
          </Button>
          <Flex align={"center"} gap={8} h={"100px"}>
            <Box>
              <Heading as={"h3"} textAlign={"center"}>
                25
              </Heading>
              <Text textAlign={"center"}>Years Experience</Text>
            </Box>
            <Center height={"50px"}>
              <Divider
                orientation={"vertical"}
                borderColor={"gray.900"}
                borderWidth={1}
              />
            </Center>
            <Box>
              <Heading as={"h3"} textAlign={"center"}>
                4365
              </Heading>
              <Text textAlign={"center"}>Satisfied Clients</Text>
            </Box>
          </Flex>
        </Container>
        <Container maxW={"container.xl"}>
          <SimpleGrid columns={[3]} spacing={8}>
            {themes?.map((theme, index) => (
              <Card key={index} variant={"filled"}>
                <CardBody>
                  <Heading size={"md"} mb={2}>
                    {theme.heading}
                  </Heading>
                  <Text>{theme.text}</Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </main>
      <footer></footer>
    </>
  );
}
