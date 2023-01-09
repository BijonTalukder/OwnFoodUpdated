import React from "react";
import { Uber_image } from "../data";
import { two_one } from "../data";
import { four_two } from "../data";
import "./fourbytwo.css";
import { useNavigate } from "react-router-dom";
const FourbyTwo = () => {
  const navigate = useNavigate();

  return (
    <section className="section mt-5" style={{ padding: 5 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3  ">
            <div className="card">
              <div className="card-header sf_top_card">
                <h3 className="mt-1 sf_top_name"> Top Food Category</h3>
              </div>
              <div className="row mt-1" style={{ padding: 15 }}>
                {four_two.map((item, index) => {
                  return (
                    <div
                      className="col-md-6 "
                      style={{ marginBottom: 15 }}
                      onClick={() => {
                        navigate("productdetails");
                      }}
                    >
                      <div className="img_animation">
                        <img src={item.item_image} className="img-fluid " />
                      </div>
                      <p className="text-center" style={{ fontWeight: "bold" }}>
                        {" "}
                        {item.item_name}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="col-md-12">
                <a
                  href="#"
                  onClick={() => {
                    navigate("shoppingpage");
                  }}
                  className="see_more"
                  style={{ marginRight: 15 }}
                >
                  See more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <div className="card">
              <div className="card-header sf_top_card">
                <h3 className="mt-1 sf_top_name"> Top Food Category</h3>
              </div>
              <div className="row mt-1" style={{ padding: 15 }}>
                {four_two.map((item, index) => {
                  return (
                    <div
                      className="col-md-6 "
                      style={{ marginBottom: 15 }}
                      onClick={() => {
                        navigate("productdetails");
                      }}
                    >
                      <div className="img_animation">
                        <img src={item.item_image} className="img-fluid " />
                      </div>
                      <p className="text-center" style={{ fontWeight: "bold" }}>
                        {" "}
                        {item.item_name}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="col-md-12">
                <a
                  href="#"
                  onClick={() => {
                    navigate("shoppingpage");
                  }}
                  className="see_more"
                  style={{ marginRight: 15 }}
                >
                  See more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <div className="card " style={{ padding: 0 }}>
              <div className="card-header sf_top_card">
                <h3 className="mt-1 sf_top_name"> Top Food Category</h3>
              </div>
              <div className="row mt-1" style={{ padding: 10 }}>
                <div
                  style={{ marginBottom: 15 }}
                  onClick={() => {
                    navigate("productdetails");
                  }}
                >
                  <div className="img_animation">
                    <img src={two_one[0].item_image} className="img-fluid" />
                  </div>
                  <p className="mt-3" style={{ fontWeight: "bold" }}>
                    {" "}
                    {two_one[0].item_name}
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <a
                  href="#"
                  onClick={() => {
                    navigate("shoppingpage");
                  }}
                  className="see_more"
                  style={{ marginRight: 10 }}
                >
                  {" "}
                  See more
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3  ">
            <div className="card " style={{ padding: 0 }}>
              <div className="card-header sf_top_card">
                <h3 className="mt-1 sf_top_name"> Top Food Category</h3>
              </div>
              <div className="row mt-1" style={{ padding: 10 }}>
                <div
                  style={{ marginBottom: 15 }}
                  onClick={() => {
                    navigate("productdetails");
                  }}
                >
                  <div className="img_animation">
                    <img src={two_one[1].item_image} className="img-fluid" />
                  </div>

                  <p className="mt-3" style={{ fontWeight: "bold" }}>
                    {" "}
                    {two_one[1].item_name}
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <a
                  href="#"
                  onClick={() => {
                    navigate("shoppingpage");
                  }}
                  className="see_more"
                  style={{ marginRight: 10 }}
                >
                  {" "}
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourbyTwo;
