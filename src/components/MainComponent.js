import React, {useState, useEffect} from 'react'
import SearchComponent from './SearchComponent'


function MainComponent() {
  const [images, setImages] = useState([])
  useEffect(() =>{
    fetch("http://localhost:3000/images")
    .then((res) => res.json())
    .then((img)=>{
      setImages(img)
    })
  },[])

  return (
    <div>
      <SearchComponent />
    </div>
  )
}

export default MainComponent