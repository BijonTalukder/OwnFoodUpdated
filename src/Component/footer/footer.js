import React from "react";

const Footer = () => {
  return (
    <footer className="footer-part bg-dark">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-xl-4">
            <div className="footer-widget">
              <a className="footer-logo " href="#">
                <img src="images/logo.png" alt="logo" />
              </a>
              <p className="footer-desc " style={{ color: "white" }}>
                Adipisci asperiores ipsum ipsa repellat consequatur repudiandae
                quisquam assumenda dolor perspiciatis sit ipsum dolor amet.
              </p>
              <ul className="footer-social ">
                <li>
                  <a className="icofont-facebook" href="#"></a>
                </li>
                <li>
                  <a className="icofont-twitter" href="#"></a>
                </li>
                <li>
                  <a className="icofont-linkedin" href="#"></a>
                </li>
                <li>
                  <a className="icofont-instagram" href="#"></a>
                </li>
                <li>
                  <a className="icofont-pinterest" href="#"></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-xl-2">
            <div className="footer-widget">
              <h3 className="footer-title" style={{ color: "white" }}>
                Information
              </h3>
              <div className="footer-links" style={{ color: "white" }}>
                <ul>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      Frequently
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-6 col-xl-3">
            <div className="footer-widget contact">
              <h3 className="footer-title">Information </h3>
              <ul className="footer-contact">
                <li>
                  
                  <p>
                    <span>About Us</span>
                    <span>Contact Us</span>
                    <span>Wishlist</span>
                    <span>Portfolio</span>
                    <span>Frequently</span>
                  </p>
                </li>
               
              </ul>
            </div>
          </div> */}
          <div className="col-sm-6 col-xl-3">
            <div className="footer-widget">
              <h3 className="footer-title" style={{ color: "white" }}>
                Categories
              </h3>
              <div className="footer-links" style={{ color: "white" }}>
                <ul>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      Popular Kitchen
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      Instant Food
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      Pre-Order Food
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      Wish Order
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      Catering Food
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      Find us in this State
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      All Categories
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      Location
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      Affiliates
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      Carrer
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white" }}>
                      Faq
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="footer-widget">
              <h3 className="footer-title " style={{ color: "white" }}>
                Download App
              </h3>
              <p className="footer-desc" style={{ color: "white" }}>
                Lorem ipsum dolor sit amet tenetur dignissimos ipsum eligendi
                autem obcaecati minus ducimus totam reprehenderit
                exercitationem!
              </p>
              <div className="footer-app">
                <a href="#">
                  <img src="images/google-store.png" alt="google" />
                </a>
                <a href="#">
                  <img src="images/app-store.png" alt="app" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row footer_bottom">
        <div className="col-12">
          <div className="">
            <div
              className="d-flex justify-content-between"
              style={{ backgroundColor: "rgb(27, 109, 193)", padding: 10 }}
            >
              <div>
                <p className="footer-copytext">
                  © All Copyrights Reserved by <a href="#">OwnFood</a>
                </p>
              </div>
              <div className="footer-card">
                <a href="#">
                  <img src="images/payment/jpg/01.jpg" alt="payment" />
                </a>
                <a href="#">
                  <img src="images/payment/jpg/02.jpg" alt="payment" />
                </a>
                <a href="#">
                  <img src="images/payment/jpg/03.jpg" alt="payment" />
                </a>
                <a href="#">
                  <img src="images/payment/jpg/04.jpg" alt="payment" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
