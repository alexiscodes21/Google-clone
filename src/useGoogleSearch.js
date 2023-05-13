import { useState, useEffect } from "react";
<<<<<<< HEAD
import API_KEY from "./keys";

const CONTEXT_KEY = "f6e7440b9534046ba";
=======
//require("dotenv").config();

const API_KEY = process.env.REACT_APP_API_KEY;
const CX = process.env.REACT_APP_CX;
>>>>>>> 20d7927a09c80051f96c3f614c65c9b7ff63dbc6

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
<<<<<<< HEAD
      fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
=======
      fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${term}`)
>>>>>>> 20d7927a09c80051f96c3f614c65c9b7ff63dbc6
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
