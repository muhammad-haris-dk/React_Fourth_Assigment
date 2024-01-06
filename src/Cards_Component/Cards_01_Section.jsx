import React, { useState } from "react";
import Stars from "../assets/transparent.png";
import { Button_Component } from "../Components/Button_Component";

function Cards_01_Section(props) {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1)
  };
  const minus = () => {
    setCount(count - 1)
    if (count == 0) {
      
      setCount(count - 0)
    }
  }
  return (
    <div>
      <div className="container Section_01_Top">
        <div className="row">
          <div className="col-md-6">
            <img className="Section_01_Image" src={props.src} alt="" />
          </div>
          <div className="col-md-6">
            <p>Life Style</p>
            <h5 style={{ fontSize: "25px" }}>LaaVista Depro, FX 829 v1</h5>
            <img src={Stars} style={{ width: "20px" }} alt="" />
            <img src={Stars} style={{ width: "20px" }} alt="" />
            <img src={Stars} style={{ width: "20px" }} alt="" />
            <img src={Stars} style={{ width: "20px" }} alt="" />
            <img src={Stars} style={{ width: "20px" }} alt="" />
            <p className="d-inline-block ms-3">40+ Reviews</p>
            <br />
            <br />
            <h5>Color:</h5>
            <br />
            <div className="green ms-2"></div>
            <div className="yellow ms-3"></div>
            <div className="red ms-3"></div>
            <div className="purple ms-3"></div>
            <br />
            <br />
            <h5>Size:</h5>
            <div className="s">
              <a>S</a>
            </div>
            <div className="s ms-5">
              <a>M</a>
            </div>
            <div className="s ms-5">
              <a>XL</a>
            </div>
            <div className="s ms-5">
              <a>XXL</a>
            </div>
            <br />
            <br />
            <h1 className="d-inline-block">$210.00</h1>
            <h5 className="d-inline-block ms-4">
              <del>$230.00</del>
            </h5>
            <p className="d-inline-block bg-dark ms-4 px-1 text-white">- 30%</p>
            <br />
            <br />
            <p className="bd">
              <button onClick={minus} className="cursor">-</button>{" "}
              <span className="mx-3">{count}</span>{" "}
              <button onClick={plus} className="cursor">
                +
              </button>
            </p>
            <br /><br />
             <p><span>Compare</span> <span className="ms-4">Add to wish list</span></p>
             <br />
             <br />
             <Button_Component class='cardsBtn' label='Add To Cart' />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Cards_01_Section };
