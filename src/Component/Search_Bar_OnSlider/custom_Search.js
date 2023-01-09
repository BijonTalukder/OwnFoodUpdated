import React, { useEffect } from "react";
import { Box, Paper, IconButton, InputBase, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import "./custom_search.css";
const Custom_Search = () => {
  return (
    <Box className="searchBox ">
      <Box display="flex" flexDirection="row">
        <div
          className=" d-flex justify-content-center align-items-end "
          style={{ width: "95%", marginLeft: 25, marginTop: 25 }}
        >
          <form className="zip-form">
            <input
              type="text"
              placeholder="Zip Code  "
              style={{ width: "50%", marginLeft: 10 }}
            />

            <button>
              <i class="fas thin fa-location-crosshairs"></i>
            </button>

            <input
              type="text"
              placeholder="Search anything..."
              style={{ width: "100%" }}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </form>
          <Button
            variant="contained"
            style={{ marginLeft: "1%", width: 100, height: 43 }}
          >
            Search
          </Button>
          {/* <form className="header-form "></form> */}
        </div>
      </Box>
    </Box>
  );
};

export default Custom_Search;
