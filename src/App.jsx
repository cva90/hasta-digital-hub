import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Printing from "./pages/Printing";
import WebDevelopment from "./pages/WebDevelopment";
import DigitalServices from "./pages/DigitalServices";
import Meditation from "./pages/Meditation";
import GuidedMeditation from "./pages/GuidedMeditation";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/printing" element={<Printing />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/digital-services" element={<DigitalServices />} />
      <Route path="/meditation" element={<Meditation />} />
      <Route path="/guided-meditation" element={<GuidedMeditation />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route
  path="/terms-and-conditions"
  element={<TermsAndConditions />}
/>
<Route
  path="/refund-policy"
  element={<RefundPolicy />}
/>
    </Routes>
  );
}

export default App;