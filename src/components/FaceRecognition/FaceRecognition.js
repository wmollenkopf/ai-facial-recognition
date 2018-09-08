import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, boundingBoxes}) =>
{
	return (
			<div className='center ma'>
				<div className='absolute mt2'>
					<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
					{console.log('boxesare',boundingBoxes)}
				</div>
			</div>
		);
}

export default FaceRecognition;