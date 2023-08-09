import React from "react";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
export default function Itemsi(props) {
  if (props.loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
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
                <span className="desc">
                  {item.Desc.length > 100
                    ? item.Desc.substring(0, 100) + "..."
                    : item.Desc}
                </span>
              </div>
              <div className="util">
                <button
                  onClick={async () => {
                    await fetch(
                      `https://items-api-v1-n89d.onrender.com/delete/product/${item.id}`,
                      { method: "DELETE" }
                    );
                    window.location.reload();
                  }}
                >
                  Delete Item
                </button>{" "}
                <button className="up">
                  <Link to="/update" state={item.id}>
                    Update Item
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        itemsPerPage={props.itemsPerPage}
        totalItems={props.itemslen}
        paginate={props.paginate}
      />
    </>
  );
}
