import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Routes } from "./components/Routes";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-secondary bg-opacity-10 dark:bg-opacity-75 dark:text-white h-auto">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
