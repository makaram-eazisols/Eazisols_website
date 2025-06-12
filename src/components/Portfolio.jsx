import React, { useState } from 'react';
import portfolio1 from '../assets/portfolio1.jpg';
import portfolio2 from '../assets/portfolio2.jpg';
import portfolio3 from '../assets/portfolio3.jpg';
import portfolio4 from '../assets/portfolio4.jpg';
import portfolio5 from '../assets/portfolio5.jpg';
import portfolio6 from '../assets/portfolio6.jpg';
import portfolio7 from '../assets/portfolio7.jpg';
import portfolio8 from '../assets/portfolio8.jpg';

const portfolioItems = [
  { id: 1, image: portfolio1, category: 'Web Design', className: 'i1' },
  { id: 2, image: portfolio2, category: 'Mobile App', className: 'i2' },
  { id: 3, image: portfolio3, category: 'Branding', className: 'i3' },
  { id: 4, image: portfolio4, category: 'Web Development', className: 'i4' },
  { id: 5, image: portfolio5, category: 'Web Development', className: 'i5' },
  { id: 6, image: portfolio6, category: 'Web Development', className: 'i6' },
  { id: 7, image: portfolio7, category: 'SEO', className: 'i7' },
  { id: 8, image: portfolio8, category: 'SEO', className: 'i8' },
];

const filters = ['All', 'Web Design', 'Web Development', 'Branding', 'Mobile App', 'SEO'];

const Portfolio = () => {

  const [activeFilter, setActiveFilter] = useState('All'); 

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);



  return (
    <>
      <div className="portfolio-header">
        <p className="subtitle">PROJECTS</p>
        <h2 className="title">OUR PORTFOLIO</h2>
        <div className="filter-buttons">
            {filters.map((filter) => (
            <button
              key={filter}
              className={`filter ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
          {/* <button className="filter active">All</button>
          <button className="filter">Web Design</button>
          <button className="filter">Web Development</button>
          <button className="filter">Branding</button>
          <button className="filter">Mobile App</button>
          <button className="filter">SEO</button> */}
        </div>
      </div>

      <div className={`custom-grid ${activeFilter !== 'All' ? 'filtered-mode' : ''}`}>
        {filteredItems.map((item) => (
          <div key={item.id} className={`item ${item.className}`}>
            <img src={item.image} alt={`Portfolio ${item.id}`} />
          </div>
        ))}
        {/* <div className="item i1"><img src={portfolio1} alt="1" /></div>
        <div className="item i2"><img src={portfolio2} alt="2" /></div>
        <div className="item i3"><img src={portfolio3} alt="3" /></div>
        <div className="item i4"><img src={portfolio4} alt="4" /></div>
        <div className="item i5"><img src={portfolio5} alt="5" /></div>
        <div className="item i6"><img src={portfolio6} alt="6" /></div>
        <div className="item i7"><img src={portfolio7} alt="7" /></div>
        <div className="item i8"><img src={portfolio8} alt="8" /></div> */}
      </div>

      <style>{`
        /* Header section styling */
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

        /* Filter Buttons */
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

        .custom-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          padding: 40px;
        }

        .item {
          opacity: 0;
          transform: scale(0.95);
          animation: fadeIn 0.5s forwards;
        }

        .item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
          display: block;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
        .i1 { grid-column: 1 / 2; grid-row: 1 / span 1; height: 280px; }
        .i2 { grid-column: 2 / 3; grid-row: 1 / span 2; height: 580px; }
        .i3 { grid-column: 3 / 4; grid-row: 1 / span 1; height: 280px; }
        .i4 { grid-column: 4 / 5; grid-row: 1 / span 2; height: 580px; }

        .i5 { grid-column: 1 / 2; grid-row: 2 / span 2; height: 580px; }
        .i6 { grid-column: 2 / 3; grid-row: 3 / span 1; height: 280px; }
        .i7 { grid-column: 3 / 4; grid-row: 2 / span 2; height: 580px; }
        .i8 { grid-column: 4 / 5; grid-row: 3 / span 1; height: 280px; }

      .filtered-mode .item {
      grid-column: auto !important;
      grid-row: auto !important;
       height: auto !important;
        }

        @media (max-width: 992px) {
          .custom-grid {
            grid-template-columns: repeat(2, 1fr);
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
      `}</style>
    </>
  );
};

export default Portfolio;
