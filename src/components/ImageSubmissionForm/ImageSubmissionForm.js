import React from 'react';
import './ImageLinkForm.css';

const ImageSubmissionForm = ({onInputChange, onButtonSubmit}) => 
{
	return (
			<div>
				<p className='f3 white'>
					{'Enter the URL or upload an image to analyze.'}
				</p>
				<div className='center'>
					<div className='form center pa4 br3 shadow-5'>
						<input className='w-70 f4 pa2 center' placeholder='Image URL Here' type='text' onChange={onInputChange} />
						<button 
							className='w-30-ns grow f4 link ph3 pv2 dib white bg-navy' 
							onClick={onButtonSubmit}>
							Detect
						</button>
					</div>
				</div>
				
			{
				/* TODO */
			}
			</div>
		);
}

export default ImageSubmissionForm;