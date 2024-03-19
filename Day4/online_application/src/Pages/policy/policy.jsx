import React from 'react';
import '../policy/policy.css';
import He from '../Navbar/Navbar';
import Footer from '../footer/footer';

const PrivacyPolicy = () => {
  return (
    <div>
      <He/>
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p>
          At S-CARE, we are committed to protecting the privacy and security of our users' personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our senior care services.
        </p>
        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, contact details, medical history, and preferences when you use our services or communicate with us.
        </p>
        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide and improve our services, personalize your experience, communicate with you, and comply with legal obligations.
        </p>
        <h2>3. Information Sharing and Disclosure</h2>
        <p>
          We may share your information with authorized caregivers and service providers to facilitate the provision of our services. We do not sell or rent your personal information to third parties.
        </p>
        <h2>4. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
        </p>
        <h2>5. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
        </p>
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at [contact email or phone number].
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
