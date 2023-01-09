import React, { useState } from "react";
import Slider from "./Slider/slider";
import Header from "./navbar/header";
import Collection from "./collection/collection";
import Footer from "./footer/footer";
import Blog from "./Blog/blog";
import AllItem from "./allItems/allItem";
import Custom_Search from "./Search_Bar_OnSlider/custom_Search";
import Item from "./new_Items/new_item";
import Sidebar from "./slidebar/sidebar";
import ClientSlider from "./Slider/cliSlider";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import DrawerLeft from "../Component/drawerLeft/drawerleft";
// import Shopping from "./shopping/shopping";
import Brand from "./Brand/brand";

import Earn_Money from "./Earn_money_with_us/earn_money";
import ClientTop from "./cientTop/clientTop";
import New_Slider from "./new_slider/new_slider";
import Circle_Product from "./Circle_Product/circle_product";
import FourbyTwo from "./fourbyTwo/fourbytwo";
import SliderComp from "./product_center_slider/Product_center_slider";
import OpenAccountInfo from "./Account_info/account";
import Card_Design from "./card_design/card_design";
import Find_Us from "./find_us/find_us";
const Main = () => {
  return (
    <>
      <ClientTop />
  
      <ClientSlider />
   
      <Card_Design />
      <Earn_Money />
      <OpenAccountInfo />
      <New_Slider />

      <Circle_Product />
      <Collection />
      <FourbyTwo />
      <Brand />

      <SliderComp />
    
      <Blog />
      <Find_Us />
    </>
  );
};

export default Main;
