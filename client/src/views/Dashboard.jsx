import axios from 'axios';
import TopNav from '../components/TopNav';
import TinderCard from "react-tinder-card"
import React, { useEffect, useState } from "react";
import SwipeButtons from '../components/SwipeButtons';

const Dashboard = () => {

    const [cards, setCards] = useState([
        {
            name: 'Nima',
            url: 'http://cdn.shopify.com/s/files/1/1633/7705/articles/arnold_split_600x.jpg?v=1636274756'
        },
        {
            name: 'Ruben',
            url: ''
        },
        {
            name: 'Colby',
            url: ''
        },
        {
            name: 'Miguel',
            url: ''
        }

    ]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/allUsers`)
            .then(response => {
                console.log("This is our GET request: ", response)
                setCards(response.data.results)
            })
            .catch((err) => {
                console.log("This is our catch error: ", err)
            })
            console.log("This is called Asynchronous code")
        
    }, [])

    return (
        <div className="main">

            <h1 className='dash-logo'>GymMate</h1>

            {/* Header */}
            <TopNav/>

            {/* Buddy Cards */}
            {/* Buttons below buddy cards */}
            <div className='buddy-card-container'>
                {
                    cards.map((person, idx) => 
                        <TinderCard className='swipe' key={idx} preventSwipe={['up', 'down']} >

                            <div style={ {backgroundImage: `url(${person.url})`} } className='cards'>
                                <h3>{person.name}</h3>
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