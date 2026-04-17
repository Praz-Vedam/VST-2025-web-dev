import React, { createContext ,useContext } from "react";

//step 1 create context

const ContextWrapper = createContext();

function PropDrillingSol() {
  const value1 = 20;
  return (
    <>
      <ContextWrapper.Provider value={value1}> //setting up values in global store
        <div>PropDrilling</div>
        <GrandParent />
      </ContextWrapper.Provider>
    </>
  );
}

function GrandParent() {
 
  return (
    <>
      <h2>Grand Parent</h2>
      <Parent   />
    </>
  );
}

function Parent() {
     const value =  useContext(ContextWrapper);


  return (
    <>
      <h2>Parent</h2>
      <Child  />
      {value}
    </>
  );
}

function Child() {
    const value =  useContext(ContextWrapper);
   
  return (
    <>
      <h2>Child</h2>
      <div>{value}</div>
    </>
  );
}

export default PropDrillingSol;
