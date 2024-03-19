import React from 'react';
import '../terms/terms.css';
import He from '../Navbar/Navbar';
import Footer from '../footer/footer';

const TermsAndConditions = () => {
  return (
    <div>
      <He/>
      <div className="terms-container">
        <h1>Terms and Conditions</h1>
        <h2>1. Introduction</h2>
        <p>
          These Terms and Conditions govern your use of our senior care services. By accessing or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, then you may not access our services.
        </p>
        <h2>2. Services</h2>
        <p>
          Our senior care services include but are not limited to assistance with daily activities, companionship, medication management, and mobility assistance. We strive to provide compassionate and professional care to seniors in need.
        </p>
        <h2>3. User Responsibilities</h2>
        <p>
          Users of our services are responsible for providing accurate information about their needs and preferences. They must also treat our caregivers with respect and adhere to our policies and guidelines.
        </p>
        <h2>4. Fees and Payment</h2>
        <p>
          Fees for our services may vary based on the level of care required and the duration of service. Payment is due at the time of service unless otherwise arranged.
        </p>
        {/* Add more terms and conditions content as needed */}
      </div>
      <Footer/>
    </div>
  );
};

export default TermsAndConditions;
