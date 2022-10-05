import React from "react";

function AddPageForm() {
  return (
    <div>
      <form>
        <label>
          Book-Title
          <input type="text" name="name" />
        </label>
        <label>
          Book-Description
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddPageForm;
