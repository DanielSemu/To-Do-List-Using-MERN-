import React from 'react';
import '../login/login.css';

const Signup = () => {
    return (
        <div>
            <div className="center">
        <h1>Sign Up</h1>
        <form action="">
            <div className="txt-field">
                <input type="text" required/>
                <span></span>
                <label for="">Full Name</label>
            </div>
            <div className="txt-field">
                <input type="text" required/>
                <span></span>
                <label for="">Email Address</label>
            </div>
            <div className="txt-field">
                <input type="password" required/>
                <span></span>
                <label for="">Password</label>
            </div>
            <div className="txt-field">
                <input type="password" required/>
                <span></span>
                <label for="">Confirm Password</label>
            </div>
            <input className='signup' type="submit" value="Signup"/>
            
        </form>
    </div>
        </div>
    );
}

export default Signup;
