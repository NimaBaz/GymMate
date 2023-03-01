import axios from 'axios';
import TopNav from '../components/TopNav';
import TinderCard from "react-tinder-card"
import React, { useEffect, useState } from "react";

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
                        <TinderCard className='swipe' key={idx} preventSwipe={['up', 'down']}>
                            <div style={ {backgroundImage: `url(${person.url})`} } className='cards'>
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    )
                }
            </div>


            {/* Chat Screen */}
            {/* Individual chat screen */}

        </div>
    );
};

export default Dashboard;