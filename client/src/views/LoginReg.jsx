import React from "react";
import Login from '../components/loginReg/Login'
import Register from '../components/loginReg/Register'

const LoginReg = () => {

    return (
        <div className="log-reg">

            <h1 className='main-logo'>GymMate</h1>

            <Register/>
            <Login/>

        </div>
    );
};

export default LoginReg;