import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChosenWorkerAdmin from "./ChosenWorkerAdmin";
import GuestChosenWorker from "./GuestChosenWorker";
import WorkerRegister from "./WorkerRegister";
import WorkerHistory from "./WorkerHistory";
import LogoutButton from "./LogoutButton";
import UpdateWorker from "./UpdateWorker";
import ChosenWorker from "./ChosenWorker";
import AddQuestion from "./AddQuestion";
import { UserContext } from "./UserContext";
import UpdateUser from "./UpdateUser";
import AddWorker from "./AddWorker";
import Services from './Services';
import Register from './Register';
import Pricing from './Pricing';
import Contact from './Contact';
import AddUser from "./AddUser";
import Profile from "./Profile";
import Footer from './Footer';
import Styles from './Styles';
import Review from './Review';
import Header from './Header';
import Guest from "./Guest";
import About from './About';
import Visit from './Visit';
import Login from './Login';
import Admin from './Admin';
import Main from './Main';
import Home from './Home';
import './App.css';

const App = () => {
    const [user, setUser] = useState(null);

    const handleLogin = (userData) => {
        setUser(userData);
    };

    const handleLogout = () => {
        setUser(null);
    };

    useEffect(() => {
        axios.get('http://localhost:3307/api/current-user')
            .then(response => setUser(response.data))
            .catch(error => console.error("Error fetching user information", error));
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/styles" element={<Styles />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/visit" element={<Visit />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/admin" element={<Admin />}></Route>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/logout" element={<LogoutButton />}></Route>
                    <Route path="/add-user" element={<AddUser />}></Route>
                    <Route path="/admin/update/:id" element={<UpdateUser />}></Route>
                    <Route path="/add-worker" element={<AddWorker />}></Route>
                    <Route path="/admin/update-worker/:id" element={<UpdateWorker />}></Route>
                    <Route path="/chosen-worker/:id" element={<ChosenWorker />}></Route>
                    <Route path="/admin/chosen-worker/:id" element={<ChosenWorkerAdmin />}></Route>
                    <Route path="/chosen-worker/:id/add-question/:id" element={<AddQuestion />}></Route>
                    <Route path="/worker-register/:id" element={<WorkerRegister />}></Route>
                    <Route path="/worker-history/:id" element={<WorkerHistory />}></Route>
                    <Route path="/guest" element={<Guest />}></Route>
                    <Route path="/chosen-worker-guest/:id" element={<GuestChosenWorker />}></Route>
                    <Route path="/footer" element={<Footer />} />
                    {user && user.role === 'admin' && <Route path="/admin" element={<Admin />} />}
                    {user && user.role !== 'admin' && <Route path="/profile" element={<Profile />} />}
                </Routes>
            </Router>
        </UserContext.Provider>
    );
}

export default App;