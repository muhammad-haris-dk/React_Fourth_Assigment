import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
import Card_01_Component from "./Cards_Component/Cards_01_Component";
import Card_Components from "./Components/Card_Components";
import CardsImage01 from "./assets/CardsImage/pro-hm1-1.jpg";
import CardsImage02 from "./assets/CardsImage/pro-hm1-2.jpg";
import CardsImage03 from "./assets/CardsImage/pro-hm1-3.jpg";
import CardsImage04 from "./assets/CardsImage/pro-hm1-4.jpg";
import CardsImage05 from "./assets/CardsImage/pro-hm1-5.jpg";
import CardsImage06 from "./assets/CardsImage/pro-hm1-6.jpg";
import CardsImage07 from "./assets/CardsImage/pro-hm1-7.jpg";
import CardsImage08 from "./assets/CardsImage/pro-hm1-8.jpg";

const App = () => {
  const [showdata, setShowData] = useState(false);
  const [data, setData] = useState();
  const arrofobj = [
    {
      src: CardsImage01,
      title: "chair",
      description: "Golden Easy Spot Chair.",
      price: "$210.00",
    },
    {
      src: CardsImage02,
      title: "chair",
      description: "Golden Easy Spot Chair.",
      price: "$210.00",
    },
    {
      src: CardsImage03,
      title: "chair",
      description: "Golden Easy Spot Chair.",
      price: "$210.00",
    },
    {
      src: CardsImage04,
      title: "chair",
      description: "Golden Easy Spot Chair.",
      price: "$210.00",
    },
  ];
  const arrofobj2 = [
    {
      src: CardsImage05,
      title: "chair",
      description: "Golden Easy Spot Chair.",
      price: "$210.00",
    },
    {
      src: CardsImage06,
      title: "chair",
      description: "Golden Easy Spot Chair.",
      price: "$210.00",
    },
    {
      src: CardsImage07,
      title: "chair",
      description: "Golden Easy Spot Chair.",
      price: "$210.00",
    },
    {
      src: CardsImage08,
      title: "chair",
      description: "Golden Easy Spot Chair.",
      price: "$210.00",
    },
  ]
  return (
    <div>
      {showdata ? (
        <Card_01_Component />
      ) : (
        <div>
          <div className="main_Image">
            <Navbar_Component />
            <Hero_Section />
          </div>
          <div>
            <Section_01_Component />
            <Section_02_Component />
            <div className="container d-flex">
              <div className="row">
                {arrofobj.map((e) => {
                  return (
                    <Card_Components
                      src={e.src}
                      onclick={() => {
                        setShowData(true);
                        setData(e);
                      }}
                      title={e.title}
                      description={e.description}
                      price={e.price}
                    />
                  );
                })}
              </div>
            </div>
            <Section_04_Component />
            <Section_05_Component />
            <div className="container d-flex">
              <div className="row">
                {arrofobj.map((e, i) => {
                  return (
                    <Card_Components
                      src={e.src}
                      onclick={() => {
                        setShowData(true);
                        setData(e);
                      }}
                      title={e.title}
                      description={e.description}
                      price={e.price}
                    />
                  );
                })}
              </div>
            </div>
            <div className="container d-flex mt-5">
              <div className="row">
                {arrofobj2.map((e, i) => {
                  return (
                    <Card_Components
                      src={e.src}
                      onclick={() => {
                        setShowData(true);
                        setData(e);
                      }}
                      title={e.title}
                      description={e.description}
                      price={e.price}
                    />
                  );
                })}
              </div>
            </div>
            <Footer_Section_Component />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
