import React, { useState } from 'react';

export default function TextForm(props) {
  const Upfunction = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const toLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearText = () => {
    let newText = '';
    setText(newText);
  };

  const capitalizeFirstLetter = () => {
    let newText = text
      .split(' ')
      .map((word) => {
        if (word.length > 0) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          return '';
        }
      })
      .join(' ');
    setText(newText);
  };

  const reverseText = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
  };

  const countOccurrences = (searchTerm) => {
    const regex = new RegExp(searchTerm, 'g');
    const count = (text.match(regex) || []).length;
    console.log(`"${searchTerm}" appears ${count} times in the text.`);
  };

  const removeExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ');
    setText(newText);
  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('Enter Text here');

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div>
          <h1>{props.Heading} </h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
              value={text}
              onChange={handleonChange}
              id="MyText"
              rows="8"
            ></textarea>
          </div>
          <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'light'} my-2 mx-1`} onClick={Upfunction}>
            Upper Case
          </button>
          <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'light'} mx-1 my-1`} onClick={toLower}>
            Lower Case
          </button>
          <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'light'} mx-1 my-1`} onClick={capitalizeFirstLetter}>
            Capitalize First Letter
          </button>
          <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'light'} mx-1 my-1`} onClick={reverseText}>
            Reverse Text
          </button>
          <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'light'} mx-1 my-1`} onClick={() => countOccurrences('your_word_here')}>
            Count Occurrences
          </button>
          <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'light'} mx-1 my-1`} onClick={removeExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'light'} mx-1 my-1`} onClick={clearText}>
            Clear Text
          </button>
        </div>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Text Summary</h1>
        <p>{text.split(' ').filter((element) => element.length !== 0).length} words {text.length} characters</p>
        <h3>Preview</h3>
        <p>{0.008 * text.split(' ').length} minutes to read</p>
        <p>{text.length > 0 ? text : 'Enter your text'}</p>
      </div>
    </>
  );
}
