import React from 'react';
import './sign-in.styles.scss';

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
						<input 
							type='email' 
							name='email' 
							value={this.state.email} 
							onChange={this.handleChange} 
							required />
						<label> email </label>
						<input 
							type='password' 
							name='password' 
							value={this.state.password} 
							onChange={this.handleChange} 
							required />
						<label> password </label>
						<input type='submit' value='Submit form'/>
					</form>
				</div>
			)
		}

}

export default SignIn;