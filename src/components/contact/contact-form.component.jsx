import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'; 

import './contact-form.styles.scss';


class Contact extends React.Component{
    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            message: ''
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();

        const { message, email, displayName } = this.state;

        if(message === null || email === null || displayName === null ){
            alert('Inputs can not be empty');
            return;
        }

        try {

            this.setState({
                displayName: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = (event) => {
            const { name, value } = event.target;
            this.setState({[name]: value});
    }

    render(){
        const { displayName, email, message } = this.state
        return(
            <div className='contact-us'>
                <h2 className='title'> Have a question ?? </h2>
                <span> Kindly reach out to us </span>

                <form className='contact-us-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Full Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='text'
                        name='message'
                        value={message}
                        onChange={this.handleChange}
                        label='Message'
                        required
                    />

                    <CustomButton type='submit'> CONTACT US </CustomButton>
                </form>
            </div>
        )
    }
}

export default Contact;