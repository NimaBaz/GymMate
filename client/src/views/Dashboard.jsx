import axios from 'axios';
import TopNav from '../components/nav/TopNav';
import TinderCard from "react-tinder-card"
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import SwipeButtons from '../components/buttons/SwipeButtons';

const Dashboard = (props) => {

    console.log("Dashboard Props", props);
    
    const {loggedInUser} = props
    const navigate = useNavigate();
    const [users, setUsers] = useState(null);
    const [cards, setCards] = useState([
        {
            firstName:""
        }
    ]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users`, { withCredentials: true })
            .then(response => {
                console.log("This is our GET request: ", response)
                setCards(response.data)
                setUsers(response.data)
                props.setLoggedInUser(response.data.user);
            })
            .catch((err) => {
                console.log("This is our catch error: ", err)
            })
            console.log("This is called Asynchronous code")
        
    }, [props])

    const logoutHandler = () => {
        axios.get(`http://localhost:8000/api/logout`)
            .then(res => navigate("/"))
            .catch()
    }

    return (
        <div className="main">

            <div className='logo-header'>
                <h1 className='dash-logo'>GymMate</h1>

                <button onClick={logoutHandler} className='logout-button'>Logout</button>
            </div>

            {/* Header */}
            <TopNav/>

            {/* Buddy Cards */}
            {/* Buttons below buddy cards */}
            <div className='buddy-card-container'>
                {

                    cards&&users&&users.filter(user => user._id !== loggedInUser._id).map((user, idx) => 
                        <TinderCard className='swipe' key={idx} preventSwipe={['up', 'down']} >
                            <div style={ {backgroundImage: `url(${user.url})`} } className='cards'>
                                <h3>{user.firstName}</h3>
                            </div>

                        </TinderCard>
                    )

                }
                <SwipeButtons/>
            </div>

        </div>
    );
};

export default Dashboard;