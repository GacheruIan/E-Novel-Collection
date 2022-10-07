import React, { useState, useEffect } from "react";
import SearchComponent from "./Search";
import HomeList from "./HomeList";

function Main() {
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    fetch("https://novel-collections.herokuapp.com/images")
      .then((res) => res.json())
      .then((resp) => {
        setImages(resp);
        setSearchValue(resp);
      });
  }, []);

  function change(event) {
    setImages(
      searchValue.filter((images) =>
        images.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }
  return (
    <div>
      <SearchComponent change={change} />
      <HomeList images={images} />
    </div>
  );
}

export default Main;
