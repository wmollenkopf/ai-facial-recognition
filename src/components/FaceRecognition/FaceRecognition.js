import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, regions, numOfFaces}) =>
{
	const calcFaceLocation = (clarifaiFace) => {
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

	const createBoundingBox = (region) => {
		//return calcFaceLocation(region.region_info.bounding_box);
		let box = calcFaceLocation(region.region_info.bounding_box);
		return (<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>);
	}

	const createBoundingBoxes = (regions) => {
		//{console.log('regions 2:',regions)}
		if(regions != null && regions.length > 0){
			return regions.map(createBoundingBox);
		}
		else{
			return null;
		}
	}
	
	const resultsText = (numOfFaces) => {
		if(numOfFaces > 1) {
			return numOfFaces + ' faces were found.';
		}
		else if(numOfFaces == 1) {
			return '1 face was found.';
		}
		else {
			//return 'No faces were found.';
			return '';
		}
	}

	return (
			<div>
				<div className='center ma'>
					<p className='f2 white'>
	          			{resultsText(numOfFaces)}
	        		</p>
	        	</div>
				<div className='center ma'>

					<div className='absolute mt2'>
						<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />

						{/*console.log('regions 1:',regions)*/}
						{createBoundingBoxes(regions)}
					</div>
				</div>
			</div>
		);
}

export default FaceRecognition;