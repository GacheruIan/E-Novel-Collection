import React, {useState, useEffect} from 'react'
import SearchComponent from './SearchComponent'
import HomePage from './HomePage'


function MainComponent() {
  const [images, setImages] = useState([])
  useEffect(() =>{
    fetch("http://localhost:3000/images")
    .then((res) => res.json())
    .then((resp)=>{
      setImages(resp)
    })
  },[])

  return (
    <div>
      <SearchComponent />
      <HomePage images = {images}/>
    </div>
  )
}

export default MainComponent