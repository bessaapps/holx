import { Providers } from "@/app/providers";
import TopNavigation from "@/components/navigation/TopNavigation";
import { Box } from "@chakra-ui/react";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "HOLX"
};

export default function RootLayout({ children }) {
  return (
    <html lang={"en"}>
      <body>
        <Providers>
          <Box bgGradient={"linear(to-tr, blue.300, blue.600)"} p={[4, 8]}>
            <Box bg={"white"} minH={"100vh"} borderRadius={"1rem"} pb={8}>
              <TopNavigation />
              {children}
            </Box>
          </Box>
        </Providers>
      </body>
      {process.env.NODE_ENV !== "development" && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
