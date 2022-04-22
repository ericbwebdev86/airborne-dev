import React from 'react';


export default function Nav({ currentPage, handlePageChange }) {
return(
        <ul className="nav nav-fill justify-content-center text-light">
          <li className="nav-item">
            <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active text-success text-decoration-underline fw-bold lead' : 'nav-link lead text-light'}>About</a>
          </li>
          <li className="nav-item">
            <a  href="#Portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active lead text-success text-decoration-underline fw-bold' : 'nav-link lead text-light'}>Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#Contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active lead text-success text-decoration-underline fw-bold' : 'nav-link lead text-light'}>Contact</a>
          </li>
          <li className="nav-item">
            <a href="#Resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active lead text-success text-decoration-underline fw-bold' : 'nav-link lead text-light'}>Resume</a>
          </li>
        </ul>
)
};