import './App.css';
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
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [loggedInUserID] = useLocalStorage("userID", null);
  const isLoggedIn = loggedInUserID !== null;
  console.log('userID from local storage', loggedInUserID);

  return (
    <div className="main">

      <Routes>
        <Route path="/dashboard" element={<PrivateRoute component={Dashboard} isAuthorized={isLoggedIn}/>}></Route>
        <Route path='/profile' element={<PrivateRoute component={Profile} isAuthorized={isLoggedIn}/>}></Route>
        <Route path='/chat' element={<PrivateRoute component={Chats} isAuthorized={isLoggedIn}/>}></Route>
        <Route path='/chat/:id' element={<PrivateRoute component={ChatScreen} isAuthorized={isLoggedIn}/>}></Route>
        <Route path='/likes' element={<PrivateRoute component={Likes} isAuthorized={isLoggedIn}/>}></Route>
        <Route path='/discovery' element={<PrivateRoute component={Discovery} isAuthorized={isLoggedIn}/>}></Route>
        <Route path='/' element={ <LoginReg /> }></Route>
      </Routes>

    </div>
  );
}

export default App;
