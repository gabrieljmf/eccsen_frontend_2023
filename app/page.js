import Image from "next/image";
import styles from "./page.module.css";
import Recommendations from "./Recommendation";
import Opportunity from "./opportunity/page";
import { VStack, Center } from "@chakra-ui/layout";

export default function Home() {
  return (
    <>
      <Recommendations />
    </>
  );
}
