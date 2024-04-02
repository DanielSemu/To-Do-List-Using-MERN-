import React from 'react';

import './login.css'
const Login = () => {
    return (
    <div className="center">
        <h1>Login</h1>
        <form action="">
            <div className="txt-field">
                <input type="text" required/>
                <span></span>
                <label for="">Username</label>
            </div>
            <div className="txt-field">
                <input type="password" required/>
                <span></span>
                <label for="">Password</label>
            </div>
            <div className="pass">Forgate Password?</div>
            <input type="submit" value="Login"/>
            <div className="sign_uplink">
                Not a member? <span className='signup-link'><a href="#">Signup</a></span>
            </div>
        </form>
    </div>
    );
}

export default Login;

