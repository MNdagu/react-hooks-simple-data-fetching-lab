// create your App component here
import React, { useState, useEffect } from "react";

const App = () => {
    const [image, setImage] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            console.log(data.message)
            setImage(data.message)
        })

    },[])
  return (
  <>
  {image.length > 0  ?  
  <img src={image} alt="A Random Dog"/> 
  : <p>Loading...</p>}
  </>);
};

export default App;
