import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCollectionAndDocuments } from '../../firebase/firebase.utils';

import { startLoading, stopLoading } from '../../redux/loading/loading.actions';
import { setAlert } from '../../redux/alert/alert.actions'; 

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { ReactComponent as BlackLogo } from '../../assets/TFE_black_logo.svg'
import './update-form.styles.scss';

const mapDispatchToProps = dispatch => ({
	startLoading: message => dispatch(startLoading(message)),
	stopLoading: () => dispatch(stopLoading()),
	setAlert: message => dispatch(setAlert(message))
})

class UpdateForm extends Component {
	constructor() {
		super();
		this.state = {
			image: null,
			date: new Date(),
			title: '',
			type: '',
			details: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { startLoading, stopLoading, setAlert } = this.props;
		startLoading('Creating New Update...')
		const form = this.state;
		addCollectionAndDocuments('updates', form)
			.then(({ title }) => {
				console.log(title)
				setAlert(`Added: "${title}"`)
				stopLoading();
			})
			.catch(err => {
				console.log(err)
				setAlert('Unable to Update')
				stopLoading();
			})
	}

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value});
	}

	handleChangeFile = e => {
		const file = e.target.files[0];
		this.setState({ image: file })
	}

	render() {
		const { image, title, type, details } = this.state;
		return (
			<div className='update-form'>
				<BlackLogo />
				<form onSubmit={this.handleSubmit}>
					<div className='form'>
						<div className='panel'>
							<FormInput 
								name='type' 
								type='text' 
								value={type} 
								label='Update Type'
								handleChange={this.handleChange}
								required 
							/>
							<FormInput 
								name='title' 
								type='text' 
								value={title} 
								label='Title'
								handleChange={this.handleChange}
								required
							/>
							<FormInput 
								area
								name='details' 
								type='text' 
								value={details} 
								label='Details'
								handleChange={this.handleChange}
								required
							/>
						</div>
						<div className='panel'>
							<input 
								className='input-file'
								type='file' 
								accept='image/png, image/jpeg' 
								name='image'
								id='upload' 
								onChange={this.handleChangeFile} 
								required
							/>
							<label htmlFor='upload'>{image ? 'Change Image' : 'Choose Image'}</label>
							{
								image &&
								<div 
									className='image' 
									style={{backgroundImage: `url(${URL.createObjectURL(image)})`}} 
								/>
							}
						</div>
					</div>
					<div className='button'>
						<CustomButton type='submit' inverted>
							Submit
						</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default connect(null, mapDispatchToProps)(UpdateForm);