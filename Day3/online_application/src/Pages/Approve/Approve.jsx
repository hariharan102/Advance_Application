import React from 'react';
import "../Approve/Approve.css"
import Side from '../Sidebar/Sidebar';
const requests = [
  {
    id: 1,
    userName: 'John Doe',
    jobTitle: 'Software Engineer',
    status: 'Pending',
  },
  {
    id: 2,
    userName: 'Jane Smith',
    jobTitle: 'Data Analyst',
    status: 'Approved',
  },
  {
    id: 3,
    userName: 'Alice Johnson',
    jobTitle: 'Web Developer',
    status: 'Rejected',
  },
  // Add more request objects as needed
];

const Approve = () => {
  return (
    <>
    <Side/>
    <div className="admin-container">
      <h2 className="admin-heading">Requests from Users</h2>
      <div className="request-list">
        {requests.map((request) => (
          <div className="request" key={request.id}>
            <div className="request-info">
              <p><strong>User:</strong> {request.userName}</p>
              <p><strong>Job:</strong> {request.jobTitle}</p>
              <p><strong>Status:</strong> {request.status}</p>
            </div>
            <div className="request-actions">
              <button className="approve-btn">Approve</button>
              <button className="reject-btn">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default Approve;
