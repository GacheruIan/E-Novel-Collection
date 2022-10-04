import React from "react";

function Book({ img }) {
  console.log(img.image);
  return (
    <div className="book-card">
      <div className="book-Title">
        <h2>{img.title}</h2>
      </div>
      <div className="book-Image">
        <img src={img.image} alt="images" width={200}></img>
      </div>
      <div className="book-Description">
        <p>{img.Description}</p>
      </div>
    </div>
  );
}
export default Book;
