import React from 'react';
import TopNav from '../nav/TopNav';

const Profile = () => {

    return(
        <div>
            
            <h1 className='logo-header'>GymMate</h1>

            {/* Header */}
            <TopNav backButton='/dashboard'/>

        </div>
    );
};

export default Profile;