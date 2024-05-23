import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import lalibela from './here/photo_10_2024-05-23_15-02-28.jpg';
import semein from './here/photo_11_2024-05-23_15-02-28.jpg';
import wonchi from './here/photo_12_2024-05-23_15-02-28.jpg';
import gonder from './here/photo_13_2024-05-23_15-02-28.jpg';
import ertaile from './here/photo_14_2024-05-23_15-02-28.jpg';
import epiphany from './here/photo_15_2024-05-23_15-02-28.jpg';
import lalibela2 from './here/photo_16_2024-05-23_15-02-28.jpg';
import harar from './here/photo_2_2024-05-23_15-02-28.jpg';
import semien2 from './here/photo_4_2024-05-23_15-02-28.jpg';
// import enzihuomo from './tourI/omi.jpg';
// import bale from './tourI/bale.jpg';
// import abune_yosef_trekking from './tourI/abune_yosef_trekking.jpg';
// import camel from './tourI/camel.jpg';
// import carter from './tourI/carter.jpg';

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    lalibela,
    semein,
    wonchi,
    gonder,
    ertaile,
   
    epiphany,

    lalibela2,
    harar,
    semien2,
   
  ];

  const descriptions = [
    { title: "LIBRARY", description: "A vast collection of books and resources" },
    { title: "SCIENCE_LAB", description: "State-of-the-art laboratories for experiments" },
    { title: "COMPUTER_LAB", description: "Modern computer facilities for tech-savvy students" },
    { title: "SPORTS_COMPLEX", description: "Extensive sports facilities for physical development" },
    { title: "MUSIC_ROOM", description: "A place for nurturing musical talents" },
    { title: "ART_STUDIO", description: "Creative space for budding artists" },
    { title: "AUDITORIUM", description: "Venue for school events and assemblies" },
    { title: "CAFETERIA", description: "Healthy meals in a friendly environment" },
    { title: "GARDEN", description: "Tranquil space for relaxation and study" },
    { title: "CLUBS", description: "Diverse clubs for various interests" },
    { title: "LIBRARY", description: "Quiet and conducive reading environment" },
    { title: "SCIENCE_LAB", description: "Practical learning through scientific exploration" },
    { title: "SPORTS_DAY", description: "Annual event for showcasing athletic skills" },
    { title: "FIELD_TRIPS", description: "Educational trips for experiential learning" },
    { title: "PARENT_TEACHER_MEETINGS", description: "Engaging parents in the educational journey" },
    { title: "EXTRA_CURRICULAR", description: "Activities for holistic student development" },
  ];
  

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero-section"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        textAlign: "center",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AnimatePresence>
        {images.map((image, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `linear-gradient(rgba(0, 0, 100, 0.6), rgba(0, 0, 100, 0)), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(80%) saturate(120%) contrast(100%)",
              }}
            />
          )
        ))}
      </AnimatePresence>

      <div
        className="hero-content"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 20px",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        }}
      >
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            <Title
              level={1}
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                color: "#fff",
                textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
              }}
            >
              {descriptions[currentSlide] && descriptions[currentSlide].title}
            </Title>

            <Paragraph
              style={{
                fontSize: "18px",
                marginBottom: "40px",
                color: "#fff",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
              }}
            >
              {descriptions[currentSlide] && descriptions[currentSlide].description}
            </Paragraph>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <FaArrowCircleLeft style={{ fontSize: "48px", color: "#fff" }} />
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <FaArrowCircleRight style={{ fontSize: "48px", color: "#fff" }} />
      </button>
    </div>
  );
};

export default HeroSection;
