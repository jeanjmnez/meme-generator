import { useState } from "react";
import memesData from "../memesData.js";

const Meme = (props) => {
  const [imageUrl, setImageUrl] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    var randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setImageUrl(url);
    console.log(url);
  }
  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top Text" />
        <input type="text" className="form--input" placeholder="Bottom Text" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        <img src={imageUrl} alt="not found" />
      </div>
    </main>
  );
};

export default Meme;
