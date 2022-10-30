import React from 'react'
import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

import "./App.css";


const App = () =>
{
    if (!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="ea9cf5e1-ab3d-46e0-92ef-50dda4d8a381"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;
