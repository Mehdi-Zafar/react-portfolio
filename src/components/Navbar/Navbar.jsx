import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import {AiOutlineHome} from "react-icons/ai"
import {FaRegHandshake,FaRegCommentDots} from "react-icons/fa"
import {SlBadge} from "react-icons/sl"
import {BsBriefcase} from "react-icons/bs"


const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Mehdi</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                <AiOutlineHome/>&nbsp;Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                <FaRegHandshake/>&nbsp;Services
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                <SlBadge/>&nbsp;Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                <BsBriefcase/>&nbsp;Portfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                <FaRegCommentDots/>&nbsp;Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
