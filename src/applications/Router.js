import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Starships from '../components/Starships/Starships';
import NavBar from '../components/Navbar/Navbar';

const Router = () => (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route index element={<Home />} />
            <Route path="/Starships" element={<Starships />} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
);

export default Router;