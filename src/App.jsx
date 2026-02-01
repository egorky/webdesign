import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Industries from './pages/Industries';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Security from './pages/Security';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
