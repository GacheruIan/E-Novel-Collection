import React from "react";
import Book from "./Book";

function HomeList({ images }) {

  return (
    <div>
      {images.map((img) => {
        return (
        <Book key={img.id} img ={img}/>
        );
      })}
    </div>
  );
}

export default HomeList;
