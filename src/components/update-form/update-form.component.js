import React, { Component } from 'react';

import FormInput from '../../components/form-input/form-input.component';


class UpdateForm extends Component {
	constructor() {
		super();
		this.state = {
			image: null,
			date: '',
			title: '',
			type: '',
			details: ''
		}
	}

	formatDate = () => {
		const date = new Date();
		console.log(date)
	}

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value});
	}

	handleChangeFile = e => {
		let { images } = this.state;
		const files = e.target.files;
		this.setState({ image: file })
	}

	render() {
		return (
			<div className='update-form'>
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
				/>
				<FormInput 
					name='quantity' 
					type='number' 
					value={quantity} 
					label='Quantity in Stock'
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
				/>
				<input 
					className='input-file'
					type='file' 
					accept='image/png, image/jpeg' 
					name='image'
					id='upload' 
					onChange={this.handleChangeFile} 
				/>
				<label htmlFor='upload'>Choose Images</label>
			</div>
		)
	}
}

export default UpdateForm;