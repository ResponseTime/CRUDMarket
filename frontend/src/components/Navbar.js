import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className={colorChange ? "nav-col" : "navbar"}>
      <h1>
        <Link to="/">Product Listing</Link>
      </h1>
      <div className="search">
        <Link to="/new">Add New Product</Link>
      </div>
    </div>
  );
}
