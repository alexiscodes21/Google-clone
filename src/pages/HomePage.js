import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from '@mui/material';
import GoogleLogo from '../images/google.png';

const HomePage = () => {
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
          <Avatar />
        </div>
      </div>

      <div className="homeBody">
        <img src={GoogleLogo} alt="Google Logo" />
      </div>
    </div>
  );
}

export default HomePage;