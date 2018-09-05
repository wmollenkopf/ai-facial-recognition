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
  render() {
    return (
      <div className="App">
        <Particles className='particles'
                params={particlesOptions}
              />
        <div>Hello World</div>
        <FaceRecognition />
        <ImageSubmissionForm />
      </div>
    );
  }
}

export default App;
