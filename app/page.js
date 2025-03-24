import { Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

export default function Home() {
  return (
    <>
      <main>
        <Image src={Logo} alt={"HOLX"} />
        <Heading as={"h1"} w={["66.66%"]}>
          Your Money Body Sol Connection
        </Heading>
        <Text w={["50%"]}>
          Blending ancient and modern modalities to improve your wellbeing and
          achieve results. HOLX is honored to bring you professional, holistic,
          and personalized products and services you can count on. HOLX is a
          safe space for <Text as={"i"}>Everybody</Text>, everywhere! Belinda,
          HOLX Manifestor
        </Text>
      </main>
      <footer></footer>
    </>
  );
}
