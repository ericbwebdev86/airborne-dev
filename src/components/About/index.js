import React from 'react';

export default function About() {
    return(
    <div className="about-img">
    <div className=" about-container container-fluid"> 
        <div className="border border-dark border-2 rounded-3 container bg-dark text-light col-12 col-md-6">
            <h1 className=" about-text">Hi, I'm Eric</h1>
            <img className="pt-2 pb-2 rounded-circle"src="./assets/images/eric-small.jpg" alt=""/>
            <p className="about-text">Front-End Web Developer and US ARMY veteran with over 17 years of experience in IT support, ready to build a more intuitive user experience on the web. Recently earned a certificate in Full-Stack Web Development from the University of Wisconsin Coding Bootcamp. Developed skills in JavaScript, CSS, NodeJS, ExpressJS, MongoDB, and React.js—known as an innovative problem-solver, passionate about developing apps, focusing on mobile-first design and development. Leading each project to best engage my audience for an impactful user experience—applied UX and agile development aspects in a recent project. Worked on a team of three to develop a multi-page full-stack web app; that allows customers to authenticate, order food, checkout, and leave reviews. Excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.</p>
        </div>
    </div>
</div>
    )
};