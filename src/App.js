import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Lynn from './Lynn';
import Saiyra from './Saiyra';
import Charlie from './Charlie';
import DarkModeButton from './DarkModeButton'; // Import the DarkModeButton component
// Import other components as needed

function App() {
    return (
        <Router>
            <div>
                {/* Navigation Bar */}
                <nav>
                    <div className="logo">Berkeley Bites</div>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Lynn">Lynn</Link></li>
                        <li><Link to="/Saiyra">Saiyra</Link></li>
                        <li><Link to="/Charlie">Charlie</Link></li>
                        {/* Add the DarkModeButton component to the navigation bar */}
                        {/* <li><DarkModeButton /></li> */}
                    </ul>
                </nav>         

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Lynn" element={<Lynn />} /> {/* Use the Menu component here */}
                    <Route path="/Saiyra" element={<Saiyra />} />
                    <Route path="/Charlie" element={<Charlie />} />
                    {/* <Route path="/DarkModeButton" element={<DarkModeButton />} /> */}
                    {/* Add more routes for other components */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
