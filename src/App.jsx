import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Industries from './pages/Industries';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Security from './pages/Security';
import Contact from './pages/Contact';
import Healthcare from './pages/industries/Healthcare';
import Banking from './pages/industries/Banking';
import Retail from './pages/industries/Retail';
import CustomerService from './pages/industries/CustomerService';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/banking" element={<Banking />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/customer-service" element={<CustomerService />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

