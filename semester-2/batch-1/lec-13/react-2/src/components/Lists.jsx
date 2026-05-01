import React from "react";

const Lists = () => {
  const arr = ["apple", "mango", "orange", "watermelon"];

  return (
    <>
      <ul>
        {arr.map((item,index) => {
            //logic
            const handleClick = () => {
                alert(item+ " was clicked")
            }
          return (
            <li key={`${item} - ${index}`}>
              <span>{item}</span>
              <button onClick={handleClick}>Click</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Lists;
