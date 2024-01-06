import React, {useState} from "react";
import CardsImage05 from "../assets/CardsImage/pro-hm1-5.jpg";
import CardsImage06 from "../assets/CardsImage/pro-hm1-6.jpg";
import CardsImage07 from "../assets/CardsImage/pro-hm1-7.jpg";
import CardsImage08 from "../assets/CardsImage/pro-hm1-8.jpg";
import Card_Components from "../Components/Card_Components";

function Cards_01_Section_03() {
  const [showdata, setShowData] = useState(false);
  const [data, setData] = useState();
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
  ];
  
  return (
    <div>
      <div className="text-center mt-5">
        <h1>Related Product</h1>
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
    </div>
  );
}

export { Cards_01_Section_03 };
