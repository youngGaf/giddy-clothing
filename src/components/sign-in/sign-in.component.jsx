import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
    constructor(props){
        super(props);

			this.state = {
					email: '',
					password: ''
			}
		}

		handleSubmit = (event) =>{
			event.preventDefault();
			this.setState({ email: '', password: ''});
		}

		handleChange = (event) =>{
			const { name, value } = event.target;
			console.log(name);
			this.setState({ [name]: value });
		}
		
		render () {
			return (
				<div className='sign-in'>
					<h1>I have an account</h1>
					<span> Account started </span>

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
						<input type='submit' value='Submit form'/>
					</form>
				</div>
			)
		}

}

export default SignIn;