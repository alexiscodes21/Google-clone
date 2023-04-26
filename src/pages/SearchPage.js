import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from '../response';

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
        
      </div>
      <div className="searchPageResults">

      </div>
    </div>
  );
};

export default SearchPage;
