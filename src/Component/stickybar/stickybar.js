import React from "react";
const Stickybar = ({ setState }) => {
  return (
    <div className="header-top">
      <div className="container-fluid">
        <div className="row">
          <div class="col-md-6 col-lg-6">
            <div className="d-flex mt-2">
              <p className="" style={{ color: "white" }}>
                <i
                  class="fas fa-phone-volume me-2"
                  style={{ color: "white" }}
                ></i>
                +8801717260783
              </p>

              <p className="ms-2" style={{ color: "white" }}>
                <i class="fas fa-envelope me-2" style={{ color: "white" }}></i>
                support@ownfood.com
              </p>
            </div>
          </div>
          {/* <div className="col-md-5 col-lg-3"></div> */}

          <div className="col-md-6 col-lg-6 mt-2 ms-auto header-widget-group justify-content-end">
            <ul class="footer-social">
              <li>
                <a class="icofont-facebook"  href="#"></a>
              </li>
              <li>
                <a class="icofont-twitter" href="#"></a>
              </li>
              <li>
                <a class="icofont-linkedin" href="#"></a>
              </li>
              <li>
                <a class="icofont-instagram" href="#"></a>
              </li>
              <li>
                <a class="icofont-pinterest" href="#"></a>
              </li>
            </ul>
            <button
              className="header-widget header-cart "
              title="Cartlist"
              onClick={() => {
                setState({ isPaneOpen: true });
              }}
            >
              <i className="fas fa-shopping-basket"></i>
              <sup>9+</sup>
              {/* <span>
              total price<small>$345.00</small>
              </span>   */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stickybar;
