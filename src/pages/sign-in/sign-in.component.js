import React from 'react';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { ReactComponent as BlackLogo } from '../../assets/TFE_black_logo.svg'
import './sign-in.styles.scss';

const SignIn = () => (
	<div className='sign-in'>
		<BlackLogo />
		<SignInForm />
	</div>
)

export default SignIn;