import { useState } from "react";
import "./App.css";

function App() {
  //We can create a variable that will hold the values of the style we want to apply to our HTML.
  const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black",
  };

  return (
    //Here we add the variable into our H1
    <div>
      <h1 style={customStyle}> This is a practice website</h1>
      <h1 style={{ color: "green", fontSize: "30px", border: "1px solid black" }}>el precio de la yuca
      </h1>
    </div>
  );
}

export default App;
