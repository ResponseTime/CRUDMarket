import React from "react";

export default function Pagination({ itemsPerPage, totalItems, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="pagination">
      <ul>
        {pageNumber.map((num) => {
          return (
            <li>
              <a
                onClick={() => {
                  paginate(num);
                }}
                href="!#"
              >
                {num}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
