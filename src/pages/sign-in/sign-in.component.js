import React from 'react';
import { Link } from 'react-router-dom';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { ReactComponent as BlackLogo } from '../../assets/TFE_black_logo.svg'
import './sign-in.styles.scss';

const SignIn = () => (
	<div className='sign-in'>
		<Link className='logo' to={'/'}>
			<BlackLogo />
		</Link>
		<SignInForm />
	</div>
)

export default SignIn;