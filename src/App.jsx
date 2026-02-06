import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Industries from './pages/Industries';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Security from './pages/Security';
import Contact from './pages/Contact';
import Healthcare from './pages/industries/Healthcare';
import Banking from './pages/industries/Banking';
import Retail from './pages/industries/Retail';
import CustomerService from './pages/industries/CustomerService';
import FAQ from './pages/FAQ';
import About from './pages/About';
import WhatsApp from './pages/solutions/WhatsApp';
import VoiceAI from './pages/solutions/VoiceAI';
import RPACore from './pages/solutions/RPACore';
import Omnichannel from './pages/solutions/Omnichannel';
import ScrollToTop from './components/ScrollToTop'; // Assuming ScrollToTop is in components

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/industries" element={<Layout><Industries /></Layout>} />
        <Route path="/industries/healthcare" element={<Layout><Healthcare /></Layout>} />
        <Route path="/industries/banking" element={<Layout><Banking /></Layout>} />
        <Route path="/industries/retail" element={<Layout><Retail /></Layout>} />
        <Route path="/industries/customer-service" element={<Layout><CustomerService /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/faq" element={<Layout><FAQ /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/solutions/whatsapp" element={<Layout><WhatsApp /></Layout>} />
        <Route path="/solutions/voice-ai" element={<Layout><VoiceAI /></Layout>} />
        <Route path="/solutions/rpa-orchestrator" element={<Layout><RPACore /></Layout>} />
        <Route path="/solutions/omnichannel" element={<Layout><Omnichannel /></Layout>} />
        <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
        <Route path="/terms" element={<Layout><Terms /></Layout>} />
        <Route path="/security" element={<Layout><Security /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
