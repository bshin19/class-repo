import React from "react";

const name = "Brady";
const letters = name.length;
const cool = "is cool";

const disemvowel = letters => {
    if (typeof letters === "number") {
      return String(letters);
    }
    return letters.replace(/[aeiou]/gi, "");
  };

  const JSXVariables = () => (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {letters} letters</h2>
          <h2>I think React {cool}.</h2>
          <p>My name without vowels is {disemvowel(name)}</p>
        </div>
      </div>
    </div>
  );

  export default JSXVariables;
