import { useState,useRef,useEffect } from 'react'
import {ChatInput} from './components/Chatinput'
import RobbotProfileImage from './assets/robot.png';
import UserProfileImage from './assets/user.png';
import './App.css'

 

      function ChatMessage({ message, sender }) {
        return (
          <div className={
            sender === 'user'? 'chat-message-user'
            :'chat-message-robot'
           }>
            {sender === 'robot' && <img src={RobbotProfileImage}
              className="chat-message-profile"
            />}
            <div className ="chat-message-text">
               {message}
            </div>
           
            {sender === 'user' && <img src={UserProfileImage}
             className="chat-message-profile"
            />}
          </div>
        );
      }

      function ChatMessages({ chatMessages }) {
        const chatMessagesRef =useRef(null);
        useEffect(() =>{
          const containerElem = chatMessagesRef.current;
          if(containerElem){
            containerElem.scrollTop =containerElem.scrollHeight;

          }
           },[chatMessages]);
        return (
          <div 
           className="chat-message-container"
           ref={chatMessagesRef}
          >
            {chatMessages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg.message}
                sender={msg.sender}
              />
            ))}
          </div>
        );
      }


function App() {
        const [chatMessages, setChatMessages] = useState([
          { message: 'Hello ChatBot', sender: 'user', id: 1 },
          { message: 'Hello! How can I help you?', sender: 'robot', id: 2 }
        ]);

        return (
          <div className="app-container">
           
            <ChatMessages chatMessages={chatMessages} />
             <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
