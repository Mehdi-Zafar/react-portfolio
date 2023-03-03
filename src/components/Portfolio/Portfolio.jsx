import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/social-media-app-image.jpg";
import Ecommerce from "../../img/ecommerce-image.jpg";
import HOC from "../../img/movie-search-image.jpg";
import MusicApp from "../../img/videotube-image.jpg";
import { themeContext } from "../../Context";
import { useState } from "react";
import { useEffect } from "react";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [windowSize,setWindowSize] = useState(window.innerWidth)

  console.log(windowSize)
  useEffect(()=>{
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  })


  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={50}
        slidesPerView={windowSize < '480' ? 1 : 3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
          <h3>Social Media App</h3>
          <div className="links">
            <a target="_blank" href="https://github.com/Mehdi-Zafar/Social-Media-App-frontend">Code</a>
            <a target="_blank" href="https://social-media-react-app27.netlify.app/">Demo</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
          <h3>E-Commerce App</h3>
          <div className="links">
            <a target="_blank" href="https://github.com/Mehdi-Zafar/E-Commerce-Store">Code</a>
            <a target="_blank" href="https://e-commerce-store-xwvn.vercel.app/">Demo</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
          <h3>Youtube Clone</h3>
          <div className="links">
            <a target="_blank" href="https://github.com/Mehdi-Zafar/Video-tube-Youtube-Clone">Code</a>
            <a target="_blank" href="https://videotube27.netlify.app/">Demo</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
          <h3>Movie Search App</h3>
          <div className="links">
            <a target="_blank" href="https://github.com/Mehdi-Zafar/Movie-Search">Code</a>
            <a target="_blank" href="https://moviesearchreactapp27.netlify.app/">Demo</a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
