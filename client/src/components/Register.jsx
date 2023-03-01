import axios from "axios"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [errors, setErrors] = useState([]);

    const changeHandler = (e) => {
        let {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/register`, user, {withCredentials:true})
            .then(res => {
                console.log(res.data);
                navigate("/dashboard")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key in errorResponse) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
            console.log("This is called Asynchronous code")
    }


    return (
        <div className='registration'>
            {errors.map((err, index) => <p key={index} className="tabs">{err}</p>)}
            <form onSubmit={submitHandler}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">First Name</label>
                    <input type="text" name="firstName" value={user.firstName} onChange={changeHandler} />
                </div>
                <div className="form-group row">
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={user.lastName} onChange={changeHandler} />
                </div>
                <div className="form-group row">
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={changeHandler} />
                </div>
                <div className="form-group row">
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={changeHandler} />
                </div>
                <div className="form-group row">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={changeHandler} />
                </div>
                <button className="btn btn-outline-dark"> Register </button>
            </form>
        </div>
    )
}

export default Register