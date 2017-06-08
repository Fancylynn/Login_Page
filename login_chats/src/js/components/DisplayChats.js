import React from "react";
import Chat from "./Chat";

const DisplayChats = (props) => {

    const chatList = props.chats.map((chat) => (
                    <Chat
                        name = {chat.name}
                        key = {chat.id}
                    />));

    return (
        <div>
            {/*<h2>Hello, {props.name}</h2>*/}
            <ul>
                { chatList }
            </ul>
        </div>
    )
    
}

export default DisplayChats;