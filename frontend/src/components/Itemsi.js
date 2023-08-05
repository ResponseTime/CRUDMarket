import React from "react";

export default function Itemsi(props) {
  if (props.loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul>
      {props.items.map((item) => {
        return <li key={item._id}>{item.ProductName}</li>;
      })}
    </ul>
  );
}
