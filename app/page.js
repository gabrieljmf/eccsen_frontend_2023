import Image from "next/image";
import styles from "./page.module.css";
import Recommendations from "./Recommendation";
import { VStack, Center } from "@chakra-ui/layout";
import Dashboard from "./Dashboard";
import Activities from "./activities";

export default function Home() {
  return (
    <>
      {/* <Dashboard /> */}
      <Activities />
    </>
    
  );
}
