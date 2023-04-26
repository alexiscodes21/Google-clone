import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from '../response';
import GoogleLogo from "../images/google.png"
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  // const { data } = useGoogleSearch(term)

  const data = Response;

  // https://developers.google.com/custom-search/v1/using_rest

  // https://cse.google.com/cse/create/new

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPageHeader">
        <Link to="/">
          <img className="searchPageLogo" src={GoogleLogo} alt={'Google Logo'} style={{width: "80px"}} />
        </Link>
        <div className="searchPageHeaderBody">
          <SearchBar hideButtons searchIconEnd/>
        </div>
      </div>
      <div className="searchPageResults">

      </div>
    </div>
  );
};

export default SearchPage;
