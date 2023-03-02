import axios from 'axios';
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const Chat = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user`, {withCredentials: true})
        .then(response => {
            console.log("This is our GET request: ", response)
            setUser(response.data)
        })
        .catch((err) => {
            console.log("This is our catch error: ", err)
        })
        console.log("This is called Asynchronous code")
    }, [])

    return (
        <Link to={`/chat`}>
            <div className="chat">

                <Avatar className='chat-image' />

                <div className="chat-details">
                    {user && user.firstName}
                </div>
                <p className="chat-timestamp"></p>

            </div>
        </Link>
    );
};

export default Chat;