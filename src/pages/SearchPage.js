import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
// import Response from "../response";
import GoogleLogo from "../images/google.png";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FlightIcon from "@mui/icons-material/Flight";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "../index.css";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  const { data } = useGoogleSearch(term);

  // MOCK API CALL
  // const data = Response;

  // https://developers.google.com/custom-search/v1/using_rest

  // https://cse.google.com/cse/create/new

  console.log(data);

  return (
    <>
      <div className="searchPageHeader">
        <div className="searchPageLogoAndBar">
          <Link to="/">
            <img className="searchPageLogo" src={GoogleLogo} alt={"Google Logo"} style={{ width: "80px" }} />
          </Link>
          <div className="searchPageSearchBar">
            <SearchBar hideButtons searchIconEnd />
          </div>
        </div>
        <div className="searchPageHeaderOptions">
          <div className="option">
            <ImageSearchIcon className="icon" style={{ width: "18px" }} />
            <Link to="/">Images</Link>
          </div>
          <div className="option">
            <SlideshowOutlinedIcon className="icon" style={{ width: "18px" }} />
            <Link to="/">Videos</Link>
          </div>
          <div className="option">
            <SellOutlinedIcon className="icon" style={{ width: "18px" }} />
            <Link to="/">Shopping</Link>
          </div>
          <div className="option">
            <ClassOutlinedIcon className="icon" style={{ width: "18px" }} />
            <Link to="/">Books</Link>
          </div>
          <div className="option">
            <LocationOnOutlinedIcon className="icon" style={{ width: "18px" }} />
            <Link to="/">Maps</Link>
          </div>
          <div className="option">
            <DescriptionOutlinedIcon className="icon" style={{ width: "18px" }} />
            <Link to="/">News</Link>
          </div>
          <div className="option">
            <FlightIcon className="icon" style={{ width: "18px" }} />
            <Link to="/">Flights</Link>
          </div>
          <div className="option">
            <AttachMoneyIcon className="icon" style={{ width: "18px" }} />
            <Link to="/">Finance</Link>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPageTotalResults">
          <p className="searchPageResultsCount">
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPageResult">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                  <img className="searchPageResultImage" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt="" />
                )}

                {item.displayLink}
              </a>
              <a className="searchPageResultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPageResultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchPage;
