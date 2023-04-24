import React from "react";
import "./SearchPage.css";
import { useStateValue } from '../StateProvider';

const SearchPage = () => {

  const [{ term }, dispatch] = useStateValue();
  return (
    <div className="searchPage">
      <div className="searchPageHeader">
        <h1>{term}</h1>
      </div>

      <div className="searchPageResults"></div>
    </div>
  );
};

export default SearchPage;
