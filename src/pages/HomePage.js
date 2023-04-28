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
          <Link to="https://about.google.com">About</Link>
          <Link to="https://store.google.com">Store</Link>
        </div>
        <div className="homeHeaderRight">
          <Link to="https://mail.google.com">Gmail</Link>
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
          <Link to="https://ads.google.com">Advertising</Link>
          <Link to="https://smallbusiness.withgoogle.com">Business</Link>
          <Link to="https://www.google.com/search/howsearchworks/">How Search works</Link>
        </div>
        <div className="homeFooter FooterMiddle">
          <Link to="https://sustainability.google/carbon-free/">Carbon neutral since 2007</Link>
        </div>
        <div className="homeFooter FooterRight">
          <Link to="https://policies.google.com/privacy">Privacy</Link>
          <Link to="https://policies.google.com/terms">Terms</Link>
          {/*update settings link*/}
          <Link to="/">Settings</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
