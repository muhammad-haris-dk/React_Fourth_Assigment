import { useState } from "react";
import CardsImage01 from "../assets/CardsImage/pro-hm1-1.jpg";
import CardsImage02 from "../assets/CardsImage/pro-hm1-2.jpg";
import CardsImage03 from "../assets/CardsImage/pro-hm1-3.jpg";
import CardsImage04 from "../assets/CardsImage/pro-hm1-4.jpg";
import Card_Components from "./Card_Components";
import Card_01_Component from "../Cards_Component/Cards_01_Component";

const Section_03_Component = () => {
  const [showdata, setShowdata] = useState(false);
  const [data,setData] = useState()
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

  return (
    <div>
      {showdata ? (
        <div className="">
          <Card_01_Component class='mt-5 ' />
        </div>
      ) : (
        <div className="container d-flex">
          <div className="row">
            {arrofobj.map((e, i) => {
              return (
                <Card_Components
                  src={e.src}
                  onclick={() => {
                    setShowdata(true);
                    setData(e)
                  }}
                  title={e.title}
                  description={e.description}
                  price={e.price}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export { Section_03_Component };
