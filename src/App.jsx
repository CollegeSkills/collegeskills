import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from './Pages/Contact';
import SoftSkills from './Pages/SoftSkills';
import B2BOutsourcing from './Pages/B2BOutsourcing';
import CourseForColleges from './Pages/CourseForColleges';
import Testimonial from './Pages/Testimonial';
import CorporateTraining from './Pages/CorporateTraining'
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Components/Blog/BlogCard';
// import Blog from './Pages/Blog';
import JoinNow from './Pages/JoinNow';
import AdminLogin from './Pages/AdminLogin';
import Dashboard from './Pages/Dashboard/Dashboard';
import HelpUser from './Pages/Dashboard/HelpUser';
import JoinFreeUser from './Pages/Dashboard/JoinFreeUser';
import GetContact from './Pages/Dashboard/GetContact';
import SkillForSchool from './Pages/SkillsForSchool';
import BlogDetail from './Pages/Blog';

function App() {
  return (
  <>
       <ToastContainer />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/soft-skills" element={<SoftSkills />} />
        <Route path="/services/corporate-training" element={<CorporateTraining />} />
        <Route path="/services/b2b-outsourcing" element={<B2BOutsourcing />} />
        <Route path="/services/skill-for-colleges" element={<CourseForColleges />} />
        {/* <Route path="/services/for-corporate" element={<CourseForCorprates />} /> */}
        <Route path="/services/skill-for-schools" element={<SkillForSchool />} />
        <Route path="/testimonial" element={<Testimonial />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* {blogsData.map(blog => (
          <Route
            key={blog.id}
            path={`/blog/${blog.id}`}
            element={<Blog blog={blog} />}
          />
        ))} */}
        <Route path="/blog/:id" element={<BlogDetail/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-now" element={<JoinNow />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/need-help" element={<HelpUser />} />
        <Route path="/admin/join-free" element={<JoinFreeUser />} />
        <Route path="/admin/contact" element={<GetContact />} />

      </Routes>
    </Router>
  </>
  );
}
export default App;