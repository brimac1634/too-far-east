import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
			externalLink: '',
			details: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { history, startLoading, stopLoading, setAlert } = this.props;
		startLoading()
		const form = this.state;
		addCollectionAndDocuments('updates', form)
			.then(({ title }) => {
				setAlert('Update Added')
				stopLoading();
				history.push('/')
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
		const { image, title, type, externalLink, details } = this.state;
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
								name='externalLink' 
								type='text' 
								value={externalLink} 
								label='External Link'
								handleChange={this.handleChange}
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
							<span>note: png/jpg - 4:3 is best</span>
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

export default withRouter(connect(null, mapDispatchToProps)(UpdateForm));