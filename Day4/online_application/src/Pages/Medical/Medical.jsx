/* eslint-disable no-unused-vars */
// MedicationManagement.js

import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import '../Medical/Medical.css'
import He from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
export default function MedicationManagementServices() {
  const services = [
    {
      id: 1,
      name: "Medication Reminders",
      description: "Providing reminders for medication schedules.",
      image: "https://i.pinimg.com/474x/e2/aa/0e/e2aa0eddf2758c18ca0dfb3ef2d66557.jpg"
    },
    {
      id: 2,
      name: "Medication Administration",
      description: "Assisting with administering medications.",
      image: "https://i.pinimg.com/474x/3b/f3/98/3bf398da78783666ddfaafc77a528e8b.jpg"
    },
    {
      id: 3,
      name: "Medication Monitoring",
      description: "Monitoring medication intake and potential side effects.",
      image: "https://i.pinimg.com/474x/84/17/68/841768a4eec2f454f07f97ac7571057f.jpg"
    },
    {
      id: 4,
      name: "Refill Coordination",
      description: "Assisting with coordinating prescription refills.",
      image: "https://i.pinimg.com/474x/2a/10/8c/2a108c292414c34e9536dea3c32e8d07.jpg"
    },
    {
      id: 5,
      name: "Medication Organization",
      description: "Organizing medications for easy access and compliance.",
      image: "https://i.pinimg.com/474x/fc/27/13/fc2713f35fb32e26ed2ce2d1f82d2f9c.jpg"
    },
    {
      id: 6,
      name: "Medication Education",
      description: "Providing education on medications and their usage.",
      image: "https://i.pinimg.com/564x/5f/cd/d4/5fcdd475c5f71b7c19e9d684b2e65a23.jpg"
    }
  ];
  const nav=useNavigate();

  function handleServiceRequest(serviceName) {
    nav("/payment");
  }

  return (
    <div>
        <He/>
      <h1 className="title">Senior Care Home.</h1>
      <h2 className="subtitle">Medication Management Services</h2>
      <div className="service-list">
        <div className="service-container">
          {services.map((service) => (
            <Card key={service.id} className="service-card">
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.name}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {service.name}
                </Typography>
                <Typography variant="body2" component="p">
                  {service.description}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => handleServiceRequest(service.name)}>Request Service</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
