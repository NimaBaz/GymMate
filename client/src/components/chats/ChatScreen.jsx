import TopNav from '../nav/TopNav';
import React, { useState } from "react";
import { Avatar } from "@material-ui/core";

const ChatScreen = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const Submit = (e) => {
        e.preventDefault();
        setMessages([...messages, {message: input}])
        setInput("");
    }

    return (
        <div className="chatScreen">

            <h1 className='logo-header'>GymMate</h1>

            {/* Header */}
            <TopNav backButton='/chat'/>

            {/* Individual chat screen */}
            <p className='chatScreen-timestamp'></p>

            {/* msg.name ? (line 22 and 23 msg.message) : (make another div className='chatScreen-message' with a p tag className='chatScreen-textUser' for the msg.message)*/}

            {
                messages.map((msg, idx) =>
                    <div key={idx} className='chatScreen-message'>
                        <Avatar className='chatScreen-image'/>
                        <p className='chatScreen-text'></p>
                    </div>
                )
            }

            <div className='chatScreen-input'>
                <form>
                    <input type="text" placeholder='Type a message...' className='chatScreen-inputField' value={input} onChange={(e) => setInput(e.target.value)} />
                    <button onClick={Submit} type='submit' className='chatScreen-inputButton'>Send</button>
                </form>
            </div>

        </div>
    );
};

export default ChatScreen;