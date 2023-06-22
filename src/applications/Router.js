import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Starships from '../components/Starships/Starships';
import NavBar from '../components/Navbar/Navbar';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

const Router = () => (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route index element={<Home />} />
            <Route path="/Starships" element={<Starships />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
);

export default Router;