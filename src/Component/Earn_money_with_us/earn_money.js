import React from "react";
// import ArrowOne from "../../assets/img/arrow1.png";
// import ArrowTwo from "../../assets/img/arrow2.png";
import "./earn_money.css";
import Icon from "../../assets/img/step-3.png";
const Earn_Money = () => {
  return (
    <section
      className="bd-step__area shadow-lg"
      style={
        {
          // marginTop: -50,
          // backgroundColor: "white",
          // paddingTop: 40,
          // paddingBottom: 40,
          // padding: 40,
        }
      }
    >
      <div className="container-fluid sf_earn_wrapper">
        <div className="row justify-content-center">
          <div class="title-area text-center mt-5">
            <span class="sub-title"></span>
            <h2 class="sec-title">
              <span className="sf_init_title "> Earn Money </span>{" "}
              <span class=" sf_text-theme">With Us</span>
            </h2>
          </div>
        </div>
        <div className="row mt-5">
          <div
            className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
            style={{ width: "20%" }}
          >
            <div className="bd-step__item text-center p-relative mb-60">
              <div className="bd-step__arrow">
                {/* <img src={ArrowOne} alt="step-arrow" /> */}
              </div>
              <div className="bd-step__icon">
                <img src={Icon} alt="step-icon" />
              </div>
              <div className="bd-step__content">
                <h3>
                  <a style={{ color: "white" }}>Instant Food</a>
                </h3>
                <p style={{ color: "white" }}>
                  Consider how some search engines autocorrect for spen
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
            style={{ width: "20%" }}
          >
            <div className="bd-step__item text-center p-relative mb-60">
              <div className="bd-step__arrow">
                {/* <img src={ArrowTwo} alt="step-arrow" /> */}
              </div>
              <div className="bd-step__icon">
                <img src={Icon} alt="step-icon" />
              </div>
              <div className="bd-step__content">
                <h3>
                  <a style={{ color: "white" }}>Pre-Order</a>
                </h3>
                <p style={{ color: "white" }}>
                  Consider how some search engines autocorrect for spen
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
            style={{ width: "20%" }}
          >
            <div className="bd-step__item text-center p-relative mb-60">
              <div className="bd-step__arrow">
                {/* <img src={ArrowOne} alt="step-arrow" /> */}
              </div>
              <div className="bd-step__icon">
                <img src={Icon} alt="step-icon" />
              </div>
              <div className="bd-step__content">
                <h3>
                  <a style={{ color: "white" }}>Cook and Sell </a>
                </h3>
                <p style={{ color: "white" }}>
                  Consider how some search engines autocorrect for spen
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
            style={{ width: "20%" }}
          >
            <div className="bd-step__item text-center p-relative mb-60">
              <div className="bd-step__icon">
                <img src={Icon} alt="step-icon" />
              </div>
              <div className="bd-step__content">
                <h3>
                  <a style={{ color: "white" }}>Catering</a>
                </h3>
                <p style={{ color: "white" }}>
                  Consider how some search engines autocorrect for spen
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
            style={{ width: "20%" }}
          >
            <div className="bd-step__item text-center p-relative mb-60">
              <div className="bd-step__icon">
                <img src={Icon} alt="step-icon" />
              </div>
              <div className="bd-step__content">
                <h3>
                  <a style={{ color: "white" }}>Blog</a>
                </h3>
                <p style={{ color: "white" }}>
                  Consider how some search engines autocorrect for spen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Earn_Money;
