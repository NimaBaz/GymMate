import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";

const Chat = () => {

    return (
        // <Link to={`/chat/${user._id}`}>
            <div className="chat">

                <Avatar className='chat-image' />

                <div className="chat-details">
                    
                </div>
                <p className="chat-timestamp"></p>

            </div>
        // </Link>
    );
};

export default Chat;