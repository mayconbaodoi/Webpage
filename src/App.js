﻿import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp'; 
import SignIn from './pages/SignIn';
import MedicalFacility from './pages/MedicalFacility';
import HomeSampling from './pages/HomeSampling';
import SendSampling from './pages/SendSampling';
import About from './pages/AboutPage';
import GuidePage from './pages/GuidePage';
import PricePage from './pages/PricePage';
/*Phan duoi la de test page*/ 
import UserManagement from './pages/UserManag';
import ManagerPanel from './pages/ManagerPanel';
import Staff from './pages/Staff';
/*end */
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/medical-facility" element={<MedicalFacility />} />
                    <Route path="/home-sampling" element={<HomeSampling />} />
                    <Route path="/send-sampling" element={<SendSampling />} />
                    <Route path="/about" element={<About /> } />
                    <Route path="/guide" element={<GuidePage />} />
                    <Route path="/price" element={<PricePage />} />
                    {/* phan duoi la de test page */}
                    <Route path="/user-management" element={<UserManagement />} />
                    <Route path="/manager-panel" element={<ManagerPanel />} />
                    <Route path="/staff" element={<Staff /> } />
                </Routes>
                <Footer />
            </Router>
        </GoogleOAuthProvider>
    );
}

export default App;
