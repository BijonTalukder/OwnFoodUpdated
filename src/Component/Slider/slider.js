import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stwo from "../../assets/img/Slider/ownfood_slider_two.jpg";
import Sthree from "../../assets/img/Slider/ownfood_slider_three.jpg";
import Sfour from "../../assets/img/Slider/ownfood_slider_four.jpg";
import Sfive from "../../assets/img/Slider/ownfood_slider_five.jpg";
import Ssix from "../../assets/img/Slider/ownfood_slider_six.jpg";
import Sseven from "../../assets/img/Slider/ownfood_slider_seven.jpg";
import Seight from "../../assets/img/Slider/ownfood_slider_eight.jpg";

function SampleNextArrow(props) {
  const {  style, onClick } = props;
  return (
    <div
      className="icofont-arrow-right dandik slick-arrow"
      style={{ ...style, display: "block", right: 20, marginTop: -140 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="icofont-arrow-left bamdik slick-arrow"
      style={{ ...style, display: "block", left: 20, marginTop: -140 }}
      onClick={onClick}
    />
  );
}

export default class MySlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <section className=" slider-arrow slider-dots ">
        <div style={{ width: "100%", height: 500, overflow: "hidden" }}>
          <Slider {...settings}>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={Stwo} style={{ width: "100%" }} alt="index" />
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={Sthree} style={{ width: "100%" }} alt="index" />
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={Sfour} style={{ width: "100%" }} alt="index" />
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={Sfive} style={{ width: "100%" }} alt="index" />
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={Ssix} style={{ width: "100%" }} alt="index" />
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={Sseven} style={{ width: "100%" }} alt="index" />
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={Seight} style={{ width: "100%" }} alt="index" />
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
