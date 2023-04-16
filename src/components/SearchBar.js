import React, { useState } from 'react'
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from '@mui/material';
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate();

  const search = event => {
    event.preventDefault();

    console.log('You hit the search button >>', input)

    //do something with the input ...come back and fix

    navigate('/search_page')

  };

  return (
    <form className="search">
      <div className="searchInput">
        <SearchIcon className="searchIcon" />
        <input value={input} onChange={(event) => setInput(event.target.value)} />
        <MicIcon />
        <CameraAltOutlinedIcon />
      </div>
      <div className="searchButtons">
        <Button type='submit' onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
}

export default Search;