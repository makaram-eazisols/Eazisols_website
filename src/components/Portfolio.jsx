import React from 'react';
import portfolio1 from '../assets/portfolio1.jpg';
import portfolio2 from '../assets/portfolio2.jpg';
import portfolio3 from '../assets/portfolio3.jpg';
import portfolio4 from '../assets/portfolio4.jpg';
import portfolio5 from '../assets/portfolio5.jpg';
import portfolio6 from '../assets/portfolio6.jpg';
import portfolio7 from '../assets/portfolio7.jpg';
import portfolio8 from '../assets/portfolio8.jpg';

const Portfolio = () => {
  return (
    <>
      {/* ===== Portfolio Header & Filters ===== */}
      <div className="portfolio-header">
        <p className="subtitle">PROJECTS</p>
        <h2 className="title">OUR PORTFOLIO</h2>
        <div className="filter-buttons">
          <button className="filter active">All</button>
          <button className="filter">Web Design</button>
          <button className="filter">Web Development</button>
          <button className="filter">Branding</button>
          <button className="filter">Mobile App</button>
          <button className="filter">SEO</button>
        </div>
      </div>

      {/* ===== Image Grid (Unchanged) ===== */}
      <div className="custom-grid">
        <div className="item i1"><img src={portfolio1} alt="1" /></div>
        <div className="item i2"><img src={portfolio2} alt="2" /></div>
        <div className="item i3"><img src={portfolio3} alt="3" /></div>
        <div className="item i4"><img src={portfolio4} alt="4" /></div>
        <div className="item i5"><img src={portfolio5} alt="5" /></div>
        <div className="item i6"><img src={portfolio6} alt="6" /></div>
        <div className="item i7"><img src={portfolio7} alt="7" /></div>
        <div className="item i8"><img src={portfolio8} alt="8" /></div>
      </div>

      {/* ===== Styling ===== */}
      <style>
        {`
          /* Header section */
          .portfolio-header {
            text-align: center;
            margin-bottom: 40px;
            font-family: 'Poppins', sans-serif;
          }

          .subtitle {
            font-size: 16px;
            color: #999;
            font-weight: 500;
            margin-bottom: 5px;
            text-transform: uppercase;
          }

          .title {
            font-size: 48px;
            font-weight: 900;
            color: #0f0f2d;
            margin-bottom: 30px;
          }

          .filter-buttons {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
          }

          .filter {
            border: none;
            background: none;
            font-size: 16px;
            font-weight: 500;
            color: #555;
            cursor: pointer;
            padding: 10px 20px;
            border-radius: 30px;
            transition: all 0.3s ease;
          }

          .filter.active {
            background-color: #7857fe;
            color: #fff;
            box-shadow: 0 10px 30px rgba(120, 87, 254, 0.3);
          }

          .filter:hover {
            color: #000;
          }

          /* Image Grid from previous implementation */
          .custom-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(4, auto);
            gap: 15px;
            padding: 20px;
          }

          .item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
            display: block;
          }

          .i1 { grid-column: 1 / 2; grid-row: 1 / span 1; height: 280px; }
          .i2 { grid-column: 2 / 3; grid-row: 1 / span 2; height: 580px; }
          .i3 { grid-column: 3 / 4; grid-row: 1 / span 1; height: 280px; }
          .i4 { grid-column: 4 / 5; grid-row: 1 / span 2; height: 580px; }

          .i5 { grid-column: 1 / 2; grid-row: 2 / span 2; height: 580px; }
          .i6 { grid-column: 2 / 3; grid-row: 3 / span 1; height: 280px; }
          .i7 { grid-column: 3 / 4; grid-row: 2 / span 2; height: 580px; }
          .i8 { grid-column: 4 / 5; grid-row: 3 / span 1; height: 280px; }

          @media (max-width: 992px) {
            .custom-grid {
              grid-template-columns: repeat(2, 1fr);
              grid-template-rows: none;
            }

            .item {
              grid-column: auto !important;
              grid-row: auto !important;
              height: auto !important;
            }

            .title {
              font-size: 36px;
            }

            .filter-buttons {
              gap: 12px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Portfolio;
