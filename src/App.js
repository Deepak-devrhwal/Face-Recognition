import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Logo />
        {/* { <Logo/>
      <ImageLinkForm/>
      <FaceRecognition/>} */}
      </div>
    );
  }
}

export default App;
