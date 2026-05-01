import React from 'react'

function PropDrilling() {
  const value1 = 30;
  return (
    <>
    <div>PropDrilling</div>
    <GrandParent p1 = {value1} />
    </>
  )
}

function GrandParent(props){
  const value2 = props.p1;
     return(
        <>
       <h2>Grand Parent</h2>
         <Parent p2= {value2} />
        </>

     )
}


function Parent(props){
    const value3 = props.p2;
 
     return(
        <>
       <h2>Parent</h2>
         <Child p3={value3} />
        </>

     )
}

function Child(props){
   const value4 = props.p3;
     return(
        <>
       <h2>Child</h2>
        <div>{value4}</div>
        </>

     )
}

export default PropDrilling