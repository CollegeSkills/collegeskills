import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./Pages/Contact";
import SoftSkills from "./Pages/SoftSkills";
import B2BOutsourcing from "./Pages/B2BOutsourcing";
import CorporateTraining from "./Pages/CorporateTraining";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Components/Blog/BlogCard";
import JoinNow from "./Pages/JoinNow";
import AdminLogin from "./Pages/AdminLogin";
import Dashboard from "./Pages/Dashboard/Dashboard";
import HelpUser from "./Pages/Dashboard/HelpUser";
import JoinFreeUser from "./Pages/Dashboard/JoinFreeUser";
import GetContact from "./Pages/Dashboard/GetContact";
import SkillForSchool from "./Pages/SkillsForSchool";
import BlogDetail from "./Pages/Blog";
import Gallery from "./Pages/Gallery";
import SkillCollege from "./Pages/SkillCollege";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import ProtectedRoute from "./Pages/Private";
import JoinNowUser from "./Pages/Dashboard/JoinNowUser";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/soft-skills" element={<SoftSkills />} />
        <Route path="/services/corporate-training" element={<CorporateTraining />} />
        <Route path="/services/b2b-outsourcing" element={<B2BOutsourcing />} />
        <Route path="/services/skill-for-colleges" element={<SkillCollege />} />
        <Route path="/services/skill-for-schools" element={<SkillForSchool />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog/:id" element={<BlogDetail/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-now" element={<JoinNow />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/need-help" element={<HelpUser />} />
        <Route path="/admin/join-free" element={<JoinFreeUser />} />
        <Route path="/admin/contact" element={<GetContact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/return-policy" element={<RefundPolicy/>} />
        <Route path="/terms-conditions" element={<TermsAndConditions/>} />

      </Routes> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/soft-skills" element={<SoftSkills />} />
          <Route
            path="/services/corporate-training"
            element={<CorporateTraining />}
          />
          <Route
            path="/services/b2b-outsourcing"
            element={<B2BOutsourcing />}
          />
          <Route
            path="/services/skill-for-colleges"
            element={<SkillCollege />}
          />
          <Route
            path="/services/skill-for-schools"
            element={<SkillForSchool />}
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join-now" element={<JoinNow />} />
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Protected admin routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/need-help"
            element={
              <ProtectedRoute>
                <HelpUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/join-free"
            element={
              <ProtectedRoute>
                <JoinFreeUser />
              </ProtectedRoute>
            }
          />
            <Route
            path="/admin/join-now"
            element={
              <ProtectedRoute>
                <JoinNowUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/contact"
            element={
              <ProtectedRoute>
                <GetContact />
              </ProtectedRoute>
            }
          />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/return-policy" element={<RefundPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
