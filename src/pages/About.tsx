import React from 'react'
import logo from "../image/logo.jpg"
const About: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1 className="display-3 text-center mb-4">About</h1>
      
      <p className="lead text-center">
        The Student Services Portal is designed to help students access important university services quickly and efficiently.
      </p>

      <div className="mt-4">
        <h3>Our Objectives</h3>
        <ul>
          <li>Provide easy access to academic and administrative services</li>
          <li>Support students with enrollment and records management</li>
          <li>Offer guidance on scholarships and financial aid</li>
          <li>Improve communication between students and the IT department</li>
        </ul>
      </div>

      <div className="text-center mt-4">
        <img 
          src={logo} className="rounded" alt="Students Portal Illustration" style={{ width: '200px' }}  
        />
      </div>

      <p className="text-center mt-4">
        Our goal is to make student life easier and more organized. Explore the portal to see all the services available to you!
      </p>
    </div>
  );
};

export default About