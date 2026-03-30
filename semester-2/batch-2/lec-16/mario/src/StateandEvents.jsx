import React, { useState } from 'react'

const StateandEvents = () => {

    const [text, setText] = useState("")


    const handleChange = (event) => {
      
        setText(event.target.value)
    }

  return (
    <>
    <div>Enter text here</div>
    <textarea value={text} onChange={handleChange}></textarea>
    </>
  )
}

export default StateandEvents