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
      boundingBoxes: {},
    }
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  displayFaceArea = (boundingBoxes) => {
    console.log('boundingBoxes are:',boundingBoxes);
    this.setState({boundingBoxes: boundingBoxes});
  }
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    console.log('click');
    clarifaiApp.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.displayFaceArea(this.createBoundingBoxes(response.outputs[0].data.regions)))
      .catch(err => console.log(err));
      //const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
  }
  calcFaceLocation = (clarifaiFace) => {
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log('output',clarifaiFace);
    return {
      leftCol: clarifaiFace.left_col * width, // width of boxed area
      topRow: clarifaiFace.top_row * height, // height of boxed area
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  
  createBoundingBox = (region) => {
    let box = this.calcFaceLocation(data.region_info.bounding_box);
    return (<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>);
  }
  createBoundingBoxes = (regions) => {
    return boxes.map(this.createBoundingBox);
  }
  render() {
    return (
      <div className="App">
      <p className='f2'>
          {/*console.log(CLARIFAI_KEY)*/}
        </p>
        <Particles className='particles'
                params={particlesOptions}
              />
        <ImageSubmissionForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} boundingBoxes={this.state.boundingBoxes}/>
      </div>
    );
  }
}

export default App;
