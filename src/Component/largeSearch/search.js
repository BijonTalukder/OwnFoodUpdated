import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./search.css";
import Logo from "../../assets/img/Logo.png";
import TabHolder from "./tab";
const style = {
  position: "absolute",
  top: "0%",
  width: "100%",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  height: 500,
  p: 4,
};

const LongSearch = ({ openSearch, handleClose, SetpanLeft }) => {
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        style={{ zIndex: 5 }}
        open={openSearch}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container-fluid">
            <div className="d-flex  justify-content-between ">
              <a href="https://ownfood.hostdivine.com">
                <img src={Logo} style={{ width: 100, marginTop: -20 }} />
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  SetpanLeft(true);
                }}
                style={{
                  height: 40,
                  // width: 40,
                  color: "#1b6dc1",
                }}
              >
                <i class="fas fa-bars fa-lg "></i>
              </button>
              <form className="sf_search-form mt-2">
                <input
                  type="text"
                  placeholder="Food, groceries, drinks, etc"
                  style={{ marginLeft: 5 }}
                />
                <button>
                  <i className="fas fa-search"></i>
                </button>
              </form>

              {/* <form className="header-form "></form> */}
              <button
                type="button"
                class="btn-close mt-3"
                aria-label="Close"
                onClick={() => {
                  handleClose();
                }}
              ></button>
            </div>
            <div className="mt-3">
              <TabHolder />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default LongSearch;
