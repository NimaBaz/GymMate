import React from 'react';
import TopNav from '../nav/TopNav';

const Discovery = () => {

    return(
        <div>

            <h1 className='logo-header'>GymMate</h1>

            {/* Header */}
            <TopNav backButton='/dashboard'/>

        </div>
    );
};

export default Discovery;