import React from 'react';
import './sign-in-styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in eith username and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required>
                    </FormInput>
                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        onChange={this.handleChange}
                        value={this.state.password}
                        required>
                    </FormInput>
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;