import { Button, Container, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";

export default function TopNavigation() {
  const links = [
    { href: "/about", anchor: "About" },
    { href: "/contact", anchor: "Contact" },
    { href: "/blog", anchor: "Blog" }
  ];

  return (
    <Container maxW={"container.xl"} py={8}>
      <Flex align={"center"} justify={"space-between"}>
        <Flex align={"center"} gap={2}>
          <Image src={Logo} alt={"HOLX"} height={72} width={72} />
          <Heading as={"h1"} size={"md"}>
            HOLX
          </Heading>
        </Flex>
        <Flex align={"center"} gap={4}>
          {links?.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.anchor}
            </Link>
          ))}
          <Button colorScheme={"blue"}>Book yours Now</Button>
        </Flex>
      </Flex>
    </Container>
  );
}
