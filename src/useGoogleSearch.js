import { useState, useEffect } from "react";
//require("dotenv").config();

const API_KEY = process.env.REACT_APP_API_KEY;
const CX = process.env.REACT_APP_CX;

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${term}`)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
