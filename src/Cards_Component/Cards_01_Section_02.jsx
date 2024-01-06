import React, { useState } from "react";
import render from "../assets/text.png";
import stars from "../assets/transparent.png";

function Cards_01_Section_02(props) {
  const [show_Description, setshow] = useState(false);
  const [show_Special, setSpecial] = useState(true);
  const [show_Reviews, setReview] = useState(false);
  
  const showDescription = () => {
    setshow(true);
    setSpecial(false);
    setReview(false);
  };
  const special = () => {
    setSpecial(true);
    setReview(false);
    setshow(false);
  };
  const reviews = () => {
    setReview(true);
    setSpecial(false);
    setshow(false);
  };
  return (
    <div  className={props.class}>
      <div className="container border border-start-0 border-end-0 mt-5 p-3 d-flex justify-content-center">
        <span className="text">
          <button onClick={showDescription} className="unset">
            Description
          </button>
        </span>
        <span className="text _ms">
          <button onClick={special} className="unset">
            Specification
          </button>
        </span>
        <span className="text _ms">
          <button onClick={reviews} className="unset">
            Reviews
          </button>
        </span>
      </div>
      {show_Description ? (
        <div className="Description mt-5 container bg-white">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text. It is a long established fact that a
            reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has
            a more-or-less normal distribution of letters,
          </p>
        </div>
      ) : null}

      {show_Special ? (
        <table className="mt-5  container bg-white">
          <tbody>
            <tr>
              <td className=" _td">Name/Model</td>
              <td className=" ">LaaVista Depro, FX 829 v1</td>
            </tr>
            <tr>
              <td className="_td">Type</td>
              <td>Categories</td>
            </tr>
            <tr>
              <td className="_td">Models</td>
              <td>FX 829 v1</td>
            </tr>
            <tr>
              <td className="_td">Categories</td>
              <td>Product Type</td>
            </tr>
            <tr>
              <td className="_td">Size</td>
              <td>60’’ x 40’’</td>
            </tr>
            <tr>
              <td className="_td">Display Port</td>
              <td>Multi</td>
            </tr>
            <tr>
              <td className="_td">Media</td>
              <td>Brightside</td>
            </tr>
            <tr>
              <td className="_td">Color</td>
              <td>Black, White</td>
            </tr>
          </tbody>
        </table>
      ) : null}
      {show_Reviews ? (
        <div className="container mt-5 bg-white">
          <div className="row">
            <div className="col-md-3">
              <img className="d-inline-block" src={render} alt="" />
              <h5 className="d-inline-block ms-5">Jonathon Doe</h5>
            </div>
            <div className="col-md-9">
              <p className="ms-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-3">
              <img className="d-inline-block" src={render} alt="" />
              <h5 className="d-inline-block ms-5">Jonathon Doe</h5>
            </div>
            <div className="col-md-9">
              <p className="ms-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-3">
              <img className="d-inline-block" src={render} alt="" />
              <h5 className="d-inline-block ms-5">Jonathon Doe</h5>
            </div>
            <div className="col-md-9">
              <p className="ms-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export { Cards_01_Section_02 };
