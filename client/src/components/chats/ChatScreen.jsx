import io from 'socket.io-client';
import TopNav from '../nav/TopNav';
import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from 'react';

const ChatScreen = () => {

    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])

    const [socket] = useState(() => io(":8000"));

    useEffect(() => {
        console.log("Is this running?");
        socket.on("post chat", (msg) => {setMessages(prevMsgState => [...prevMsgState, msg])});
        return () => socket.removeAllListeners();
    }, [socket]);

    const Submit = (e) => {
        e.preventDefault();
        socket.emit([...messages, { content: input }])
        setInput("")
    }

    return (
        <div className="chatScreen">

            <h1 className='logo-header'>GymMate</h1>

            {/* Header */}
            <TopNav backButton='/chat'/>

            {/* Individual chat screen */}
            {
                messages.map((msg, idx) =>

                    msg.content ? (
                    <div key={idx} className='chatScreen-message'>
                        <Avatar className='chatScreen-image'/>
                        <p className='chatScreen-text'>{msg.content}</p>
                    </div>
                    ) :

                    (
                    <div className='chatScreen-message'>
                        <p className='chatScreen-textUser'>{msg.content}</p>
                    </div>
                    )
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