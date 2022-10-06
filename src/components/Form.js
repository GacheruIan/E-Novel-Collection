import React, {useState}from "react";

function Form() {
const [title, setTitle] = useState('');
const [book_image, setBook_Image] = useState('');
const [description, setDescription] = useState('')
 const handleSubmit = (e) => {
		e.preventDefault();
  
		const book = {
      title,
			book_image,
			description,
		};
    fetch("http://localhost:3000/images",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    }).then(() => {
			console.log('added book');
		});
 
  };
  return (
    <div>
      <p id="form-p">
        This page gives you a platform where you can add a Book to our
        collection.
      </p>
      <div>
        <form className="form-review" onSubmit={handleSubmit}>
          <label for="novel-title">Book-Title</label>
          <br />
          <input type="text"value={title} onChange={(e)=>setTitle(e.target.value)} required></input><br />
          <br />
          <label for="image-url">Image url</label> <br />
          <input type="text" value={book_image} onChange={(e)=>setBook_Image(e.target.value)} required/>
          <br />
          <br /><label for="book-description">Book-Description</label>
          <br />
          <input type="text" value={description} onChange = {(e)=> setDescription(e.target.value)} required></input>
          <br />
          <br />
          <button>Add book...</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
