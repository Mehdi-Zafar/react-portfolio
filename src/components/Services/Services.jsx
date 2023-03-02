import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';
import {AiFillHtml5} from 'react-icons/ai'
import {SiCss3,SiJavascript} from 'react-icons/si'
import {FaReact,FaNode} from 'react-icons/fa'
import Experience from "../Experience/Experience";



const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Professional <span className="color-text">Services</span></span>
        <div className="description">
          <p>As a web developer, I am experienced in designing and developing visually appealing
             and user-friendly websites. My expertise includes proficiency in HTML, CSS, JavaScript,
              and various web development frameworks. I have a keen eye for detail and am skilled
               in implementing responsive design to ensure seamless website functionality across
                multiple platforms and devices. I am also adept at working with APIs and 
                integrating third-party tools to enhance website functionality. Additionally,
                 I am experienced in developing and maintaining website content, optimizing
                  website speed and performance, and conducting thorough testing to ensure
                   website security and user privacy. My strong problem-solving skills,
                    effective communication, and ability to work collaboratively with team 
                    members and clients make me a valuable asset to any web development project.</p>
        </div>
        <div className="tech-logos">
          <div><AiFillHtml5/></div>
          <div><SiCss3/></div>
          <div><SiJavascript/></div>
          <div><FaReact/></div>
          <div><FaNode/></div>
        </div>
        <a href={Resume} download>
          <button className="button s-button">Download&nbsp;CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>      
    </div>
  );
};

export default Services;
