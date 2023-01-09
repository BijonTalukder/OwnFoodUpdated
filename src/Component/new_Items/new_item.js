import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./new.css";
import { foodItem } from "../data";
import ShoppingPopUp from "../popup/popUpView";
import { useNavigate } from "react-router-dom";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="icofont-arrow-right dandik slick-arrow"
      style={{ ...style, display: "block", marginTop: -270, right: 50 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="icofont-arrow-left bamdik slick-arrow"
      style={{ ...style, display: "block", marginTop: -270, left: 1355 }}
      onClick={onClick}
    />
  );
}
const New_Item = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToScroll: 1,
  };
  return (
    <section className="home-index-slider slider-arrow  slick-initialized slick-slider">
      <div class="row">
        <div class="col">
          <div class="section-heading mt-5">
            <h2 className="ms-auto">Featured Cuisine</h2>
          </div>
        </div>
      </div>
      <div style={{ width: "99%" }}>
        <Slider {...settings}>
          <div>
            <div class="product-card shadow">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text new">new</label>
                </div>
                <button class="product-wish wish" tabIndex="-1">
                  <i class="fas fa-heart"></i>
                </button>
                <a
                  class="product-image"
                  // href="#"
                  tabIndex="-1"
                >
                  <img src={foodItem[0].item_image} alt="product" />
                </a>
                <div class="product-widget">
                  <a
                    title="Product View"
                    href="#"
                    class="fas fa-eye"
                    data-bs-toggle="modal"
                    data-bs-target="#product-view"
                    tabIndex="-1"
                    onClick={() => {
                      setShow(true);
                    }}
                  ></a>
                </div>
              </div>
              <div class="product-content">
                <div class="product-rating">
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="icofont-star"></i>
                  <a href="#" tabIndex="-1">
                    (3)
                  </a>
                </div>
                <h6
                  class="product-name"
                  onClick={() => {
                    navigate("productdetails");
                  }}
                >
                  <a href="#" tabIndex="-1">
                    {foodItem[0].item_name}
                  </a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del>
                  <span>
                    $28 <small>/piece</small>
                  </span>
                </h6>
                <button class="product-add" title="Add to Cart" tabIndex="-1">
                  <i class="fas fa-shopping-basket"></i>
                  <span>add</span>
                </button>
                <div class="product-action">
                  <button
                    class="action-minus"
                    title="Quantity Minus"
                    tabIndex="-1"
                  >
                    <i class="icofont-minus"></i>
                  </button>
                  <input
                    class="action-input"
                    title="Quantity Number"
                    type="text"
                    name="quantity"
                    value="1"
                    tabIndex="-1"
                  />
                  <button
                    class="action-plus"
                    title="Quantity Plus"
                    tabIndex="-1"
                  >
                    <i class="icofont-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="product-card shadow">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text new">new</label>
                </div>
                <button class="product-wish wish" tabIndex="-1">
                  <i class="fas fa-heart"></i>
                </button>
                <a
                  class="product-image"
                  // href="#"
                  tabIndex="-1"
                >
                  <img src={foodItem[1].item_image} alt="product" />
                </a>
                <div class="product-widget">
                  <a
                    title="Product View"
                    href="#"
                    class="fas fa-eye"
                    data-bs-toggle="modal"
                    data-bs-target="#product-view"
                    tabIndex="-1"
                    onClick={() => {
                      setShow(true);
                    }}
                  ></a>
                </div>
              </div>
              <div class="product-content">
                <div class="product-rating">
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="icofont-star"></i>
                  <a href="#" tabIndex="-1">
                    (3)
                  </a>
                </div>
                <h6
                  class="product-name"
                  onClick={() => {
                    navigate("productdetails");
                  }}
                >
                  <a href="#" tabIndex="-1">
                    {foodItem[1].item_name}
                  </a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del>
                  <span>
                    $28 <small>/piece</small>
                  </span>
                </h6>
                <button class="product-add" title="Add to Cart" tabIndex="-1">
                  <i class="fas fa-shopping-basket"></i>
                  <span>add</span>
                </button>
                <div class="product-action">
                  <button
                    class="action-minus"
                    title="Quantity Minus"
                    tabIndex="-1"
                  >
                    <i class="icofont-minus"></i>
                  </button>
                  <input
                    class="action-input"
                    title="Quantity Number"
                    type="text"
                    name="quantity"
                    value="1"
                    tabIndex="-1"
                  />
                  <button
                    class="action-plus"
                    title="Quantity Plus"
                    tabIndex="-1"
                  >
                    <i class="icofont-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="product-card shadow">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text new">new</label>
                </div>
                <button class="product-wish wish" tabIndex="-1">
                  <i class="fas fa-heart"></i>
                </button>
                <a
                  class="product-image"
                  // href="#"
                  tabIndex="-1"
                >
                  <img src={foodItem[2].item_image} alt="product" />
                </a>
                <div class="product-widget">
                  <a
                    title="Product View"
                    href="#"
                    class="fas fa-eye"
                    data-bs-toggle="modal"
                    data-bs-target="#product-view"
                    tabIndex="-1"
                    onClick={() => {
                      setShow(true);
                    }}
                  ></a>
                </div>
              </div>
              <div class="product-content">
                <div class="product-rating">
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="icofont-star"></i>
                  <a href="#" tabIndex="-1">
                    (3)
                  </a>
                </div>
                <h6
                  class="product-name"
                  onClick={() => {
                    navigate("productdetails");
                  }}
                >
                  <a href="#" tabIndex="-1">
                    {foodItem[2].item_name}
                  </a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del>
                  <span>
                    $28 <small>/piece</small>
                  </span>
                </h6>
                <button class="product-add" title="Add to Cart" tabIndex="-1">
                  <i class="fas fa-shopping-basket"></i>
                  <span>add</span>
                </button>
                <div class="product-action">
                  <button
                    class="action-minus"
                    title="Quantity Minus"
                    tabIndex="-1"
                  >
                    <i class="icofont-minus"></i>
                  </button>
                  <input
                    class="action-input"
                    title="Quantity Number"
                    type="text"
                    name="quantity"
                    value="1"
                    tabIndex="-1"
                  />
                  <button
                    class="action-plus"
                    title="Quantity Plus"
                    tabIndex="-1"
                  >
                    <i class="icofont-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="product-card shadow">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text new">new</label>
                </div>
                <button class="product-wish wish" tabIndex="-1">
                  <i class="fas fa-heart"></i>
                </button>
                <a
                  class="product-image"
                  // href="#"
                  tabIndex="-1"
                >
                  <img src={foodItem[3].item_image} alt="product" />
                </a>
                <div class="product-widget">
                  <a
                    title="Product View"
                    href="#"
                    class="fas fa-eye"
                    data-bs-toggle="modal"
                    data-bs-target="#product-view"
                    tabIndex="-1"
                    onClick={() => {
                      setShow(true);
                    }}
                  ></a>
                </div>
              </div>
              <div class="product-content">
                <div class="product-rating">
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="icofont-star"></i>
                  <a href="#" tabIndex="-1">
                    (3)
                  </a>
                </div>
                <h6
                  class="product-name"
                  onClick={() => {
                    navigate("productdetails");
                  }}
                >
                  <a href="#" tabIndex="-1">
                    {foodItem[2].item_name}
                  </a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del>
                  <span>
                    $28 <small>/piece</small>
                  </span>
                </h6>
                <button class="product-add" title="Add to Cart" tabIndex="-1">
                  <i class="fas fa-shopping-basket"></i>
                  <span>add</span>
                </button>
                <div class="product-action">
                  <button
                    class="action-minus"
                    title="Quantity Minus"
                    tabIndex="-1"
                  >
                    <i class="icofont-minus"></i>
                  </button>
                  <input
                    class="action-input"
                    title="Quantity Number"
                    type="text"
                    name="quantity"
                    value="1"
                    tabIndex="-1"
                  />
                  <button
                    class="action-plus"
                    title="Quantity Plus"
                    tabIndex="-1"
                  >
                    <i class="icofont-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="product-card shadow">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text new">new</label>
                </div>
                <button class="product-wish wish" tabIndex="-1">
                  <i class="fas fa-heart"></i>
                </button>
                <a
                  class="product-image"
                  // href="#"
                  tabIndex="-1"
                >
                  <img src={foodItem[4].item_image} alt="product" />
                </a>
                <div class="product-widget">
                  <a
                    title="Product View"
                    href="#"
                    class="fas fa-eye"
                    data-bs-toggle="modal"
                    data-bs-target="#product-view"
                    tabIndex="-1"
                    onClick={() => {
                      setShow(true);
                    }}
                  ></a>
                </div>
              </div>
              <div class="product-content">
                <div class="product-rating">
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="icofont-star"></i>
                  <a href="#" tabIndex="-1">
                    (3)
                  </a>
                </div>
                <h6
                  class="product-name"
                  onClick={() => {
                    navigate("productdetails");
                  }}
                >
                  <a href="#" tabIndex="-1">
                    {foodItem[4].item_name}
                  </a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del>
                  <span>
                    $28 <small>/piece</small>
                  </span>
                </h6>
                <button class="product-add" title="Add to Cart" tabIndex="-1">
                  <i class="fas fa-shopping-basket"></i>
                  <span>add</span>
                </button>
                <div class="product-action">
                  <button
                    class="action-minus"
                    title="Quantity Minus"
                    tabIndex="-1"
                  >
                    <i class="icofont-minus"></i>
                  </button>
                  <input
                    class="action-input"
                    title="Quantity Number"
                    type="text"
                    name="quantity"
                    value="1"
                    tabIndex="-1"
                  />
                  <button
                    class="action-plus"
                    title="Quantity Plus"
                    tabIndex="-1"
                  >
                    <i class="icofont-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="product-card shadow">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text new">new</label>
                </div>
                <button class="product-wish wish" tabIndex="-1">
                  <i class="fas fa-heart"></i>
                </button>
                <a
                  class="product-image"
                  // href="#"
                  tabIndex="-1"
                >
                  <img src={foodItem[5].item_image} alt="product" />
                </a>
                <div class="product-widget">
                  <a
                    title="Product View"
                    href="#"
                    class="fas fa-eye"
                    data-bs-toggle="modal"
                    data-bs-target="#product-view"
                    tabIndex="-1"
                    onClick={() => {
                      setShow(true);
                    }}
                  ></a>
                </div>
              </div>
              <div class="product-content">
                <div class="product-rating">
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="icofont-star"></i>
                  <a href="#" tabIndex="-1">
                    (3)
                  </a>
                </div>
                <h6
                  class="product-name"
                  onClick={() => {
                    navigate("productdetails");
                  }}
                >
                  <a href="#" tabIndex="-1">
                    {foodItem[5].item_image}
                  </a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del>
                  <span>
                    $28 <small>/piece</small>
                  </span>
                </h6>
                <button class="product-add" title="Add to Cart" tabIndex="-1">
                  <i class="fas fa-shopping-basket"></i>
                  <span>add</span>
                </button>
                <div class="product-action">
                  <button
                    class="action-minus"
                    title="Quantity Minus"
                    tabIndex="-1"
                  >
                    <i class="icofont-minus"></i>
                  </button>
                  <input
                    class="action-input"
                    title="Quantity Number"
                    type="text"
                    name="quantity"
                    value="1"
                    tabIndex="-1"
                  />
                  <button
                    class="action-plus"
                    title="Quantity Plus"
                    tabIndex="-1"
                  >
                    <i class="icofont-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <div class="product-card">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text new">new</label>
                </div>
                <button class="product-wish wish" tabIndex="-1">
                  <i class="fas fa-heart"></i>
                </button>
                <a
                  class="product-image"
                  // href="#"
                  tabIndex="-1"
                >
                  <img
                    src="https://mironmahmud.com/greeny/assets/ltr/images/product/16.jpg"
                    alt="product"
                  />
                </a>
                <div class="product-widget">
                  <a
                    title="Product View"
                    href="#"
                    class="fas fa-eye"
                    data-bs-toggle="modal"
                    data-bs-target="#product-view"
                    tabIndex="-1"
                    onClick={() => {
                      setShow(true);
                    }}
                  ></a>
                </div>
              </div>
              <div class="product-content">
                <div class="product-rating">
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="icofont-star"></i>
                  <a href="#" tabIndex="-1">
                    (3)
                  </a>
                </div>
                <h6 class="product-name">
                  <a href="#" tabIndex="-1">
                    fresh green chilis
                  </a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del>
                  <span>
                    $28 <small>/piece</small>
                  </span>
                </h6>
                <button class="product-add" title="Add to Cart" tabIndex="-1">
                  <i class="fas fa-shopping-basket"></i>
                  <span>add</span>
                </button>
                <div class="product-action">
                  <button
                    class="action-minus"
                    title="Quantity Minus"
                    tabIndex="-1"
                  >
                    <i class="icofont-minus"></i>
                  </button>
                  <input
                    class="action-input"
                    title="Quantity Number"
                    type="text"
                    name="quantity"
                    value="1"
                    tabIndex="-1"
                  />
                  <button
                    class="action-plus"
                    title="Quantity Plus"
                    tabIndex="-1"
                  >
                    <i class="icofont-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          <div>
            <div class="product-card shadow">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text new">new</label>
                </div>
                <button class="product-wish wish" tabIndex="-1">
                  <i class="fas fa-heart"></i>
                </button>
                <a
                  class="product-image"
                  // href="#"
                  tabIndex="-1"
                >
                  <img src={foodItem[0].item_image} alt="product" />
                </a>
                <div class="product-widget">
                  <a
                    title="Product View"
                    href="#"
                    class="fas fa-eye"
                    data-bs-toggle="modal"
                    data-bs-target="#product-view"
                    tabIndex="-1"
                    onClick={() => {
                      setShow(true);
                    }}
                  ></a>
                </div>
              </div>
              <div class="product-content">
                <div class="product-rating">
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="icofont-star"></i>
                  <a href="#" tabIndex="-1">
                    (3)
                  </a>
                </div>
                <h6
                  class="product-name"
                  onClick={() => {
                    navigate("productdetails");
                  }}
                >
                  <a href="#" tabIndex="-1">
                    {foodItem[0].item_name}
                  </a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del>
                  <span>
                    $28 <small>/piece</small>
                  </span>
                </h6>
                <button class="product-add" title="Add to Cart" tabIndex="-1">
                  <i class="fas fa-shopping-basket"></i>
                  <span>add</span>
                </button>
                <div class="product-action">
                  <button
                    class="action-minus"
                    title="Quantity Minus"
                    tabIndex="-1"
                  >
                    <i class="icofont-minus"></i>
                  </button>
                  <input
                    class="action-input"
                    title="Quantity Number"
                    type="text"
                    name="quantity"
                    value="1"
                    tabIndex="-1"
                  />
                  <button
                    class="action-plus"
                    title="Quantity Plus"
                    tabIndex="-1"
                  >
                    <i class="icofont-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="product-card shadow">
              <div class="product-media">
                <div class="product-label">
                  <label class="label-text new">new</label>
                </div>
                <button class="product-wish wish" tabIndex="-1">
                  <i class="fas fa-heart"></i>
                </button>
                <a
                  class="product-image"
                  // href="#"
                  tabIndex="-1"
                >
                  <img src={foodItem[2].item_image} alt="product" />
                </a>
                <div class="product-widget">
                  <a
                    title="Product View"
                    href="#"
                    class="fas fa-eye"
                    data-bs-toggle="modal"
                    data-bs-target="#product-view"
                    tabIndex="-1"
                    onClick={() => {
                      setShow(true);
                    }}
                  ></a>
                </div>
              </div>
              <div class="product-content">
                <div class="product-rating">
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="icofont-star"></i>
                  <a href="#" tabIndex="-1">
                    (3)
                  </a>
                </div>
                <h6
                  class="product-name"
                  onClick={() => {
                    navigate("productdetails");
                  }}
                >
                  <a href="#" tabIndex="-1">
                    {foodItem[2].item_name}
                  </a>
                </h6>
                <h6 class="product-price">
                  <del>$34</del>
                  <span>
                    $28 <small>/piece</small>
                  </span>
                </h6>
                <button class="product-add" title="Add to Cart" tabIndex="-1">
                  <i class="fas fa-shopping-basket"></i>
                  <span>add</span>
                </button>
                <div class="product-action">
                  <button
                    class="action-minus"
                    title="Quantity Minus"
                    tabIndex="-1"
                  >
                    <i class="icofont-minus"></i>
                  </button>
                  <input
                    class="action-input"
                    title="Quantity Number"
                    type="text"
                    name="quantity"
                    value="1"
                    tabIndex="-1"
                  />
                  <button
                    class="action-plus"
                    title="Quantity Plus"
                    tabIndex="-1"
                  >
                    <i class="icofont-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {show ? <ShoppingPopUp show={show} handleClose={handleClose} /> : ""}
        </Slider>
      </div>
    </section>
    // </div>
  );
};

export default New_Item;
