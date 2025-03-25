import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Container,
  Divider,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import ProfilePicture from "@/assets/images/profile-picture.jpeg";
import { Fragment } from "react";

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

  const testimonials = [
    {
      heading: "Lex",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at dolorem eum excepturi fugiat incidunt iste placeat soluta? Atque debitis illum ipsum iste laudantium neque saepe veniam vero voluptatem voluptates."
    },
    {
      heading: "Charlie",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at dolorem eum excepturi fugiat incidunt iste placeat soluta? Atque debitis illum ipsum iste laudantium neque saepe veniam vero voluptatem voluptates."
    }
  ];

  return (
    <>
      <main>
        <Container maxW={"container.xl"} mb={32}>
          <Flex direction={["column", "row"]} gap={4}>
            <AspectRatio
              ratio={1}
              h={108}
              w={108}
              borderRadius={"full"}
              overflow={"hidden"}
              mt={3}
            >
              <Image src={ProfilePicture} alt={"HOLX"} fill />
            </AspectRatio>
            <Heading
              as={"h1"}
              size={["xl", "4xl"]}
              w={["100%", "66.66%"]}
              mb={4}
            >
              Your Money Body Sol Connection
            </Heading>
          </Flex>
          <Text w={["100%", "50%"]}>
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
        <Container maxW={"container.xl"} mb={32}>
          <SimpleGrid columns={[1, 3]} spacing={[4, 8]}>
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
        <Container maxW={"container.xl"} mb={32}>
          {testimonials?.map((testimonial, index) => (
            <Fragment key={index}>
              <SimpleGrid columns={[1, 4]}>
                <GridItem />
                <GridItem>
                  <Heading as={"h3"} size={"sm"} lineHeight={2} mb={2}>
                    {testimonial.heading}
                  </Heading>
                </GridItem>
                <GridItem colSpan={[1, 2]}>
                  <Text>&quot;{testimonial.text}&quot;</Text>
                </GridItem>
              </SimpleGrid>
              <Divider my={4} />
            </Fragment>
          ))}
        </Container>
        <Container maxW={"container.xl"}>
          <Card variant={"filled"}>
            <CardBody p={8}>
              <SimpleGrid columns={[1, 3]}>
                <GridItem>
                  <Text size={"sm"} lineHeight={2} mb={2}>
                    Contact
                  </Text>
                </GridItem>
                <GridItem colSpan={[2]}>
                  <Heading as={"h1"} size={["lg", "3xl"]} mb={4}>
                    Your Money Body Sol Connection
                  </Heading>
                  <Text>
                    Fugiat ipsa iste ratione sint velit. Amet dignissimos dolor
                    dolorum eveniet iusto modi molestias quisquam reprehenderit
                    voluptate.
                  </Text>
                  <Button colorScheme={"blue"} size={"lg"} mt={12}>
                    Say, Hi!
                  </Button>
                </GridItem>
              </SimpleGrid>
            </CardBody>
          </Card>
        </Container>
      </main>
      <footer></footer>
    </>
  );
}
