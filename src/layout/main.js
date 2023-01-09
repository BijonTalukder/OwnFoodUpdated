import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import Header from "../Component/navbar/header";
import { Outlet } from "react-router-dom";
import Footer from "../Component/footer/footer";
import Sidebar from "../Component/slidebar/sidebar";
import DrawerLeft from "../Component/drawerLeft/drawerleft";
import LongSearch from "../Component/largeSearch/search";
import Ownfood from "../assets/img/ownfood.png";
const Main = () => {
  const [state, setState] = useState({
    isPaneOpen: false,
  });
  const [paneLeft, SetpanLeft] = useState(false);
  console.log(paneLeft);

  const [openSearch, setOpenSearch] = React.useState(false);
  const handleOpen = () => setOpenSearch(true);
  const handleClose = () => setOpenSearch(false);
  return (
    <div>
      <Header
        SetpanLeft={SetpanLeft}
        setState={setState}
        handleOpen={handleOpen}
      />

      <div>
        <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={state.isPaneOpen}
          width="400px"
          onRequestClose={() => setState({ paneLeft: false })}
        >
          <Sidebar setState={setState} />
        </SlidingPane>

        <div style={{ zIndex: 999 }}>
          <SlidingPane
            className="slidingpaneLeft"
            isOpen={paneLeft}
            from="left"
            width="300px"
            z-Index="27"
            onRequestClose={() => SetpanLeft(false)}
          >
            <div className="d-flex">
              <div className="row">
                <div className="col-md-10">
                  <a href="https://ownfood.hostdivine.com/">
                    {" "}
                    <img src={Ownfood} className="img-fluid" />
                  </a>
                </div>
                <div className="col-md-2">
                  {" "}
                  <button
                    class=""
                    onClick={() => {
                      SetpanLeft(false);
                    }}
                  >
                    <i class="icofont-close"></i>
                  </button>
                </div>
              </div>
            </div>

            <DrawerLeft />
          </SlidingPane>
        </div>
      </div>
      <LongSearch
        openSearch={openSearch}
        handleClose={handleClose}
        SetpanLeft={SetpanLeft}
      />

      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
