import { Providers } from "@/app/providers";
import TopNavigation from "@/components/navigation/TopNavigation";
import { Box, Container } from "@chakra-ui/react";

export const metadata = {
  title: "HOLX",
};

export default function RootLayout({ children }) {
  return (
    <html lang={"en"}>
      <body>
        <Providers>
          <Box bgGradient={"linear(to-r,primary.300, primary.800)"} p={8}>
            <Box bg={"white"} h={"100vh"}>
              <Container maxW={"container.xl"} minH={"100%"} p={4}>
                <TopNavigation />
                {children}
              </Container>
            </Box>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
