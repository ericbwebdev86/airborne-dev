import React from 'react';


export default function Nav() {
return(
    <header>
    <div className="bg-dark text-light">
        <a className="text-center nav-link text-light display-6" href="#">Airborne-Dev</a>
        <ul className="nav nav-fill justify-content-center">
          <li className="nav-item">
            <a className="nav-link active text-light lead" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light lead" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light lead" href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light lead" href="#">Resume</a>
          </li>
        </ul>
      </div>
</header>
)
};