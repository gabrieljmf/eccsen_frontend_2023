import Image from "next/image";
import styles from "./page.module.css";
import Recommendations from "./Recommendation";
import { VStack, Center } from "@chakra-ui/layout";

import { Header } from "./components/header";
import { Center, Heading } from "@chakra-ui/react";
export default function Home() {
  return (
    <div>
      <Header />
      <Center>
        <Heading as="h1">Hello </Heading>
      </Center>
      <Recommendations />
    </div>
  );
}
