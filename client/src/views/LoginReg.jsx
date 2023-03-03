import React from "react";
import Login from '../components/loginReg/Login'
import Register from '../components/loginReg/Register'

const LoginReg = (props) => {

    return (
        <div>
            <h1 className='main-logo'>GymMate</h1>
            <div className="log-reg">

                <Register/>
                <Login setLoggedInUser={props.setLoggedInUser} />

            </div>
        </div>
    );
};

export default LoginReg;