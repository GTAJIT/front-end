import React, { useState, useRef } from 'react';
import '../main.css';

function Features() {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollContainer = useRef(null);
  
  const features = [
    {
      id: 1,
      title: "Programming & Tech",
      icon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming-tech-thin.56382a2.svg"
    },
    {
      id: 2,
      title: "Graphics & Design",
      icon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design-thin.ff38893.svg"
    },
    {
      id: 3,
      title: "Digital Marketing",
      icon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/digital-marketing-thin.68edb44.svg"
    },
    {
      id: 4,
      title: "Writing & Translation",
      icon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation-thin.fd3699b.svg"
    },
    {
      id: 5,
      title: "Video & Animation",
      icon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation-thin.9d3f24d.svg"
    },
    {
      id: 6,
      title: "AI Services",
      icon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/ai-services-thin.104f389.svg"
    },
    {
      id: 7,
      title: "Music & Audio",
      icon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio-thin.43a9801.svg"
    },
    {
      id: 8,
      title: "Business",
      icon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business-thin.885e68e.svg"
    },
    {
      id: 9,
      title: "Consulting",
      icon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/consulting-thin.d5547ff.svg"
    }
  ];

  const itemsPerPage = 7; // Show 7 items per page
  const totalPages = Math.ceil(features.length / itemsPerPage);

  const handleSlide = (direction) => {
    const container = scrollContainer.current;
    const scrollAmount = container.offsetWidth;
    
    if (direction === 'left' && currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      container.style.transform = `translateX(-${scrollAmount * (currentPage - 1)}px)`;
    } else if (direction === 'right' && currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
      container.style.transform = `translateX(-${scrollAmount * (currentPage + 1)}px)`;
    }
  };

  return (
    <div className="features-wrapper">
      <h2 className="features-heading">Explore Our Services</h2>
      <div className="features-container">
        <div 
          className={`nav-btn backward-btn ${currentPage === 0 ? 'disabled' : ''}`} 
          onClick={() => handleSlide('left')}
        >
          <svg
            className="arrow-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9.29 6.71a.996.996 0 000 1.41L13.17 12l-3.88 3.88a.996.996 0 101.41 1.41l4.59-4.59a.996.996 0 000-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>
          </svg>
        </div>
        
        <div className="features-slider">
          <div className="features-track" ref={scrollContainer}>
            {features.map((feature) => (
              <div key={feature.id} className="feature-item">
                <div className="feature-content">
                  <div className="feature-icon">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      loading="lazy"
                      className="feature-icon-img"
                    />
                  </div>
                  <div className="feature-title">{feature.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div 
          className={`nav-btn forward-btn ${currentPage === totalPages - 1 ? 'disabled' : ''}`}
          onClick={() => handleSlide('right')}
        >
          <svg
            className="arrow-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9.29 6.71a.996.996 0 000 1.41L13.17 12l-3.88 3.88a.996.996 0 101.41 1.41l4.59-4.59a.996.996 0 000-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>
          </svg>
        </div>
      </div>
      
      {/* Pagination dots */}
      <div className="pagination-dots">
        {[...Array(totalPages)].map((_, index) => (
          <span
            key={index}
            className={`dot ${currentPage === index ? 'active' : ''}`}
            onClick={() => {
              setCurrentPage(index);
              scrollContainer.current.style.transform = `translateX(-${scrollContainer.current.offsetWidth * index}px)`;
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Features; 
