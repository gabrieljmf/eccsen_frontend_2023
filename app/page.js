import Image from "next/image";
import styles from "./page.module.css";
import Recommendations from "./Recommendation";
import { VStack, Center } from "@chakra-ui/layout";
import Dashboard from "./profile/page";
import Activities from "./survey/page";

export default function Home() {
  return (
    <>
      {/* <Dashboard /> */}
      <Activities />
    </>
    
  );
}
