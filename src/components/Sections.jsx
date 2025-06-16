import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logoPurple1 from '../assets/logoPurple1.png';
import logoPurple2 from '../assets/logoPurple2.png';
import logoPurple3 from '../assets/logoPurple3.png';
import logoPurple4 from '../assets/logoPurple4.png';
import logoPurple5 from '../assets/logoPurple5.png';
import logoPurple6 from '../assets/logoPurple6.png';
import servicebg from '../assets/servicebg.png';

const imageData = [
  { id: 1, defaultSrc: logoPurple1, hoverSrc: logo1, alt: "Logo 1" },
  { id: 2, defaultSrc: logoPurple2, hoverSrc: logo2, alt: "Logo 2" },
  { id: 3, defaultSrc: logoPurple3, hoverSrc: logo3, alt: "Logo 3" },
  { id: 4, defaultSrc: logoPurple4, hoverSrc: logo4, alt: "Logo 4" },
  { id: 5, defaultSrc: logoPurple5, hoverSrc: logo5, alt: "Logo 5" },
  { id: 6, defaultSrc: logoPurple6, hoverSrc: logo6, alt: "Logo 6" },
];

const SectionsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ]
  };

  return (
     <div
    style={{
      backgroundImage: `url(${servicebg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  >
    <div className="slider-wrapper">
      <Slider {...settings}>
        {imageData.map((image) => (
          <div className="clients-logo d-flex align-content-center" key={image.id}>
            <img src={image.defaultSrc} alt={image.alt} className="logo default-logo" />
            <img src={image.hoverSrc} alt={image.alt} className="logo hover-logo" />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default SectionsSlider;
