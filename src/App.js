import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import Userlist from './pages/userList/Userlist'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
    <Topbar/>
    <div className="container">
        <Sidebar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/users" element={<Userlist/>} />
          </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
