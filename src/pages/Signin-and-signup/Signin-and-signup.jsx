import React from 'react';
import  './Signin-and-signup.style.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/Sign-Up/sign-up';

const SignInAndSignUp =()=>(
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp  className='SignUP'/>
    </div>

);

export default SignInAndSignUp;