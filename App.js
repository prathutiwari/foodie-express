import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS) -- PARCEL  -  BABEL

// JSX => Babel transpiles it into React.createElement => ReactElement- JS Object => HTMLElement(render)

// React Component
const Title = () => {
  return (
  <h1 className="heading" tabIndex="4">
    Namaste React Using JSX
  </h1>
)};

const Button = () => {
     return (
          <button className="btn">Click Here</button>
     )
}


// Component Composition
const HeadingComponent = () => {
     return (
          <div className="container">
               <Title/>
               <h1 className="heading">Namaste React Functional Component</h1>;
               <Button/>
          </div>
     )
}

const HeadingComponent2 = () => <h1 className="heading">Namaste React Functional Component2</h1>;




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
