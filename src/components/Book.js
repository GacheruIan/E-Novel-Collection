import React from "react";

function Book({ img }) {
  return (
    <div className="book-card">
      <div className="book-Title">
        <h2>{img.title}</h2>
      </div>
      <div className="book-Image">
        <img src={img.image} alt="images" width={300}></img>
      </div>
      <div className="book-Description">
        <p>{img.Description}</p>
      </div>
    </div>
  );
}
export default Book;
