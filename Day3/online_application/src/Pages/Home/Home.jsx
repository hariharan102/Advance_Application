import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'; 
import About from '../About/About';
import Testimonial from '../Testimonial/Testimonial';
import tr from '../Assets/00.svg';
import '../Home/Home.css';
import He from '../Navbar/Navbar';
import Footer from '../footer/footer';

export default function Home() {
  const navigate = useNavigate(); 

  const handleExploreClick = () => {
    // You can modify this function as per your application's logic
    navigate('/job');
  };

  return (
    <>
    <He/>
    <div className="centered-text1">
      <div className="home-container">
        <div className="home-banner-container">
          <div className="home-text-section">
            <h1 className="primary-heading">
              Got a Grany? You got us!
            </h1>
            <p className="primary-text">
              Provide compassionate and professional care to seniors. Join us to make a difference in the lives of elderly individuals and their families. Discover the rewarding journey of providing senior care services and become a part of our dedicated community. Together, let's ensure a better quality of life for seniors in need. Join now and start your journey in senior care.
            </p>
            <button className="secondary-button" onClick={handleExploreClick}>
              Explore <FiArrowRight />{" "}
            </button>
          </div>
          <div className="home-image-section">
            <img src={tr} alt="" />
          </div>
        </div>
        <About />
      </div>
    </div>
    <Footer/>
    </>
  );
}
