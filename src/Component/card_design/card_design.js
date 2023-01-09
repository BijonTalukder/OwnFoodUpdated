import React from "react";
import "./card_design.css";
import { Container, Col, Row } from "react-bootstrap";
import { foodItem } from "../data";
import { Avatar } from "@mui/material";
import Halal from "../../assets/img/halal_logo.png";
const Card_Design = () => {
  return (
    <div className="container-fluid">
      <Row>
        {foodItem.map((item, index) => {
          return (
            <>
              <div className="col">
                <div class="product-card shadow">
                  <div class="product-media">
                    <div class="product-label">
                      <label class="label-text new">new</label>
                    </div>
                    <button class="product-wish wish" tabIndex="-1">
                      <i class="fas fa-heart"></i>
                    </button>
                    <button class="product-wish2 wish" tabIndex="-1">
                      <i class="fa-sharp fa-solid fa-comments fa-lg  ms-4"></i>
                    </button>
                    <button class="product-wish3 wish" tabIndex="-1">
                      <i class="fa-solid fa-share"></i>
                    </button>

                    <div class="product-image" tabIndex="-1">
                      <img src={item.item_image} alt="product" />
                      <div className="text-center sf_kitchen_name">
                        Kitchen Name
                      </div>
                    </div>
                    <div className="halal_wrap">
                      <img src={Halal} alt="Halal" className=" halal_logo" />
                    </div>
                    <div class="product-widget">
                      <a
                        title="Product View"
                        href="#"
                        class="fas fa-eye"
                        data-bs-toggle="modal"
                        data-bs-target="#product-view"
                        tabIndex="-1"
                      ></a>
                    </div>
                  </div>
                  <div class="product-content mt-5">
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
                        {foodItem[2].item_name}
                      </a>
                    </h6>
                    <h6 class="product-price">
                      <del>$34</del>
                      <span>
                        $28 <small>/piece</small>
                      </span>
                    </h6>
                    <button
                      class="product-add"
                      title="Add to Cart"
                      tabIndex="-1"
                    >
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
            </>
          );
        })}
      </Row>
    </div>
  );
};

export default Card_Design;
