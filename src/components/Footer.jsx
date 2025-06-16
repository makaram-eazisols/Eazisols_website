import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaAngleRight,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import bgf10 from "../assets/bgf10.png";
import email from "../assets/email.png";
import location from "../assets/location.png";

const Footer = () => {
  return (
    <footer
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#7659f7",
        color: "#fff",
        backgroundImage: `url(${bgf10})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "50px 20px" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: 30,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="eazisols"
              style={{ height: 40, marginRight: 10 }}
            />
            <h2 style={{ fontWeight: 700 }}>Eazisols</h2>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src={email} alt="email" style={{ width: 90, height: 90 }} />
              <div>
                <strong>+91 987-654-3210</strong>
                <br />
                info@eazisols.com
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img
                src={location}
                alt="location"
                style={{ width: 90, height: 90 }}
              />
              <div>
                 65 J1,Phase 1
                <br />
                Wapda Town, Lahore
              </div>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "#c9a7f7" }} />

        {/* Bottom grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "30px",
            marginTop: 30,
          }}
        >
          {/* About */}
          <div>
            <h3 style={{ fontWeight: 700, marginBottom: 10 }}>ABOUT US</h3>
            <div
              style={{
                width: 40,
                height: 3,
                background: "#fff",
                marginBottom: 15,
              }}
            ></div>
            <p style={{ fontSize: 14, color: "#e0d7f3" }}>
              Maecenas pellentesque placerat quam, in finibus nisl tincidunt
              sed. Aliquam magna augue, malesuada ut feugiat eget, cursus eget
              felis.
            </p>
            <div style={{ marginTop: 20, display: "flex", gap: 15 }}>
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>

          {/* Our Links */}
          <div>
            <h3 style={{ fontWeight: 700, marginBottom: 10 }}>OUR LINKS</h3>
            <div
              style={{
                width: 40,
                height: 3,
                background: "#fff",
                marginBottom: 15,
              }}
            ></div>
            {["Home", "About Us", "Services", "Team", "Blog"].map((link) => (
              <p key={link} style={{ fontSize: 14 }}>
                <FaAngleRight style={{ marginRight: 5 }} /> {link}
              </p>
            ))}
          </div>

          {/* Our Services */}
          <div>
            <h3 style={{ fontWeight: 700, marginBottom: 10 }}>OUR SERVICES</h3>
            <div
              style={{
                width: 40,
                height: 3,
                background: "#fff",
                marginBottom: 15,
              }}
            ></div>
            {[
              "Strategy & Research",
              "Web Development",
              "Web Solution",
              "Digital Marketing",
              "App Design",
            ].map((service) => (
              <p key={service} style={{ fontSize: 14 }}>
                <FaAngleRight style={{ marginRight: 5 }} /> {service}
              </p>
            ))}
          </div>

          {/* Other Links */}
          <div>
            <h3 style={{ fontWeight: 700, marginBottom: 10 }}>OTHER LINKS</h3>
            <div
              style={{
                width: 40,
                height: 3,
                background: "#fff",
                marginBottom: 15,
              }}
            ></div>
            {[
              "FAQ",
              "Portfolio",
              "Privacy Policy",
              "Terms & Conditions",
              "Support",
            ].map((link) => (
              <p key={link} style={{ fontSize: 14 }}>
                <FaAngleRight style={{ marginRight: 5 }} /> {link}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        style={{
          backgroundColor: "#2a0db0",
          textAlign: "center",
          padding: "15px 0",
          fontSize: 14,
          color: "#d7ccfa",
        }}
      >
        Copyright © 2024{" "}
        <span style={{ color: "#fff", fontWeight: 600 }}>Eazisols</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
