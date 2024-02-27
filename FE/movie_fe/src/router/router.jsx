
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Login from '../component/Login';
import Registration from '../component/Registration';
import Signin from '../component/Signin';
import HomePage from '../homepage/HomePage';
import Profile from '../component/profile';

function RouterLink() {
    return (
        <Router>
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/signin" element={<Signin />} />

            </Routes>
        </Router>
    )
}
export default RouterLink;