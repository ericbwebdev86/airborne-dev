import React from 'react';


export default function Nav({ currentPage, handlePageChange }) {
return(
    <header>
    <div className="bg-dark text-light">
        <p className="text-center nav-link text-light display-6" >Eric Bates</p>
        <ul className="nav nav-fill justify-content-center text-light">
          <li className="nav-item">
            <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active lead' : 'nav-link lead'}>About</a>
          </li>
          <li className="nav-item">
            <a  href="#Portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active lead' : 'nav-link lead'}>Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#Contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active lead' : 'nav-link lead'}>Contact</a>
          </li>
          <li className="nav-item">
            <a href="#Resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active lead' : 'nav-link lead'}>Resume</a>
          </li>
        </ul>
      </div>
</header>
)
};