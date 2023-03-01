import React from "react";
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';

const TopNav = () => {

    

    return (
        <div className="nav-bar">

            <IconButton>
                <PersonIcon className='nav-icon' fontSize='large' />
            </IconButton>
            
            <img 
            className='gym-logo'
            src="http://a1216.phobos.apple.com/us/r30/Purple4/v4/cd/36/a5/cd36a5ee-ff43-1321-6f0a-fd85d6a5160c/mzl.cdxrgikj.png" alt="GymMate Logo" />
            
            <IconButton>
                <ForumIcon className='nav-icon' fontSize='large' />
            </IconButton>

        </div>
    );
};

export default TopNav;