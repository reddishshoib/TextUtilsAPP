import React, {useState} from 'react'

// eslint-disable-next-line react-hooks/rules-of-hooks

export default function TextForm(props) {
    const [text,setText] = useState('Enter text here ')

    const handleUpClick  = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted To UPPERCASE", "Success")
    }
    const handleLoClick  = () =>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted To lowercase", "Success")
    }
    const handleClClick  = () =>{
        let newText = ""
        setText(newText)
        props.showAlert("Cleared the text", "Success")
    }


    const handleChange = (e)=>{
        setText(e.target.value)
    }

    const handleCopy = () =>{
        let text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard", "Success")
    }
    return (
        <>
            <div className="container" style={ { backgroundColor: props.mode ==='light'? 'white':'grey',  color :props.mode ==='dark'? 'white':'black' }} >
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Comment text." style={ { backgroundColor: props.mode ==='light'? 'white':'grey' ,
                        color : props.mode ==='light'? 'grey':'white' } }
                              value= {text}  onChange={handleChange} id="myBox" rows="8">

                    </textarea>
                </div>

                <button className="btn btn-primary" onClick={handleUpClick}>Convert TO UPPER case</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert TO lower case</button>
                <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy To Clipboard</button>
            </div>
            <div className="container my-2"  style={ { backgroundColor: props.mode ==='light'? 'white':'grey' , color : props.mode ==='light'? 'black':'white' }} >
                <h1>Your Text Output</h1>
                <p>{text.length} characters {text.split(" ").length} words</p>
                <h2>Preview</h2>
                <p>{text.length>0? text:'Enter Some Text'   }</p>
            </div>
        </>
  
)
}
