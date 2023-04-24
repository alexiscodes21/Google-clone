import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
// import { ReactComponent as GoogleLogo } from "../images/google.svg";
import GoogleLogo from "../images/google.png"
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="home">
      <div className="homeHeader">
        <div className="homeHeaderLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="homeHeaderRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar style={{ width: "32px", height: "32px" }} />
        </div>
      </div>

      <div className="homeBody">
        <div className="googleLogo">
          {/* <GoogleLogo style={{ width: "275px", height: "275px"}} /> */}
          <img src={GoogleLogo} style={{width: "275px"}} />
        </div>
        <div>
          <SearchBar hideButtons />
        </div>
      </div>
    </div>
  );
};

export default Home;
