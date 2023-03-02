import './App.css';
import Chat from './components/chats/Chat'
import Chats from './components/chats/Chats'
import Likes from './components/nav/Likes'
import Profile from './components/nav/Profile'
import Discovery from './components/nav/Discovery'
import LoginReg from './views/LoginReg'
import Dashboard from './views/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="main">

      <Routes>
        <Route path='/' element={ <LoginReg /> }></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/chat' element={ <Chats />}></Route>
        <Route path='/chat/:id' element={ <Chat />}></Route>
        <Route path='/likes'element={<Likes />}></Route>
        <Route path='/discovery' element={<Discovery />}></Route>
      </Routes>

    </div>
  );
}

export default App;
