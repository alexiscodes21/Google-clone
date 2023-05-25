import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
// import { ReactComponent as GoogleLogo } from "../images/google.svg";
import GoogleLogo from "../images/google.png";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="home">
      <div className="homeHeader">
        <div className="homeHeaderLeft">
          <Link to="/">About</Link>
          <Link to="/">Store</Link>
        </div>
        <div className="homeHeaderRight">
          <Link to="/">Gmail</Link>
          {/*update images link...need to create a new page*/}
          <Link to="/">Images</Link>
          {/*update apps icon*/}
          <AppsIcon />
          <Avatar style={{ width: "32px", height: "32px" }} />
        </div>
      </div>

      <div className="homeBody">
        <div className="googleLogo">
          {/* <GoogleLogo style={{ width: "275px", height: "275px"}} /> */}
          <img src={GoogleLogo} alt={"Google Logo"} style={{ width: "275px" }} />
        </div>
        <div>
          <SearchBar />
        </div>
      </div>

      <div className="homeFooter Footer">
        <div className="homeFooter FooterLeft">
          <Link to="/">Advertising</Link>
          <Link to="/">Business</Link>
          <Link to="/">How Search works</Link>
        </div>
        <div className="homeFooter FooterMiddle">
          <Link to="/">Carbon neutral since 2007</Link>
        </div>
        <div className="homeFooter FooterRight">
          <Link to="/">Privacy</Link>
          <Link to="/">Terms</Link>
          {/*update settings link*/}
          <Link to="/">Settings</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
