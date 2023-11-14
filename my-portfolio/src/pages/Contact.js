import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h1>Here's my contact info!</h1>
      <br></br>
      <h2>Phone: (858)833-6160</h2>
      <h2>Email: alexisjgray@yahoo.com</h2>
      <h3>I'll even take a letter from a carrier pigeon</h3>
      <div className="birds">
        <div className="bird-container bird-container-one">
          <div className="bird bird-one"></div>
        </div>
        <div className="bird-container bird-container-two">
          <div className="bird bird-two"></div>
        </div>
        <div className="bird-container bird-container-three">
          <div className="bird bird-three"></div>
        </div>
        <div className="bird-container bird-container-four">
          <div className="bird bird-four"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
