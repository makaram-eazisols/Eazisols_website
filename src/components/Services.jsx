import React from "react";
import { Typography, Box } from "@mui/material";
import reddots from "../assets/reddots.png";
import yellowdots from "../assets/yellowdots.png";
import greendots from "../assets/greendots.png";

const services = [
  {
    title: "Strategy & Research",
    description:
      "Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit.",
    iconBg: "bg-warning",
  },
  {
    title: "Web Development",
    description:
      "Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit.",
    iconBg: "bg-danger",
  },
  {
    title: "Web Solution",
    description:
      "Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit.",
    iconBg: "bg-success",
  },
];

const Services = () => {
  return (
    <div className="container py-5"
    >
      <p className="text-center text-secondary fw-bold mb-1">SERVICES</p>
      <Typography
        variant="h3"
        align="center"
        className="fw-bold mb-5"
        style={{ fontWeight: 800 }}
      >
        PROVIDE AWESOME SERVICE
      </Typography>

      <div className="row text-center">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className={`p-4 service-box h-100 rounded shadow-sm ${
                index === 0 ? "hover-highlight" : ""
              }`}
            >
              <Box className="position-relative d-inline-block mb-3">
                <div className={`dot-pattern ${service.dotClass}`}></div>
                <div
                  className={`rounded-circle d-flex align-items-center justify-content-center mx-auto ${service.iconBg}`}
                  style={{ width: 80, height: 80 }}
                >
                </div>
              </Box>
              <h5 className="fw-bold mt-3">{service.title}</h5>
              <p className="text-muted">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Services;
