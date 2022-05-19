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
            <a className="nav-link text-light" href="https://github.com/ericbwebdev86"><i class="fa-brands fa-github-square"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="https://www.linkedin.com/in/eric-b-247604108/"><i class="fa-brands fa-linkedin"></i></a>
          </li>
        </ul>
      </div>
  </footer>
    )
}