import React from "react";
import { IconButton } from '@material-ui/core';
import TuneIcon from '@material-ui/icons/Tune';
import ForumIcon from '@material-ui/icons/Forum';
import GradeIcon from '@material-ui/icons/Grade';
import PersonIcon from '@material-ui/icons/Person';
import { Link, useNavigate} from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const TopNav = ({ backButton }) => {
    const navigate = useNavigate();

    let image = require("./babafitt.jpg");

    return (
        <div className="header">

            {backButton ? 
            (
                <IconButton onClick={() => navigate('/dashboard')}>
                    <ArrowBackIosIcon fontSize="large" className='header-icon' />
                </IconButton>
            ) :
            (
                <Link to={`/profile`}>
                    <IconButton>
                        <PersonIcon className='header-icon' fontSize='large' />
                    </IconButton>
                </Link>
            )}

            <Link to={`/discovery`}>
                <IconButton>
                    <TuneIcon className='header-icon' fontSize='large' />
                </IconButton>
            </Link>

            <Link to={`/dashboard`}>
                <img 
                className='gym-logo'
                src={image} alt="GymMate Logo" />
            </Link>

            <Link to={`/likes`}>
                <IconButton>
                    <GradeIcon className='header-icon' fontSize='large' />
                </IconButton>
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