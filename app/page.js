import { Header } from "./components/header";
import { Center, Heading } from "@chakra-ui/react";
export default function Home() {
  return (
    <div>
      <Header />
      <Center>
        <Heading as="h1">Hello </Heading>
      </Center>
    </div>
  );
}
