import React from "react";
import "./signup.css"


const Signup = () => {
    return (
        <div className="App">
        <div className="cover">
            
            <h1 className="crud"><span className="yellow-line"></span>CRUD OPERATIONS</h1>
            <h3 className="signin">SIGN IN</h3>
            <p className="para">Enter your credentials to acces your account</p>
            <label>Email</label>
            <input className="in" type="text" placeholder="Enter your email" />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <button>SIGN IN</button>
        </div>
        </div>
    )
}

export default Signup;