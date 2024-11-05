import React, { useState } from 'react'

function TextForm(props) {

    const [text, setText] = useState("");
    const [textStyle, setStyle] = useState("");
    const [textWeight, setWeight] = useState("");

    const handleUpClick = () =>{
        console.log("UpperCase was clicked!"+text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick =() =>{
        console.log("LowerCase was clicked!");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        console.log("Clear text was clicked!");
        setText('');
    }

    const handleBoldClick = () =>{
       setWeight("bold");
       setStyle("");
        
    }

    const handleItalicClick = () =>{
        setStyle("italic");
        setWeight("");
    }

    const handleOnChange = (event) =>{
        console.log("TextArea On change!");
        setText(event.target.value);
    }

    const handleCopyTextClick = () => {

    }
    const handleRemoveExtraSpacesClick = () =>{

    }

 
  return (
    <>
    <div className='container' style ={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3"> 
    <textarea className="form-control" id="textBox" rows="8" value={text} onChange={handleOnChange} style={{
        backgroundColor : props.mode==='light'?'white':'black',
        fontWeight : textWeight,
        fontStyle : textStyle,
        color: props.mode==='dark'?'white':'black'
    }}></textarea>
    </div>
    <button type="button" disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
    <button type="button" disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
    <button type="button" disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    <button type="button" disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleBoldClick}>Convert to bold </button>
    <button type="button" disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleItalicClick}>Convert to Italic </button>
    <button type="button" disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyTextClick}>Copy Text </button>
    <button type="button" disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpacesClick}>Remove Extra Spaces </button>
    </div>
    <div className="container my-2" style ={{color: props.mode==='dark'?'white':'black'}}>
        <h2> Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words, {text.length} character</p>
        <p> {0.008 *  text.split(" ").length} Minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the box above to preview here!"}</p>
    </div>
</>
  )
}

export default TextForm