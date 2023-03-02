import React from "react";
import Chat from './Chat';
import TopNav from '../nav/TopNav';

const Chats = () => {

    return (
        <div className="chats">

            <h1 className='logo-header'>GymMate</h1>

            {/* Header */}
            <TopNav backButton='/dashboard'/>

            <div className="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className='logout-button' type="submit">Search</button>
            </div>

            <h3 className="new-match">New Matches</h3>
            {/* New Matches Cards */}

            <h3 className="messages">Messages</h3>
            {/* Chat Screen */}
            <Chat />

        </div>
    );
};

export default Chats;