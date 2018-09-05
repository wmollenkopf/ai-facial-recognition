import React, { Component } from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageSubmissionForm from './components/ImageSubmissionForm/ImageSubmissionForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <FaceRecognition />
        <ImageSubmissionForm />
      </div>
    );
  }
}

export default App;
