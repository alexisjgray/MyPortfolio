import React from "react";

export const About = () => {
  return (
    <div className="resume">
      <h1>Alexis Gray</h1>
      <h2>Full-Stack Web Developer</h2>
      <a href="https://github.com/alexisjgray" target="_blank">
        My GitHub URL
      </a>
    </div>
  );
};

export const AboutMe = () => {
  return (
    <div className="home">
      <h1>
        Here is a little vital information about me for your everyday life :
      </h1>
      <div className="gif-container">
        <img
          src="https://media.giphy.com/media/xT1R9Abpio0fLpaT4c/giphy.gif"
          alt="lori-beth-denberg"
        />
        <h2>
          I started running 5k's, my goal is to build my way up to a half
          marathon
        </h2>
        <div className="marathon-pics">
          <img src="../cota_vera_5k.jpeg" alt="my-family-at-cota-vera" />
          <img src="../live_well_5k.jpeg" alt="my-family-at-live-well-5k" />
          <img src="..\susan_g_komen.jpeg" alt="my-family-at-susan-g-komen" />
        </div>
        <h2>My special skill is that I am a nap connoisseur</h2>
        <div>
          <img
            src="https://media.tenor.com/E1KZzu3AM68AAAAC/sailor-moon-sleep.gif"
            alt="usagi-wake-up"
          />
        </div>
      </div>
    </div>
  );
};

export const MyProjects = () => {
  return (
    <div className="home">
      <h1>Project Highlight's</h1>
    </div>
  );
};
