import React from 'react';
import '../faq/faq.css';
import He from '../Navbar/Navbar';
import Footer from '../footer/footer';

const FAQPage = () => {
  return (
    <div>
      <He />
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-item">
          <h2>Question 1: What is Lorem Ipsum?</h2>
          <p>
            Answer 1: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="faq-item">
          <h2>Question 2: Why do we use it?</h2>
          <p>
            Answer 2: It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="faq-item">
          <h2>Question 3: Where does it come from?</h2>
          <p>
            Answer 3: Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        {/* Add more FAQ items as needed */}
      </div>
      <Footer/>
    </div>
  );
};

export default FAQPage;
