import React, {useState, useEffect} from 'react'
import SearchComponent from './Search'  
import HomePage from './HomePage'
import About from './About'
import AddPageForm from './AddPageForm'


function MainComponent() {
  const [images, setImages] = useState([])
  const [searchValue,setSearchValue] = useState([])
 
  useEffect(() =>{
    fetch("http://localhost:3000/images")
    .then((res) => res.json())
    .then((resp)=>{
      setImages(resp)
      setSearchValue(resp)
    })
  },[])
 
  function change(event){
    setImages(searchValue.filter(images=>images.title.toLowerCase().includes(event.target.value.toLowerCase())))
   }
  return (
    <div>
      <SearchComponent change={change}/>
      <HomePage images = {images}/>
    </div>
  )
}

export default MainComponent