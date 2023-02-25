import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const [text, settext] = useState('')

    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        settext(newText)
        props.showAlert('Change to Uppercase', 'success')
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase()
        settext(newText)
        props.showAlert('Change to Lowercase', 'success')
    }
    const handleCopy = ()=>{
        // navigator.clipboard.writeText(document.querySelector('#myText').innerHTML)
        navigator.clipboard.writeText(text)
        props.showAlert('Copy to Clipboard', 'success')
    }
    const handleRemoveExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        settext(newText.join(' '))
        props.showAlert('Remove Extra Spaces', 'success')
    }
    const handleClearText = ()=>{
        let newText = ''
        settext(newText)
        props.showAlert('Clear Text!!', 'success')
    }
    const handleOnClick = (event)=>{
        settext(event.target.value)
    }
    

  return (
        <>
            {/* TextArea */}
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h4 className='my-3' style={{fontWeight: '700', letterSpacing: '3px'}}>{props.heading}</h4>
                <textarea style={{backgroundColor: props.mode==='dark'?'#2b2b2e':'#f1f0fa', color: props.mode==='dark'?'white':'black', letterSpacing:'2px'}} className="form-control" id="myText" rows="8" value={text} onChange={handleOnClick}></textarea>
            </div>
            {/* Buttons */}
            <div className="container">
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" style={{letterSpacing:'3px', fontSize: '14px', fontWeight: '600'}} onClick={handleUpClick} >Change to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" style={{letterSpacing:'3px', fontSize: '14px', fontWeight: '600'}} onClick={handleLowClick}>Change to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" style={{letterSpacing:'3px', fontSize: '14px', fontWeight: '600'}} onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" style={{letterSpacing:'3px', fontSize: '14px', fontWeight: '600'}} onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-danger my-2 mx-1" style={{letterSpacing:'3px', fontSize: '14px', fontWeight: '600'}} onClick={handleClearText}>Clear Text</button>
            </div>
            {/* Text Summery */}
            <div className="container" style={{color: props.mode==='dark'?'white':'black', letterSpacing: '3px'}}>
                <h4 className='my-3' style={{fontWeight:'700', letterSpacing: '4px'}}>Text Summery</h4>
                <p className='my-1' style={{fontSize: '15px'}}>| {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words.. | {text.length} characters.. |</p>
                <p style={{fontSize: '15px'}}>| {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length *0.008} minutes to read the entire text... |</p>
            </div>
            {/* Text Preview */}
            <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
                <h4 style={{color: props.mode === 'light'?'text-dark':'text-light', fontWeight: '700', letterSpacing:'4px'}}>Preview</h4>
                <p  style={{fontSize: '17px', letterSpacing:'3px', fontWeight: '600', color: props.mode==='dark'?'white':'#4a4a4a'}}>{text.length === 0?'Nothing to Preview!!':text}</p>
            </div>
        </>
  )
}

Textform.propTypes = {
    heading: PropTypes.string.isRequired
};
Textform.defaultProps = {
    heading: 'Set Haeding Here'
}; 