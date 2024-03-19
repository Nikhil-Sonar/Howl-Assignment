import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Clients.css';
import Slider from 'react-slick';
import deskImg from 'D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/HowlAssignment/howl/src/assets/study-desk-img.jpeg';



const ClientsComp = () => {

  const [countLength, setCountLength] = useState(16);

  const sliderSettings = {
    infinite: false,
    dots: false,
    arrow: true,
    slidesToShow: 8,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          infinite: true,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          infinite: true,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  const jsxElements = [];
  for (let i = 0; i < countLength; i++) {
    jsxElements.push(
      <img className='client-img' src={deskImg} />
    );
  }

  return (
    <section className='section-4'>
      <div className='clients-parent'>
        <div className="clients-txt">Clients we work with</div>
        <div className="clients-parent-card">
          <Slider {...sliderSettings}>
            {jsxElements}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default ClientsComp;
