import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
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



const CLARIFAI_KEY = process.env.REACT_APP_CLARIFAI_KEY;


const clarifaiApp = new Clarifai.App({
 apiKey: CLARIFAI_KEY
});

class App extends Component {
  constructor()  {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      filename: null,
      imageData: null,
      regions: null,
      numOfFaces: null
    }
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  displayFaceArea = (regions) => {
    console.log('regions are:',regions);
    this.setState({regions: regions});
    this.setState({numOfFaces: regions.length});
  }
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    console.log('click');
    clarifaiApp.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.displayFaceArea(response.outputs[0].data.regions))
      .catch(err => console.log(err));
      //const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
  }
  
  render() {
    return (
      <div className="App">
      
        <Particles className='particles'
                params={particlesOptions}
              />

        <ImageSubmissionForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} regions={this.state.regions} numOfFaces={this.state.numOfFaces} />
      </div>
    );
  }
}

export default App;
