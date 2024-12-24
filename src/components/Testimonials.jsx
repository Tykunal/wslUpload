import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "An unforgettable spiritual journey that deepened my faith. The calmness I felt here was unparalleled.",
    name: "Neha Sharma",
  },
  {
    quote: "A retreat for the soul. The landscapes and spiritual ambiance made it a journey to cherish forever.",
    name: "Carlos Martinez",
  },
  {
    quote: "The pilgrimage rejuvenated my spirit. I returned with a sense of inner peace and gratitude.",
    name: "Emily Clark",
  },
  {
    quote: "A perfect blend of hospitality and spirituality. The journey renewed my sense of purpose.",
    name: "Ravi Iyer",
  },
  {
    quote: "A journey beyond words – this experience brought a new level of tranquility into my life.",
    name: "Sara Lee",
  },
  {
    quote: "Spending time in these holy places helped me reconnect with myself in ways I hadn’t imagined.",
    name: "Fatima Khan",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); 

    return () => clearInterval(intervalId); 
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <h2>Our Pilgrims' Stories</h2>
      <div className="testimonial-container">
        <div className="testimonial-card">
          <p>"{testimonials[currentIndex].quote}"</p>
          <h4>- {testimonials[currentIndex].name}</h4>
        </div>
        <div className="testimonial-nav">
          <button onClick={prevTestimonial}>&#9664;</button>
          <button onClick={nextTestimonial}>&#9654;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
