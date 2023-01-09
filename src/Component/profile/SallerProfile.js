import React, { useState } from "react";
import { Carousel, Col, Row, Tab, Tabs } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { MdReviews } from "react-icons/md";
import SliderOne from "../../assets/img/Slider/ownfood_slider_one.jpg";
import SliderTwo from "../../assets/img/Slider/ownfood_slider_two.jpg";
import "./SallerProfile.css";
import { Link, Outlet } from "react-router-dom";
import { foodItem } from "../data";

const SallerProfile = () => {
  return (
    <div className="container-fluid top-container">
      {/* <div className='row'> */}
      <div className="profile_section">
        <div className="position-relative  ">
          <div>
            <Carousel>
              <Carousel.Item>
                <img
                  className=" w-100"
                  height={250}
                  src={SliderOne}
                  alt="First slide"
                />
                {/* <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 "
                  height={250}
                  src={SliderTwo}
                  alt="Second slide"
                />

                {/* <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
          </div>
          <Row>
            <Col xs={3}>
              <div className="sallerImage">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="border img-fluid"
                  style={{ maxWidth: "300px" }}
                  alt="Avatar"
                />
              </div>
            </Col>

            <Col xs={9}>
              <div className="resturentName px-3 py-1">
                <h3>Bijon Resturent</h3>
              </div>
              <div className="resturentAbout">
                <div className="d-flex flex-column justify-around">
                  <div className="d-flex align-items-center">
                    <div>
                      <h5>Total Review :</h5>
                    </div>

                    <div>
                      <div className="reviws">
                        <div>
                          <span>
                            {" "}
                            <AiFillStar />
                          </span>
                          <span>
                            <AiFillStar />
                          </span>
                          <span>
                            {" "}
                            <AiFillStar />
                          </span>
                          <span>
                            {" "}
                            <AiFillStar />
                          </span>
                        </div>
                        <span>(4.8)</span>
                        <span className="ms-1">13</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5>Total Delivary: 100</h5>
                  </div>
                  <div className="border py-2 px-1">
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div>{/* <hr/> */}</div>
      </div>

      <div className="sallerContent col-12 container-fluid">
        <Row>
          <Col xs={3}>
            <div className="asidebar sticky-test">
              <Link to={"/allproduct"}>All Prodct</Link>
              <Link to={"/ba"}>Chickn</Link>
              <Link to={"/allprduct"}>Burger</Link>
              <Link to={"/allprouct"}>Burger</Link>
              <Link to={"/allprodct"}>Burger</Link>
              <Link to={"/allprodut"}>Burger</Link>
              <Link to={"/allproduc"}>Burger</Link>
            </div>
          </Col>
          <Col xs={9}>
            <div class="row">
              <Outlet></Outlet>
            </div>
          </Col>
        </Row>
      </div>

      {/* </div> */}
    </div>
  );
};

export default SallerProfile;
