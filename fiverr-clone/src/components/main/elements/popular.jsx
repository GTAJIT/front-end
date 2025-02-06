import React, { useState, useRef } from 'react';
import '../main.css'; // Ensure to import your CSS file

// const scrollContainer = document.querySelector(".pop-sec-merg");
// const backBtn = document.querySelector(".backward-btn");
// const nextBtn = document.querySelector(".forward-btn");

// backBtn.addEventListener("click", () => {
//     scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
// });

// nextBtn.addEventListener("click", () => {
//     scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
// });

function Popular() {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollContainer = useRef(null);
  
  const popularServices = [
    {
      id: 1,
      title: "Website Development",
      image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png"
    },
    {
      id: 2,
      title: "Logo Design",
      image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png"
    },
    {
      id: 3,
      title: "SEO",
      image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png"
    },
    {
      id: 4,
      title: "Architecture & Interior Design",
      image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png"
    },
    {
      id: 5,
      title: "Social Media Marketing",
      image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png"
    },
    {
      id: 6,
      title: "Voice Over",
      image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png"
    },
    {
      id: 7,
      title: "UGC Videos",
      image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/ece24f7f595e2dd44b26567705d1c600-1728279781879/UGC%20Video%20img.png"
    },
    {
      id: 8,
      title: "Software Development",
      image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/software-development.png"
    },
    {
      id: 9,
      title: "Data Science & ML",
      image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156495/data-science.png"
    },
    {
      id: 10,
      title: "Product Photography",
      image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156481/product-photography.png"
    },
    {
      id: 11,
      title: "E-Commerce Marketing",
      image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156474/e-commerce.png"
    },
    {
      id: 12,
      title: "Video Editing",
      image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/video-editing.png"
    }
  ];

  const itemsPerPage = 5; // Show 5 items per page
  const totalPages = Math.ceil(popularServices.length / itemsPerPage);

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
    <div className="pop">
      <div className="pop-text">Popular Services</div>
      <div className="pop-container">
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
        
        <div className="pop-slider">
          <div className="pop-track" ref={scrollContainer}>
            {popularServices.map((service) => (
              <div 
                key={service.id} 
                className="pop-section-data" 
                id={`pop-img-${service.id}`}
              >
                <p className="pop-text capitalize">{service.title}</p>
                <img
                  className="pop-img"
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />
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

export default Popular;
