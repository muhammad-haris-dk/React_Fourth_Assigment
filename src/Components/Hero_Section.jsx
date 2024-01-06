import Image from "../assets/hm1-single-1.png";
import { Button_Component } from "./Button_Component";
const Hero_Section = () => {
  return (
    <>
    
    <div className="Hero_Section_Flex mt-5">
      <div style={{display: "flex",alignItems: "center"}}>
        <img style={{ height: "80vh" }} src={Image} alt="" />
      </div>
      <div>
        <h3 className="Hero_Section_Stylish_Content" style={{fontSize: "60px"}}>30% off</h3>
        <h1 style={{fontSize: "70px",color: "rgba(0, 0, 0, 0.712)"}}>Comfort Chair</h1>
        <p style={{fontSize: "25px"}}>Collect from Doxane & get 30% Discount.</p>
        <br />
        <Button_Component label='SHOP NOW' />
      </div>
    </div>
    </>
  );
};

export { Hero_Section };
