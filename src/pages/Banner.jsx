import React from 'react';
import banner from '../assets/login.jpg';


const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="Banner Image" className="banner-img" />
    </div>
  );
};

export default Banner;
