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
import SamplingInstructionsPage from './pages/SamplingInstructionsPage';
import SampleBloodPage from './pages/SampleBloodPage';
import SampleMucosaPage from './pages/SampleMucosaPage';
import SampleHairPage from './pages/SampleHairPage';
import SampleNailPage from './pages/SampleNailPage';
import SampleNavelPage from './pages/SampleNavelpage';
import SampleSpecialPage from './pages/SampleSpecialPage';
import Services from './pages/Services';
import CivilDNATest from './pages/CivilDNATest';
import AdministrativeDNATest from './pages/AdminstrativeDNATest';
import HomeDNATest from './pages/HomeDNATest';
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
                    <Route path="/mau" element={<SampleBloodPage />} />
                    <Route path="/huong-dan" element={<SamplingInstructionsPage />} />
                    <Route path="/niem-mac" element={<SampleMucosaPage />} />
                    <Route path="/toc" element={<SampleHairPage />} />
                    <Route path="/mong" element={<SampleNailPage />} />
                    <Route path="/ron" element={<SampleNavelPage />} />
                    <Route path="/dac-biet" element={<SampleSpecialPage />} />
                    <Route path="/dich-vu" element={<Services />} />
                    <Route path="/dan-su" element={<CivilDNATest />} />
                    <Route path="/hanh-chinh" element={<AdministrativeDNATest />} />
                    <Route path="/nha" element={<HomeDNATest />} />
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
