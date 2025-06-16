import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import reddots from "../assets/reddots.png";
import yellowdots from "../assets/yellowdots.png";
import greendots from "../assets/greendots.png";
import strategy from "../assets/strategy.png";
import wdev from "../assets/wdev.png";
import wsol from "../assets/wsol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faSquare,
  faXmark,
  faStar,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Strategy & Research",
    description:
      "Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit.",
    dotImg: yellowdots,
    bgColor: "#fea500",
  },
  {
    title: "Web Development",
    description:
      "Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit.",
    dotImg: reddots,
    bgColor: "#ff5269",
  },
  {
    title: "Web Solution",
    description:
      "Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit.",
    dotImg: greendots,
    bgColor: "#029e76",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="container services-container"
    style={{paddingTop: '115px', paddingBottom: 0,}}>
      <p className="section-subtitle text-center">SERVICES</p>
      <Typography
        variant="h2"
        align="center"
        className="section-title mb-5"
        style={{ fontWeight: 800 }}
      >
        PROVIDE AWESOME SERVICE
      </Typography>

      <div className="row text-center">
        {services.map((service, index) => (
          <div
            className="col-lg-4 col-md-6 d-flex justify-content-center"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="service-card">
              <div className="dot-icon-wrap">
                <img src={service.dotImg} alt="dots" className="dot-image" />
                {/* <div
                  className="icon-circle"
                  style={{ backgroundColor: service.bgColor, color: "#fff" }}
                >
                  {service.icon}
                </div> */}
                <div
                  className="icon-circle d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: service.bgColor,
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={index === 0 ? strategy : index === 1 ? wdev : wsol}
                    alt="service icon"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                </div>

                <FontAwesomeIcon
                  icon={faCircle}
                  className={`fly-icon yellow ${
                    hoveredIndex === index ? "active" : ""
                  }`}
                />
                <FontAwesomeIcon
                  icon={faCircle}
                  className={`fly-icon blue ${
                    hoveredIndex === index ? "active" : ""
                  }`}
                />
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className={`fly-icon pink ${
                    hoveredIndex === index ? "active" : ""
                  }`}
                />
                <FontAwesomeIcon
                  icon={faSquare}
                  className={`fly-icon green ${
                    hoveredIndex === index ? "active" : ""
                  }`}
                />
                <FontAwesomeIcon
                  icon={faXmark}
                  className={`fly-icon red ${
                    hoveredIndex === index ? "active" : ""
                  }`}
                />
              </div>
              <h5 className="fw-bold mt-4">{service.title}</h5>
              <p className="text-muted">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
