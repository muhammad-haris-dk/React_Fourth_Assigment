import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Hero_Section } from "./Components/Hero_Section";
import { Navbar_Component } from "./Components/Navbar_Component";
import { Section_01_Component } from "./Components/Section_01_Component";
import { Section_02_Component } from "./Components/Section_02_Component";
import { Section_03_Component } from "./Components/Section_03_Component";
import { Section_04_Component } from "./Components/Section_04_Component";
import { Section_05_Component } from "./Components/Section_05_Component";
import { Section_06_Component } from "./Components/Section_06_Component";
import { Section_07_Component } from "./Components/Section_07_Component";
import { Footer_Section_Component } from "./Components/Footer_Section_Component";

const App = () => {
  return (
    <div>
      <div className="main_Image">
        <Navbar_Component />
        <Hero_Section />
      </div>
      <div>
        <Section_01_Component />
        <Section_02_Component />
        <Section_03_Component />
        <Section_04_Component />
        <Section_05_Component />
        <Section_06_Component />
        <Section_07_Component />
        <Footer_Section_Component />
      </div>
    </div>
  );
};

export default App;
