import React from "react";

function Counter(props) {
// logic in plain js

  return <h1>{props.initialValue} </h1>;
}

// **for boilerplate code**
// in JSX -> rafce

function MultiCounter() {
  return (
    <div>
      <Counter initialValue={10} />
      <Counter initialValue={100} />
      <Counter initialValue={20} ></Counter>
      <Counter initialValue={-100} />
    </div>
  );
}

const Home = () => {
  //js logic
  return <div><MultiCounter/> </div>;
};

export default Home;
