import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props);

			this.state = {
					email: '',
					password: ''
			}
		}

		handleSubmit = async (event) =>{
			event.preventDefault();

			const { email, password } = this.state

			try {
				await auth.signInWithEmailAndPassword(email, password);
				this.setState({ email: '', password: ''});
			} catch (error) {
				console.log(error)
			}
		}

		handleChange = (event) =>{
			const { name, value } = event.target;
			this.setState({ [name]: value });
		}
		
		render () {
			return (
				<div className='sign-in'>
					<h1>I have an account</h1>
					<form onSubmit={this.handleSubmit}>
						<FormInput 
							type='email' 
							name='email' 
							value={this.state.email} 
							handleChange={this.handleChange}
							label='email'
							required />
						<FormInput 
							type='password' 
							name='password' 
							value={this.state.password} 
							handleChange={this.handleChange} 
							label='password'
							required />
						<div className='buttons'>
							<CustomButton type='submit'>Sign in</CustomButton>
							<CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
								Sign in with google
							</CustomButton>
						</div>
					</form>
				</div>
			)
		}

}

export default SignIn;