import './App.css';
import { useState } from 'react';
import LoginReg from './views/LoginReg'
import Likes from './components/nav/Likes'
import Dashboard from './views/Dashboard';
import Chats from './components/chats/Chats'
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from './components/nav/Profile'
import { Routes, Route } from "react-router-dom";
import Discovery from './components/nav/Discovery'
import ChatScreen from './components/chats/ChatScreen'
import PrivateRoute from '../src/components/loginReg/PrivateRoute'


function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  console.log('loggedInUser state:', loggedInUser)

  return (
    <div className="main">

      <Routes>
        <Route path="/dashboard" element={<PrivateRoute component={Dashboard} loggedInUser={loggedInUser} isAuthorized={loggedInUser !== null}/>}></Route>
        <Route path='/profile' element={<PrivateRoute component={Profile} isAuthorized={loggedInUser !== null}/>}></Route>
        <Route path='/chat' element={<PrivateRoute component={Chats} isAuthorized={loggedInUser !== null}/>}></Route>
        <Route path='/chat/:id' element={<PrivateRoute component={ChatScreen} isAuthorized={loggedInUser !== null}/>}></Route>
        <Route path='/likes' element={<PrivateRoute component={Likes} isAuthorized={loggedInUser !== null}/>}></Route>
        <Route path='/discovery' element={<PrivateRoute component={Discovery} isAuthorized={loggedInUser !== null}/>}></Route>
        <Route path='/' element={ <LoginReg setLoggedInUser={setLoggedInUser} /> }></Route>
      </Routes>

    </div>
  );
}

export default App;
