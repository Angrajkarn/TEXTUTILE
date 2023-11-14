import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("uppercse was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);

    }
    const handleOnChange= (event)=>{
        //console.log("on change");
        setText(event.target.value)
    }
    const handleOnLower=()=>{
        console.log("convert to lower case");
        let newLower= text.toLowerCase();
        setText(newLower);
    }
    const[text,setText]= useState("write the text here")
  return (
    <>
    <div>
        <h1>{props.Heading}</h1>
      
  <div className="container my-2">
    <textarea className="form-control" onChange={handleOnChange} id="mybox" rows="10"value={text}></textarea>
  </div>
  <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to upperCase</button>
  <button className='btn btn-primary' onClick={handleOnLower}>conver to lowerCase</button>
    </div>
    <div className='cobtainer'>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p> You can read in {0.08*text.split(" ").length} Minutes.</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
