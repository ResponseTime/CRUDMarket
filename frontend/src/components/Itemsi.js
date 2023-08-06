import React from "react";

export default function Itemsi(props) {
  if (props.loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="Items">
      {props.items.map((item) => {
        return (
          <div className="Item" key={item.id}>
            <div className="img">
              <img className="img" src={item.ImageUrl} alt="" srcset="" />
            </div>
            <div className="info">
              <span className="cate">{item.Category}</span>
              <span className="title">
                {item.Title.length > 50
                  ? item.Title.substring(0, 40) + "..."
                  : item.Title}
              </span>
              <span className="price">&#8377;{item.Price}</span>
              <span className="desc">{item.Desc.substring(0, 200)}...</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
