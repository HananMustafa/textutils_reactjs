import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () =>{
      console.log('Lowercase was clicked');
      let newText = text.toLowerCase();
      setText(newText);
    }

    const handleOnChange= (event)=>{
        console.log('OnChange was called');
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className = "container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
    </div>

    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} reading minutes</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
    
  );
}
