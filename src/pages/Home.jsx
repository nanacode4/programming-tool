import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Button } from "@mui/material";

const Home = () => {
    const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/messages/")
      .then(response => {
        console.log("Received Data:", response.data);
        setMessages(response.data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Welcome to the Home Page
      </Typography>
      
      
    </Container>
  );
};

export default Home;
