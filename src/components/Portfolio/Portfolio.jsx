import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/social-media-app-image.jpg";
import Ecommerce from "../../img/ecommerce-image.jpg";
import HOC from "../../img/movie-search-image.jpg";
import MusicApp from "../../img/videotube-image.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
          <div className="links">
            <a target="_blank" href="https://github.com/Mehdi-Zafar/Social-Media-App-frontend">Code</a>
            <a target="_blank" href="https://social-media-react-app27.netlify.app/">Demo</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
          <div className="links">
            <a target="_blank" href="https://github.com/Mehdi-Zafar/E-Commerce-Store">Code</a>
            <a target="_blank" href="https://e-commerce-store-xwvn.vercel.app/">Demo</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
          <div className="links">
            <a target="_blank" href="https://github.com/Mehdi-Zafar/Video-tube-Youtube-Clone">Code</a>
            <a target="_blank" href="https://videotube27.netlify.app/">Demo</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
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
