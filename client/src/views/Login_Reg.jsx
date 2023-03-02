import React from "react";
import Login from '../components/loginReg/Login'
import Register from '../components/loginReg/Register'

const Login_Reg = () => {

    return (
        <div className="log-reg">

            <h1 className='main-logo'>GymMate</h1>

            <Register/>
            <Login/>

        </div>
    );
};

export default Login_Reg;