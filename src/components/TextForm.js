import React, {useState} from 'react'


export default function TextFrom(props) {
    const [text, setText] = useState('');
    const handleonchnage = (event)=>{
        setText(event.target.value)
    }
    const handleupclick = ()=>{
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted To uppercase!","Succes")
    }
    const handleupclick2 = ()=>{
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Converted To lowercase!","Succes")
    }
    return (
        <>
        
        <div className='"container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleonchnage} rows="5">{}</textarea>
            </div>
            <button className="btn btn-primary" onClick={handleupclick}>Convert To Uppercase</button>
            <button className="btn btn-primary pd-2" onClick={handleupclick2}>Convert To Lowercase</button>
        </div>
        <div className="container my-4">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split("").length} Minutes read</p>
                <h2>Preveiw</h2>
                <p>{text}</p>

        </div>
        </>
    )
}

