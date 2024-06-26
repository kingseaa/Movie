
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Login from '../component/Login';
import Registration from '../component/Registration';
import Signin from '../component/Signin';
import HomePage from '../pages/HomePage';
import Profile from '../component/Profile';
import OpenMovie from '../pages/OpenMovie';
function RouterLink() {
    return (
        <Router>
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/homepage/detail/:movieID" element={<OpenMovie />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/signin" element={<Signin />} />
                
            </Routes>
        </Router>
    )
}
export default RouterLink;