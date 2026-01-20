import React from "react";
import "./Hero.css";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import img5 from "../../assets/image5.png";
import img6 from "../../assets/image6.png";
import img7 from "../../assets/image7.png";
import img8 from "../../assets/image8.png";
import next from "../../assets/next.png";
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero1">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
      <div className="hero2">
        <h2>Luxury</h2>
        <h2>Tailored For You</h2>
      </div>
      <div className="hero3">
        <button>
          <span>
            Shop now <img src={next} alt="" />
          </span>
        </button>
        <button>Our Story</button>
      </div>
      <div data-aos="zoom-in" className="hero4">
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
      </div>
      
    </div>
  );
};

export default Hero;
