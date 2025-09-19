import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HearingProtectionPage from './pages/HearingProtectionPage';
import TrainingPage from './pages/TrainingPage';
import OffRoadTrainingDetailPage from './pages/OffRoadTrainingDetailPage';
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
          {/* Add more routes here as needed */}
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;