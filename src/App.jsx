import React, { useState, useEffect } from "react";
import PaintingImage from "./images/painting-image.jpg";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [image, setImage] = useState();
  const [disabled, setDisabled] = useState(true);

  const getImage = () => {
    setDisabled(true);
    setImage("");
    fetch("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization: "Client-ID 4DGsM8Ad_Xyz70YNRH5acPT-wrFXJb8nCTQiAKUcLV4",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.urls.regular);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
        setImage(PaintingImage);
      });
    setTimeout(() => {
      setDisabled(false);
    }, 5000);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Ephemeral Media</h1>
        <p className="subtitle">Images provided by Unsplash API</p>
        {image && <img src={image} className="disappearing-image" />}
        <div className="App-container">
          <p>
            <button disabled={disabled} type="button" onClick={getImage}>
              Load Image
            </button>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
