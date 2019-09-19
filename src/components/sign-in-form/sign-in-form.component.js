import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import Loader from '../loader/loader.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { selectIsUserFetching } from '../../redux/user/user.selectors';
import { emailSignInStart } from '../../redux/user/user.actions';

import './sign-in-form.styles.scss';

const mapStateToProps = createStructuredSelector({
	isLoadingUser: selectIsUserFetching
})

const mapDispatchToProps = dispatch => ({
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
})

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { emailSignInStart } = this.props;
		const { email, password } = this.state;
		emailSignInStart(email, password);
	}

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value});
	}

	render() {
		const { isLoadingUser } = this.props;
		return (
			<div className='sign-in-form'>
				<h2>Admin Portal</h2>
				<form onSubmit={this.handleSubmit}>
					<FormInput 
						name='email' 
						type='email' 
						value={this.state.email} 
						label='email'
						handleChange={this.handleChange}
						required 
					/>
					<FormInput 
						name='password' 
						type='password' 
						value={this.state.password} 
						label='password'
						handleChange={this.handleChange}
						required 
					/>
					<div className='buttons'>
						<CustomButton inverted type='submit'> Sign In </CustomButton>
					</div>
				</form>
				{
					isLoadingUser &&
					<Loader fixed />
				}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);