import BackGround from "./BackGround/BackGround";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import About from "./About/About";
import Works from "./Works/Works";
import Rest from "./Rest/Rest";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);

const handleScrollFix=(e) => {
  console.log("Scroll")
}

  return (
    <div id="App">
      <Nav />
      <BackGround />
      <Home />
      <About on />
      <Works/>
      <Rest/>
    </div>
  );
}

export default App;
