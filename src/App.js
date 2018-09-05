import React, { Component } from 'react';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageSubmissionForm from './components/ImageSubmissionForm/ImageSubmissionForm';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 876
      }
    }
  }
}

class App extends Component {
  constructor()  {
    super();
    this.state = {
      imageUrl: ''
    }
  }
  render() {
    return (
      <div className="App">
        <Particles className='particles'
                params={particlesOptions}
              />
        <div>Hello World</div>
        <FaceRecognition />
        <ImageSubmissionForm imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
