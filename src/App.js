import React from "react";
import imageSrc from "./imageInSrc.jpg";
import "./style.css";

function App() {
  return (
    <>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={imageSrc} alt="imageInSrc" />
        <br />
        <img src="assets/imageInPublic.png" alt="imageInPublic" />
      </div>

      <iframe
        className="vid"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Y2NkuFIlLEo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </>
  );
}

export default App;
