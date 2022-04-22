import React, { useState } from 'react';
import Nav from '../Nav';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import Footer from '../Footer';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('About');
  
    
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      return <Resume />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        
        <header>
            <div className="bg-dark text-light">
        <p className="text-center nav-link text-light display-6" >Eric Bates</p>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
        </header>
        
        {renderPage()}
        <Footer></Footer>
      </div>
    );
  }