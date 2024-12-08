import React from "react";
import "../CustomCards.css"; // Assuming the CSS file is named Facilities.css
import img1 from "../../Assets/ny.jpg";
import img2 from "../../Assets/rb.jpg";
import cnx from "../../Assets/kech.jpg";
import pool from "../../Assets/paris.jpg";

// Reusable component for a single custom card
const CustomCard = ({ iconSrc }) => (
  <div className="custom-card-item">
    <img src={iconSrc} className="custom-card-icon" alt="Custom Card" />
  </div>
);

// Main Facilities component
const CustomCards = () => {
  // Only 4 images for customized positioning
  const cardsData = [img1, img2, cnx, pool];

  return (
    <div className="custom-cards-container">
      {/* Title Section */}
      {/* Cards Section */}
      <div className="custom-cards">
        <div className="custom-card-container">
          {cardsData.map((iconSrc, index) => (
            <CustomCard key={index} iconSrc={iconSrc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCards;
