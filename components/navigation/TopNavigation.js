import { Button, Container, Flex, Heading, Hide } from "@chakra-ui/react";
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
        <Heading as={"h1"} size={"sm"}>
          HOLX
        </Heading>
        <Hide below={"sm"}>
          <Flex align={"center"} gap={4}>
            {links?.map((link, index) => (
              <Link key={index} href={link.href}>
                {link.anchor}
              </Link>
            ))}
            <Button colorScheme={"blue"}>Book yours Now</Button>
          </Flex>
        </Hide>
      </Flex>
    </Container>
  );
}
