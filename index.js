import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "react-modal";

const App = () => {
  return (
    <Router>
      <Container>
        <Header>
          <Logo>Travel Unbounded</Logo>
          <Nav>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/itinerary">Itinerary</NavItem>
            <NavItem to="/pricing">Pricing</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </Nav>
        </Header>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
};

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <HeroSection>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Big Cats Week at Maasai Mara - Diwali 2023 Special
      </motion.h1>
      <p>Join us for an unforgettable safari experience!</p>
      <Button onClick={() => setModalIsOpen(true)}>Book Now</Button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Book Your Adventure</h2>
        <p>Fill in your details to reserve a spot!</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </HeroSection>
  );
};

const Itinerary = () => (
  <Section>
    <h2>Itinerary</h2>
    <p>Day 1: Arrive at JKIA airport, drive to Maasai Mara...</p>
    <p>Day 2: Full-day game drive, witness the sunrise...</p>
    <p>Day 3: Explore the Sand River border with Tanzania...</p>
    <p>Day 4: Return to Nairobi...</p>
  </Section>
);

const Pricing = () => (
  <Section>
    <h2>Pricing & Special Offers</h2>
    <p>Adult: $1582 | Child: $1400</p>
    <p>Special Independence Day Offer: $1322 (Book by Aug 14th!)</p>
  </Section>
);

const Contact = () => (
  <Section>
    <h2>Contact Us</h2>
    <p>Email: info@travelunbounded.com</p>
    <p>Phone: +254 712345678</p>
  </Section>
);
