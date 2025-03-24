import { Button, Flex, Heading } from "@chakra-ui/react";

export default function TopNavigation() {
  return (
    <Flex align={"center"} justify={"space-between"}>
      <Heading as={"h1"} fontSize={"2rem !important"}>
        HOLX
      </Heading>
      <Flex align={"center"}>
        <Button colorScheme={"primary"}>Book yours Now</Button>
      </Flex>
    </Flex>
  );
}
