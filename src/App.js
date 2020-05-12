import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import Particles from "react-particles-js";
import "./App.css";
const op = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 900,
      },
    },
  },
};
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Particles className='particles' params={op} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* { <Logo/>
        <FaceRecognition/>} */}
      </div>
    );
  }
}

export default App;
