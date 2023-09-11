import React from 'react';

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'black' : 'white',
  };

  return (
    <div className="container my-5" style={myStyle}>
      <h1 className="display-4">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What We Do
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                <strong>Text Editor</strong> is your go-to application for efficient text composition, editing, and formatting. Our user-friendly interface simplifies the process, making it an essential tool for students, professionals, and creative writers alike.
              </p>
              <p>
                Whether you're crafting documents or jotting down notes, Text Editor provides a clean canvas for your ideas. With features designed to streamline your text processing, it's a must-have utility for those seeking a straightforward yet powerful text editing solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
