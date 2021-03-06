import React from 'react';
export default function Footer() {
    return(
        <footer className="text-light">
    <div className="bg-dark text-light">
        
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <p className="nav-link text-light" >&copy;2022 Made with &#9829; by Eric Bates</p>
            </li>
          <li className="nav-item">
            <a className="nav-link link text-light text-decoration-underline" href="https://github.com/ericbwebdev86">Github</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link text-light text-decoration-underline" href="https://www.linkedin.com/in/eric-b-247604108/">LinkedIn</a>
          </li>
        </ul>
      </div>
  </footer>
    )
}