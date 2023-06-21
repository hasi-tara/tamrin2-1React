import React, { useState } from "react";
import Input from "./Input";
import Caption from "./Caption";
import "./App.css";

function App() {
  const [text, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="card">
      <Input onChnge={inputHandler} />
      <Caption text={'Character count:'} str={text} />
    </div>
  );
}

export default App;
