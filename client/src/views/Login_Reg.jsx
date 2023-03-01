import React from "react";
import Login from '../components/Login'
import Register from '../components/Register'

const Login_Reg = () => {

    return (
        <div className="main">

            <h1 className='main-logo'>GymMate</h1>

            <Register/>
            <Login/>

        </div>
    );
};

export default Login_Reg;