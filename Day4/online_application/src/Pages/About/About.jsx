import React from "react";
import "../About/About.css";
import res from "../Assets/9.svg";
import { useNavigate } from 'react-router-dom'; 
import Footer from "../footer/footer";

const About = () => {
  const navigate = useNavigate(); 
  
  const handleDesignNowClick = () => {
    // You can modify this function as per your application's logic
    navigate('/ResumeMaker');
  };

  return (
    <>
    <div className="about-section-container">
      <div className="about-section-text-container">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">Your Oldman,Our homie</h1>
        <p className="primary-text">
          Elevate your senior care career with our dedicated platform. We offer a wide range of resources and support to help you provide compassionate and professional care to seniors. Join our community and make a difference in the lives of elderly individuals and their families.
        </p>
        <p className="primary-text">Join us in providing the best senior care services today!</p>
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={handleDesignNowClick}>
            Explore Now
          </button>
        </div>
      </div>
      <div className="home-image-section">
        <img src={res} alt="" />
      </div>
    </div>
   
    </>
  );
};

export default About;
