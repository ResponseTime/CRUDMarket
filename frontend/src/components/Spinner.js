import React from "react";
import loading from "./Hourglass.gif";
export default function Spinner() {
  return (
    <div class="spinner">
      <img src={loading} alt="" />
    </div>
  );
}
