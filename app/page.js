// This is the index page
import Recommendations from "./Recommendation";

import { Header } from "./components/header";
export default function Home() {
  return (
    <div>
      <Header />
      <Recommendations />
    </div>
  );
}
