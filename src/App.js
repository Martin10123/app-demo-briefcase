import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import NavbarScreen from "./components/screen/ui";
import HeaderScreen from "./components/screen/header";
import MainScreen from "./components/screen/main";
import FooterScreen from "./components/screen/footer";

import "./app.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <NavbarScreen />
      <HeaderScreen />
      <MainScreen />
      <FooterScreen />
    </div>
  );
}

export default App;
