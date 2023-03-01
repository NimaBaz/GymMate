import React from "react";
import { Link, useNavigate} from "react-router-dom";
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const TopNav = ({ backButton }) => {
    const navigate = useNavigate();

    return (
        <div className="header">

            {backButton ? 
            (
                <IconButton onClick={() => navigate('/dashboard')}>
                    <ArrowBackIosIcon fontSize="large" className='header-icon' />
                </IconButton>
            ) :
            (
                <IconButton>
                    <PersonIcon className='header-icon' fontSize='large' />
                </IconButton>
            )}

            
            <Link to={`/dashboard`}>
                <img 
                className='gym-logo'
                src="http://a1216.phobos.apple.com/us/r30/Purple4/v4/cd/36/a5/cd36a5ee-ff43-1321-6f0a-fd85d6a5160c/mzl.cdxrgikj.png" alt="GymMate Logo" />
            </Link>
            
            <Link to={`/chat`}>
                <IconButton>
                    <ForumIcon className='header-icon' fontSize='large' />
                </IconButton>
            </Link>

        </div>
    );
};

export default TopNav;