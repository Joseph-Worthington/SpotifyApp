import React from 'react';
import { loginUrl } from '../common/AccountAccess';




const Login = () => {



    return (
        <section className='login'>
            <h1>Login</h1>
            <button><a href={loginUrl} id="loginInButton">Login with Spotify!</a></button>
        </section>
    );
};

export default Login;