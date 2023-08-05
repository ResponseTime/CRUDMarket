import React from "react";

export default function Itemsi(props) {
  if (props.loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="Items">
      {props.items.map((item) => {
        return (
          <div className="Item" key={item._id}>
            {item.ProductName}
            <div>Price Rs {item.Price}</div>
            <div>Posted By {item.PostedBy}</div>
          </div>
        );
      })}
    </div>
  );
}
