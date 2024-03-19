import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "../Admin/AdminPage.css"
import Sidebar from '../Sidebar/Sidebar';

const AdminPage = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    description: '',
    workers: [{ name: '', from: '', to: '', contactName: '', contactDetails: '', photo: null }],
    totalWorkers: 0,
    availabilityTime: '',
  });

  const handleInputChange = (e, index) => {
    const { name, value, type } = e.target;
    const updatedWorkers = [...formData.workers];
    updatedWorkers[index][name] = type === 'file' ? e.target.files[0] : value;
    setFormData({ ...formData, workers: updatedWorkers });
  };

  const handleAddWorker = () => {
    setFormData({
      ...formData,
      workers: [...formData.workers, { name: '', from: '', to: '', contactName: '', contactDetails: '', photo: null }],
    });
  };

  const handleAddService = () => {
    if (formData.name.trim() !== '' && formData.description.trim() !== '') {
      const newService = {
        id: services.length + 1,
        name: formData.name,
        description: formData.description,
        workers: formData.workers,
        totalWorkers: formData.totalWorkers,
        availabilityTime: formData.availabilityTime,
      };
      setServices([...services, newService]);
      setFormData({
        id: null,
        name: '',
        description: '',
        workers: [{ name: '', from: '', to: '', contactName: '', contactDetails: '', photo: null }],
        totalWorkers: 0,
        availabilityTime: '',
      });
    }
  };

  const handleUpdateService = (id) => {
    const serviceToUpdate = services.find(service => service.id === id);
    setFormData(serviceToUpdate);
    setServices(services.filter(service => service.id !== id));
  };

  const handleDeleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <>
    <Sidebar/>
    <div className="admin-page">
      <h1>Senior Care Admin Panel</h1>
      <strong>Service Name:</strong>
      <div className="service-form">
        <input
          type="text"
          name="name"
          placeholder="Service Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
        />
        <strong>Service Description:</strong>
        <textarea
          name="description"
          placeholder="Service Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
        />
        <strong>Total Workers:</strong>
        <input
          type="number"
          name="totalWorkers"
          placeholder="Total Workers"
          value={formData.totalWorkers}
          onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
        />
        <strong>Worker Name:</strong>
        {formData.workers.map((worker, index) => (
          <div key={index} className="worker-details">
            <input
              type="text"
              name="name"
              placeholder={`Worker ${index + 1} Name`}
              value={worker.name}
              onChange={(e) => handleInputChange(e, index)}
            />
            <strong>Available from:</strong>
            <input
              type="datetime-local"
              name="from"
              placeholder="From"
              value={worker.from}
              onChange={(e) => handleInputChange(e, index)}
            />
            <strong>Available to:</strong>
            <input
              type="datetime-local"
              name="to"
              placeholder="To"
              value={worker.to}
              onChange={(e) => handleInputChange(e, index)}
            />
            <strong>Email:</strong>
            <input
              type="email"
              name="contactName"
              placeholder={`Email ${index + 1}`}
              value={worker.contactName}
              onChange={(e) => handleInputChange(e, index)}
            />
            <strong>Contact Details:</strong>
            <input
              type="text"
              name="contactDetails"
              placeholder={`Contact Details for Worker ${index + 1}`}
              value={worker.contactDetails}
              onChange={(e) => handleInputChange(e, index)}
            />
            <strong>Worker Photo</strong><br/>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
        ))}
        <strong>Add more workers</strong><br/><br/>
        <button onClick={handleAddWorker}>Add Worker</button>
        <br/><br/>
        {formData.id ?
          <button onClick={() => handleUpdateService(formData.id)}>Update Service</button> :
          <button onClick={handleAddService}>Add Service</button>
        }
      </div>
      {services.length > 0 && (
        <div className="service-list">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <p><strong>Total Workers:</strong> {service.totalWorkers}</p>
              <p><strong>Availability Time:</strong> {service.availabilityTime}</p>
              <h4>Workers:</h4>
              <ul>
                {service.workers.map((worker, index) => (
                  <li key={index}>
                    <strong>Worker {index + 1}:</strong><br />
                    <strong>Name:</strong> {worker.name},<br />
                    <strong>From:</strong> {worker.from}, <strong>To:</strong> {worker.to},<br />
                    <strong>Contact Name:</strong> {worker.contactName},<br/>
                    <strong>Contact Details:</strong> {worker.contactDetails},<br />
                    {worker.photo && <img src={URL.createObjectURL(worker.photo)} alt={`Photo of ${worker.name}`} className="worker-photo" />}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleUpdateService(service.id)}>Update</button>
              <button onClick={() => handleDeleteService(service.id)}>Delete</button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default AdminPage;
