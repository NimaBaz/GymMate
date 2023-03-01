import './App.css';
import Login_Reg from './views/Login_Reg'
import Dashboard from './views/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">

      <Routes>
        <Route path='/' element={ <Login_Reg/> }></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/profile'></Route>
        <Route path='/chat'></Route>
        <Route path='/likes'></Route>
        <Route path='/discovery'></Route>
      </Routes>

    </div>
  );
}

export default App;
