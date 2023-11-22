import { ChakraBaseProvider as ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  const colors = {
    brand: {
      900: "#F7FAFC",
      800: "#718096",
      700: "#CBD5E0",
      600: "#191919",
      500: "#b7fcc2",
    },
  };

  return (
    <ChakraProvider>
      <main>Hello</main>
    </ChakraProvider>
  );
}
