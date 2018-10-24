# ai-facial-recognition
This project is for me to attempt to use a ReactJS App with some machine learning thrown in in order to recognize faces.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Before you begin, you'll need...
* [NodeJS](https://nodejs.org)
* [NPM](https://www.npmjs.com)

# To Run Locally...
Run the following command from the root directory...

* `npm install`
  * This will set up dependencies for the project.
* Create .env.development file (if using npm start)
* Create .env.production file (if using npm build) 
  * Note: Each .env file will need the Environment Variable of your Clarify API Key from here [https://clarify.io](https://clarify.io)
  * Example: REACT_APP_CLARIFAI_KEY=zzzaaabbbcccdddeee888fff44422200
* `npm start`
  * This will run the server locally.
  * `npm run build`
  * This will optomize and build a production version.