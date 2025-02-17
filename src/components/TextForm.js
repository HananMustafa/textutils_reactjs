import React, { useState } from "react";

export default function TextForm(props) {
  const handleReplaceTextClick = () => {
    console.log("Replace button clicked");

    if (!text || !targetWord) return;

    const regex = new RegExp(targetWord, "g");
    const updatedText = text.replace(regex, replaceWith);
    setText(updatedText);
    props.showAlert("Text has been Replaced ", "success");
  };

  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text hase been converted to Upper Case", "success");
  };

  const handleLowClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been coverted to Lower Case", "success");
  };

  const handleOnChange = (event) => {
    console.log("OnChange was called");
    setText(event.target.value);
  };

  const handleOnChangeTarget = (event) => {
    console.log("OnChangeTarget was called");
    setTargetWord(event.target.value);
  };

  const handleOnChangeReplace = (event) => {
    console.log("OnChangeReplace was called");
    setReplaceWith(event.target.value);
  };

  const [text, setText] = useState("");
  const [targetWord, setTargetWord] = useState("");
  const [replaceWith, setReplaceWith] = useState("");
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>

          <h1>Target word</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={targetWord}
              onChange={handleOnChangeTarget}
              id="targetBox"
              rows="1"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>

          <h1>Replace with</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={replaceWith}
              onChange={handleOnChangeReplace}
              Replace
              id="replaceBox"
              rows="1"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>

          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={handleReplaceTextClick}
          >
            Replace Text
          </button>
        </div>

        <div className="container my-2">
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").filter(word => word.trim() !== "").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} reading minutes</p>
          <h3>Preview</h3>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the textbox above to preview it here"}
          </p>
        </div>
      </div>
    </>
  );
}
