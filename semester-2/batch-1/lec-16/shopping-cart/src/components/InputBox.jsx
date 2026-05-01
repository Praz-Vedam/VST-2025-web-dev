import React from "react";
import { useState } from "react";

const InputBox = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value)
    setInputText(e.target.value);
  };
  const handleClick = () => {
    alert(inputText);
    // setInputText("");
  };

  return (
    <>
      <h2>Input Box</h2>

      {/* <input type='text' placeholder='type' value={inputText} onChange={handleChange}></input> */}
      <input
        type="text"
        placeholder="type"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></input>

      <button onClick={handleClick}>click</button>
    </>
  );
};

export default InputBox;
