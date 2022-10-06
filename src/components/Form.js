import React from "react";

function Form() {
  return (
    <div>
      <label>
        Novel-Title:
        <input type="text"></input>
      </label>
      <label>
        <br></br>
        Novel-Description:
        <input type="text"></input>
      </label>
      <input type="submit"></input>
    </div>
  );
}

export default Form;
