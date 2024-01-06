import React from "react";
import { Card_01_Hero_Section } from "./Card_01_Hero_Section";
import { Navbar_Component } from "../Components/Navbar_Component";
import { Cards_01_Section } from "./Cards_01_Section";
import image from "../assets/CardsImage/pro-hm1-1.jpg";
import { Cards_01_Section_02 } from "./Cards_01_Section_02";
import { Cards_01_Section_03 } from "./Cards_01_Section_03";
import { Footer_Section_Component } from "../Components/Footer_Section_Component";

function Card_01_Component() {
  return (
    <div>
      <div className="bgc_Color">
        <Navbar_Component />
        <Card_01_Hero_Section />
      </div>
        <Cards_01_Section src={image} />
        <Cards_01_Section_02 />
        <Cards_01_Section_03 />
        <Footer_Section_Component />
    </div>
  );
}

export default Card_01_Component;
