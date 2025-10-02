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
import AdventuresPage from './pages/AdventuresPage';
import EventCalendar2025Page from './pages/EventCalendar2025Page';
import NZSIEventPage from './pages/NZSIEventPage';
import NZSIRegistrationForm from './components/nzsi/NZSIRegistrationForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adventures" element={<AdventuresPage />} />
          <Route path="/adventures/2025-event-calendar" element={<EventCalendar2025Page />} />
          <Route path="/adventures/nzsi-2025" element={<NZSIEventPage />} />
          <Route path="/adventures/nzsi-2025/registration" element={<NZSIRegistrationForm />} />
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