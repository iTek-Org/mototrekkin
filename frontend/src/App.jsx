import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HearingProtectionPage from './pages/HearingProtectionPage';
import TrainingPage from './pages/TrainingPage';
import OffRoadTrainingDetailPage from './pages/OffRoadTrainingDetailPage';
import RegistrationPage from './pages/RegistrationPage';
import MDPPhase2RegistrationPage from './pages/MDPPhase2RegistrationPage';
import MDPPhase3RegistrationPage from './pages/MDPPhase3RegistrationPage';
import MotorcycleHirePage from './pages/MotorcycleHirePage';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hearing-protection" element={<HearingProtectionPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/off-road-training-detail" element={<OffRoadTrainingDetailPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/registration-mdp-phase-2" element={<MDPPhase2RegistrationPage />} />
          <Route path="/registration-mdp-phase-3" element={<MDPPhase3RegistrationPage />} />
          <Route path="/hire" element={<MotorcycleHirePage />} />
          {/* Add more routes here as needed */}
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;