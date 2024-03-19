// Job.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Job/job.css'
import He from '../Navbar/Navbar';
import Footer from '../footer/footer';

// Static data for job list
const staticJobList = [
  {
    id: 1,
    name: 'Personal Care',
    description: 'Assistance with daily activities such as bathing, dressing, and grooming',
    imageUrl: 'https://i.pinimg.com/474x/7f/13/73/7f1373a9f02f36fe00dfb225bdf57330.jpg',
  },
  {
    id: 2,
    name: 'Companionship',
    description: 'Friendly companionship and emotional support to combat loneliness',
    imageUrl: 'https://i.pinimg.com/474x/7d/6a/0d/7d6a0d4d78a6facee0f0c308e9f82ba8.jpg',
  },
  {
    id: 3,
    name: 'Medication Management',
    description: 'Ensuring medications are taken on time and in the correct dosage.',
    imageUrl: 'https://i.pinimg.com/474x/56/79/2b/56792bdb84034f577397c94044d01136.jpg',
  },
  // Add more job objects as needed
];

function Job() {
    
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [jobList] = useState(staticJobList);
  const navigate = useNavigate();

  const handleSearch = () => {
    const results = jobList.filter((job) =>
      job.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleApply = (job) => {
    // Create a JobApplication object to send to the backend
    const jobApplication = {
      jobId: job.id,
      jobName: job.name,
      jobDescription: job.description,
      imageUrl: job.imageUrl,
    };

    // Simulate a POST request to your backend endpoint for applying to the job
    // In a real application, this would be replaced with actual API call
    setTimeout(() => {
      console.log('Applied successfully');
      // Navigate to different pages based on job ID
      if (job.id === 1) {
        navigate('/personal');
      } else if (job.id === 2) {
        navigate('/com');
      } else if (job.id === 3) {
        navigate('/medical');
      }
    }, 1000);
  };

  return (
    <>
        <He/>
    
      <div className='hero'>
        <h2 className="hero-head">SENIOR CARE</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Services...!"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
        <div className="job-list">
          {searchResults.length > 0 ? (
            searchResults.map((job) => (
              <div className="job" key={job.id}>
                <img src={job.imageUrl} alt={job.name} className="job-image" />
                <h3 className="job-name">{job.name}</h3>
                <p className="job-description">{job.description}</p>
                <button onClick={() => handleApply(job)} className="apply-button">View Details</button>
              </div>
            ))
            ) : (
            jobList.map((job) => (
              <div className="job" key={job.id}>
                <img src={job.imageUrl} alt={job.name} className="job-image" />
                <h3 className="job-name">{job.name}</h3>
                <p className="job-description">{job.description}</p>
                <button onClick={() => handleApply(job)} className="apply-button">View Details</button>
              </div>
            ))
          )}
        </div> 
      </div>
 
    <Footer/>
              </>
  );
}

export default Job;
