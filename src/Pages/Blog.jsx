import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Blog from '../Components/Blog/Blog';
import FAQSection from '../Components/Faq/Faq';
import Footer from '../Components/Footer.jsx/Footer';

function BlogPage() {
    return (
        <>
        <Navbar/>
       <Blog/>
       <FAQSection/>
       <Footer/>
        </>
    );
}

export default BlogPage;