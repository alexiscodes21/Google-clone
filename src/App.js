import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
