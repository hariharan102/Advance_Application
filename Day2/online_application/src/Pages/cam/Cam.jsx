// Companionship.js

import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import '../cam/Cam.css'; // Import CSS file for styling
import Footer from '../footer/footer';
import He from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
export default function CompanionshipServices() {
    const nav = useNavigate();
  const services = [
    {
      id: 1,
      name: "Friendly Conversation",
      description: "Engaging in friendly conversation and companionship.",
      image: "https://i.pinimg.com/564x/46/7c/9b/467c9b64ee25aa048ce7d89a4130c2dd.jpg"
    },
    {
      id: 2,
      name: "Reading Aloud",
      description: "Reading books, articles, or newspapers aloud.",
      image: "https://i.pinimg.com/474x/78/b1/88/78b188d2a6692dffc7ada0d9cee5c69a.jpg"
    },
    {
      id: 3,
      name: "Playing Games",
      description: "Playing board games, card games, or puzzles together.",
      image: "https://i.pinimg.com/474x/99/7b/c9/997bc956c410624261fecb611b32d65c.jpg"
    },
    {
      id: 4,
      name: "Accompanying on Walks",
      description: "Accompanying on leisurely walks or outings.",
      image: "https://i.pinimg.com/474x/22/6a/97/226a975184bdfeacd0f818d55d6e916d.jpg"
    },
    {
      id: 5,
      name: "Assisting with Hobbies",
      description: "Assisting with hobbies such as gardening, crafting, or painting.",
      image: "https://i.pinimg.com/474x/88/00/b0/8800b0e41937924ba07b3d6b3c01c082.jpg"
    },
    {
      id: 6,
      name: "Listening to Music",
      description: "Listening to music together and sharing favorite songs.",
      image: "https://i.pinimg.com/474x/39/2a/12/392a12ca65527c6e3c74202ff5c1e850.jpg"
    }
  ];

  function handleServiceRequest(serviceName) {
         nav("/Payment");
  }

  return (
    <div>
        <He/>
      <h1 className="title">Senior Care Home.</h1>
      <h2 className="subtitle">Companionship Services</h2>
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
