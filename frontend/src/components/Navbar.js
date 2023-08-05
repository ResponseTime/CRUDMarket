import React, { useState } from "react";

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
      <h1>Product Listing</h1>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}
