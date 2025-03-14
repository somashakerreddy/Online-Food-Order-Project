import React from "react";


const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Welcome to <strong>Reddy's Restro</strong> – where flavors meet perfection! 
        Our journey began with a passion for delivering high-quality, delicious meals 
        that bring joy to every bite. From sizzling street food to gourmet delicacies, 
        we bring you the best food experience right to your doorstep.
      </p>

      <div className="about-content">
        <div className="about-section">
          <h2>🍽️ Our Mission</h2>
          <p>
            To serve fresh, delicious, and high-quality food that satisfies your cravings 
            while maintaining excellent customer service.
          </p>
        </div>

        <div className="about-section">
          <h2>🌎 Our Vision</h2>
          <p>
            To become the most loved food delivery brand, connecting people through 
            the joy of tasty and memorable meals.
          </p>
        </div>

        <div className="about-section">
          <h2>⭐ Why Choose Us?</h2>
          <ul>
            <li>✅ Fresh & High-Quality Ingredients</li>
            <li>✅ Fast & Reliable Delivery</li>
            <li>✅ Wide Variety of Dishes</li>
            <li>✅ Customer Satisfaction Guaranteed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
