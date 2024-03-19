import React, { useState } from 'react';
import '../feedback/feedback.css';
import He from '../Navbar/Navbar';
import Footer from '../footer/footer';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the feedback data to your backend or handle it as needed
    console.log('Feedback submitted:', feedback);
    // Optionally, you can clear the input field after submission
    setFeedback('');
    // Set submitted state to true to show a confirmation message
    setSubmitted(true);
  };

  return (
    <div>
        <He/>
    <div className="feedback-container">
      <h1>Feedback</h1>
      {submitted ? (
        <div className="confirmation-message">
          <p>Thank you for your feedback!</p>
        </div>

      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback here..."
            rows={5}
            cols={50}
            required
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
    <Footer/>
    </div>
  );
};

export default FeedbackPage;
