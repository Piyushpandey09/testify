import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleSentenceCase = () => {
        let newText = text.toLowerCase();
        newText = newText.replace(/(^\w|\.\s*\w)/gm, (c) => c.toUpperCase());
        setText(newText);
        props.showAlert("Converted to sentence case!", "success");
    }

    const handleShuffleWords = () => {
        let words = text.split(/\s+/);
        words = words.sort(() => Math.random() - 0.5);
        setText(words.join(' '));
        props.showAlert("Words shuffled!", "success");
    }

    const handleReverseText = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Text Reversed!", "success");
    }

    const handleTitleCase = () => {
        let newText = text.toLowerCase().split(' ');
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        setText(newText.join(' '));
        props.showAlert("Converted to Title Case!", "success");
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSentenceCase}>Sentence Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleShuffleWords}>Shuffle Words</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleReverseText}>Reverse Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleTitleCase}>Title Case</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    );
}
