import React from "react";
import Chat from './Chat';
import TopNav from './TopNav';

const Chats = () => {

    return (
        <div className="chats">

            <h1 className='dash-logo'>GymMate</h1>

            {/* Header */}
            <TopNav backButton='/dashboard'/>

            {/* Chat Screen */}
            <Chat />

        </div>
    );
};

export default Chats;