import React, { useEffect, useState } from "react";
import "./Product_center_slider.css";
import { foodItem } from "../data";
const Product_center_slider = () => {
  const [text1, setText] = useState("");
  const [count, setCount] = useState(0);
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [main, setMain] = useState("");

  let imgObject = [
    foodItem[0].item_image,
    foodItem[1].item_image,
    foodItem[2].item_image,
    foodItem[3].item_image,
    foodItem[4].item_image,
    foodItem[5].item_image,
    foodItem[0].item_image,
    foodItem[1].item_image,
    foodItem[2].item_image,
    foodItem[3].item_image,
    foodItem[4].item_image,
    foodItem[5].item_image,
  ];

  const leftHandle = () => {
    if (count < imgObject.length - 6) {
      setCount(count + 1);
    }
  };
  const rightHandle = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div id="container">
        <div id="galleryView">
          <div id="galleryContainer">
            <div id="leftViewtwo">
              <img src={imgObject[count + 5]} className="  w-100 h-100" />
            </div>
            <div id="leftView">
              <img
                src={imgObject[count]}
                onClick={() => leftHandle()}
                className="  w-100 h-100"
              />
            </div>
            <button id="navLeft" onClick={() => leftHandle()} class="navBtns">
              <i class="fas fa-arrow-left "></i>
            </button>
            <a id="linkTag">
              <div id="mainView">
                <img src={imgObject[count + 1]} className=" img-fluid w-100" />
              </div>
            </a>
            <div id="rightView" onClick={() => rightHandle()}>
              <img src={imgObject[count + 2]} className="  w-100 h-100" />
            </div>
            <div id="rightViewtwo">
              <img src={imgObject[count + 3]} className="  w-100 h-100" />
            </div>
            <button id="navRight" onClick={() => rightHandle()} class="navBtns">
              <i class="fas fa-arrow-right "></i>
            </button>
          </div>
        </div>
        <div id="tilesView">
          <div id="tilesContainer"></div>
        </div>
      </div>
    </div>
  );
};

export default Product_center_slider;
