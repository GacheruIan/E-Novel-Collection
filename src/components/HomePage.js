import React from "react";
import Book from "./Book";

function HomePage({ images }) {
    console.log(images)
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

export default HomePage;
