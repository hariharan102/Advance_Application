/* eslint-disable no-unused-vars */
// PersonalCare.js

import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import '../Personalcare/PersonalCare.css'
import He from '../Navbar/Navbar';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';
export default function PersonalCareServices() {
  const services = [
    {
      id: 1,
      name: "Bathing/Showering Assistance",
      description: "Help with bathing or showering.",
      image: "https://lovinghomecareinc.com/wp-content/uploads/2023/08/batthing-assistance.jpeg"
    },
    {
      id: 2,
      name: "Dressing Assistance",
      description: "Assistance with getting dressed.",
      image: "https://assistinghands.com/34/wp-content/uploads/sites/59/2021/09/Senior-Home-Care-West-Plam-Beach-FL.jpeg"
    },
    {
      id: 3,
      name: "Toileting Assistance",
      description: "Assistance with using the toilet.",
      image: "https://i0.wp.com/fedeltahomecare.com/wp-content/uploads/2022/11/DkvGDTMRQ0RsXWSbtwyHUomklquBEt0n1591820717.jpeg?fit=800%2C539&ssl=1"
    },
    {
      id: 4,
      name: "Grooming",
      description: "Hair care, shaving, nail care, etc.",
      image: "https://assistinghands.com/54/wp-content/uploads/sites/82/2022/01/Elderly-Care-Libertyville-Illinois.jpg"
    },
    {
      id: 5,
      name: "Mobility Assistance",
      description: "Help with transferring and walking.",
      image: "https://www.homecareassistanceoshkosh.com/wp-content/uploads/2020/05/Tips-to-Help-Older-Adults-with-Limited-Mobility.jpg"
    },
    {
      id: 6,
      name: "Oral Hygiene Assistance",
      description: "Assistance with dental care.",
      image: "https://cdn.visitingangels.com/cgcimages/oral-hygiene-seniors-main.jpg"
    }
  ];
  const nav = useNavigate();

  function handleServiceRequest(serviceName) {
    nav("/payment");
  }

  return (
    <div>
        <He/>
      <h1 className="title">Senior Care Home.</h1>
      <h2 className="subtitle">Personal Care Services</h2>
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
