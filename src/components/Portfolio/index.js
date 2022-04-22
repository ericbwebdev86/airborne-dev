import React from 'react';



export default function Portfolio() {
  
    return(
        <div className="about-img">
        <div className=" about-container"> 
            <div className="border border-dark border-2 rounded-3 container bg-dark text-dark">
                <h2 className="text-center text-light display-4 mt-2 mb-5">My Portfolio</h2>
                <div className="row">
                    <div className="col">
                        <div className="card mt-2 mb-2 card-width" >
                            <img src="./assets/images/3-guys.JPG" className="card-img-top" alt="screenshot of 3-guys-pizza-n-pies website"/>
                            <div className="card-body">
                              <h5 className="card-title">3-guys-pizza-n-pies</h5>
                              <p className="card-text">Fullstack group project: eCommerce site built with mysql, handlebars, express, and node.</p>
                              <a href="https://github.com/ericbwebdev86/3-guys-pizza-n-pies" className="btn me-2 btn-success">Github Repo</a>
                              <a href="https://agile-bastion-05286.herokuapp.com/" className="btn btn-success">Deployed App</a>
                            </div>
    </div>
                          
                    </div>
                    <div className="col">
                        <div className="card mt-2 mb-2 card-width" >
                        <img src="./assets/images/erics-tech-talk.JPG" className="card-img-top" alt="screeshot of erics-tech-talk"/>
                        <div className="card-body">
                          <h5 className="card-title">erics-tech-talk</h5>
                          <p className="card-text">This is a fullstack blog site: built with mysql, handlebars, express, and node.</p>
                          <a href="https://github.com/ericbwebdev86/erics-tech-talk" className="btn btn-success me-2">Github Repo</a>
                              <a href="https://enigmatic-tor-99381.herokuapp.com/" className="btn btn-success">Deployed App</a>
                        </div>
                      </div>  
                    </div>
                    <div className="col">
                        <div className="card mt-2 mb-2 card-width" >
                        <img src="./assets/images/code-quiz.JPG" className="card-img-top" alt="screeshot of code-quiz"/>
                        <div className="card-body">
                          <h5 className="card-title">code-quiz</h5>
                          <p className="card-text">Front-end project. Uses HTML, CSS, and JavaScript, specifically dom manipulation and local storage.</p>
                          <a href="https://github.com/ericbwebdev86/code-quiz" className="btn btn-success me-2">Github Repo</a>
                              <a href="https://ericbwebdev86.github.io/code-quiz/" className="btn btn-success">Deployed App</a>
                        </div>
                      </div>  
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card mt-2 mb-2 card-width" >
                            <img src="./assets/images/work-day-scheduler.JPG" className="card-img-top" alt="screeshot of work-day-scheduler"/>
                            <div className="card-body">
                              <h5 className="card-title">work-day-scheduler</h5>
                              <p className="card-text">Front-end project. Uses HTML, CSS, JavaScript, Bootstrap, jQuery, Momnentjs, and FontAwesome.</p>
                              <a href="https://github.com/ericbwebdev86/work-day-scheduler" className="btn btn-success">Github Repo</a>
                              <a href="https://ericbwebdev86.github.io/work-day-scheduler/" className="btn btn-success">Deployed App</a>
                            </div>
                          </div>
                    </div>
                    <div className="col">
                        <div className="card mt-2 mb-2 card-width" >
                        <img src="./assets/images/elegant-art.JPG" className="card-img-top" alt="screeshot of elegant-art"/>
                        <div className="card-body">
                          <h5 className="card-title">elegant-art</h5>
                          <p className="card-text">Front-end project. This a website made for family. HTML, CSS, JavaScript, Bootstrap. Unfinished.</p>
                          <a href="https://github.com/ericbwebdev86/elegant-art" className="btn btn-success me-2">Github Repo</a>
                              <a href="http://elegantarte.com/" className="btn btn-success">Deployed App</a>
                        </div>
                      </div>  
                    </div>
                    <div className="col">
                        <div className="card mt-2 mb-2 card-width" >
                        <img src="./assets/images/note-taker.JPG" className="card-img-top" alt="screeshot of memo-saver"/>
                        <div className="card-body">
                          <h5 className="card-title">memo-saver</h5>
                          <p className="card-text">Front-end project. Made with HTML, CSS, JavaScript, and ExpressJS.</p>
                          <a href="https://github.com/ericbwebdev86/memo-saver" className="btn btn-success me-2">Github Repo</a>
                              <a href="https://github.com/ericbwebdev86/memo-saver" className="btn btn-success">Deployed App</a>
                        </div>
                      </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};