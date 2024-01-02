import CardsImage01 from "../assets/CardsImage/pro-hm1-5.jpg";
import CardsImage02 from "../assets/CardsImage/pro-hm1-6.jpg";
import CardsImage03 from "../assets/CardsImage/pro-hm1-7.jpg";
import CardsImage04 from "../assets/CardsImage/pro-hm1-8.jpg";

const Section_07_Component = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card col" style={{ width: "18rem" }}>
          <img src={CardsImage01} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="text">Chair</p>
            <p>Golden Easy Spot Chair.</p>
            <p>$210.00</p>
          </div>
        </div>
        <div className="card col" style={{ width: "18rem" }}>
          <img src={CardsImage02} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="text">Chair</p>
            <p>Golden Easy Spot Chair.</p>
            <p>$210.00</p>
          </div>
        </div>
        <div className="card col" style={{ width: "18rem" }}>
          <img src={CardsImage03} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="text">Chair</p>
            <p>Golden Easy Spot Chair.</p>
            <p>$210.00</p>
          </div>
        </div>
        <div className="card col" style={{ width: "18rem" }}>
          <img src={CardsImage04} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="text">Chair</p>
            <p>Golden Easy Spot Chair.</p>
            <p>$210.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Section_07_Component };
