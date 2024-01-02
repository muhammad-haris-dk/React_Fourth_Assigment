import { Button_Component } from "./Button_Component";
import Banner from "../assets/banner-1.jpg";
const Section_04_Component = () => {
  return (
    <div className="d-flex justify-content-center align-items-center container mt-5">
      <div>
        <img src={Banner} alt="" />
      </div>
      <div className="ms-5">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br />
          Nisi cumque expedita veniam.
        </p>
        <br />
        <h1>
          Winter Discount
          <br />
          Up to 30%
        </h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          <br />
          pariatur quam totam aperiam dicta culpa qui libero! Repellendus,
          mollitia
          <br />
          est.
        </p>
        <Button_Component label="SHOP NOW" />
      </div>
    </div>
  );
};

export { Section_04_Component };
