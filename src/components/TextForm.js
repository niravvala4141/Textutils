import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted in Uppercase","success");
    } 
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted in Lowercase","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
 const [text, setText] = useState("");
 
 
  return (
    <>
        <div className={`container text-${props.mode === 'light'? 'dark':'light'}`}>
            <h1>{props.heading}</h1>
            <div className="form-group mb-2">
                {/* First {} in style for JS and second {} for object below*/}
                <textarea className="form-control"  style={{backgroundColor : props.mode === 'dark'? '#282828' : 'white',color :props.mode === 'dark'? 'white': '#282828'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        </div>
        <div className={`container text-${props.mode === 'light'? 'dark':'light'}`}>
            <h2>Text Summary</h2>
            <p><b>{(text.length === 0) ? 0:text.split(' ').length}</b> Words and <b>{text.length}</b> Charactors</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </> 
  )
}
