import React, { useState } from 'react'
import ImageList from './ImageList';
import ImageForm from './ImageForm';
import { useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setImages([
      {
        id: 1,
        url: "https://static01.nyt.com/images/2014/07/23/upshot/23UP-cat/23UP-cat-superJumbo.jpg",
        text: "OG Cat"
      }, 
      {
        id: 2,
        url: "https://static01.nyt.com/images/2014/07/23/upshot/23UP-cat/23UP-cat-superJumbo.jpg",
        text: "Cat 2, shockingly resembles the first cat..."
      },
      {
        id: 3,
        url: "https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png",
        text: "This cat is a killer"
      }
    ])
  }, []);

  function createImage(url, text){
    const newImage = {id: counter, url, text}
    setImages([...images, newImage])
  }
  return (
  <>
    <ImageList images={images} setImages={setImages} />
    <ImageForm createImage={createImage} />
    <input type="text" />
    <button>Add Image</button>
    <button>Cancel</button>
  </>
  )
  } 
export default App;
