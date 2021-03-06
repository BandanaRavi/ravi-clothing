import './sign-in.styles.scss'
import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils.js';
 
class SighIn extends React.Component{
constructor(props){
    super(props);
    this.state = {
        email:'',
        password:''
    }
}
handleSubmit = event =>{
    event.preventDefault();
    this.setState({email:'',password:''})
}
handleChange = event =>{
    const {value, name} = event.target;
    this.setState({[name]:value});
}
render(){ 
    return(
        <div className='sign-in'>
        <h2>I already have a accont</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit} >
        <FormInput name='email' type='email' label='email'
        value={this.state.email} handleChange={this.handleChange} required/>
        <FormInput name='password' label='password' type='password' value={this.state.password} handleChange={this.handleChange} required/>
        <div className='buttons'>
        <CustomButton type ='submit' >Sign in</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >SIGN IN WITH GOOGLE</CustomButton>
        </div>
        </form>
        </div>
        )
}

}
export default SighIn;