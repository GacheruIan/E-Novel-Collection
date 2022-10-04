import React from 'react'

function Book({img}) {
   console.log(img.image)
  return (
    
    <div>
      <div className="book-title">
        <h2>{img.title}</h2>
      </div>
      <div className="book-image">
        <img src = {img.image} alt="images" width={180}></img>
      </div>
      <div className="book-description">
        <p>{img.Description}</p>
      </div>
    </div>
  )
}
export default Book