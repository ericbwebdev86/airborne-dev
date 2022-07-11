import React from 'react';



export default function Portfolio() {
  
    return(
        <div className="about-img">
        <div className=" about-container"> 
            <div className="border border-dark border-2 rounded-3 container bg-dark text-dark">
                <h2 className="text-center text-light display-4 mt-2 mb-5">My Portfolio</h2>
                <div className="row">
                <div className="col">
                        <div className="card mt-2 mb-2" >
                        <img src="./assets/images/my-outdoor-space.JPG" className="card-img-top" alt="screenshot of my-outdoor-space"/>
                        <div className="card-body">
                          <h5 className="card-title">My Outdoor Space</h5>
                          <p className="card-text text-start"><b>Description: </b>MERN Stack group project, forum site JWT, Bootstrap, GraphQL, ApolloServer, Concurrently</p>
                          <p className="card-text text-start"><b>Problem Solved: </b>Bringing people together to talk about their love of the great outdoors</p>
                          <a href="https://github.com/p-fassbender/my-outdoor-space" className="btn btn-success me-2 mb-2">
                            <p>Github Repo</p></a>
                              <a href="https://my-outdoor-space.herokuapp.com/" className="btn btn-success mb-2 me-2">
                              <p>
                              Deployed App
                              </p></a>
                        </div>
                      </div>  
                    </div>
                    <div className="col">
                        <div className="card mt-2 mb-2" >
                            <img src="./assets/images/3-guys.JPG" className="card-img-top" alt="screenshot of 3-guys-pizza-n-pies website"/>
                            <div className="card-body">
                              <h5 className="card-title">3-guys-pizza-n-pies</h5>
                              <p className="card-text text-start"><b>Description: </b>Fullstack group project: eCommerce site built with SQL/Sequelize, handlebars, ExpressJS, bcrypt and NodeJS.</p>
                              <p className="card-text text-start"><b>Problem Solved: </b>allows a fictitious company to take online orders</p>
                              <a href="https://github.com/ericbwebdev86/3-guys-pizza-n-pies" className="btn me-2 btn-success mb-2">
                            <p>Github Repo</p></a>
                              <a href="https://agile-bastion-05286.herokuapp.com/" className="btn btn-success mb-2 me-2">
                              <p>
                              Deployed App
                              </p></a>
                            </div>
    </div>
                          
                    </div>
                    {/* below */}
                    <div className="col">
                        <div className="card mt-2 mb-2" >
                        <img src="./assets/images/elegant-art.JPG" className="card-img-top" alt="screenshot of elegant-art"/>
                        <div className="card-body">
                          <h5 className="card-title">elegant-art</h5>
                          <p className="card-text text-start"><b>Description: </b>Front-end project. Made for a relative's art business. HTML, CSS, JavaScript, Bootstrap. Unfinished.</p>
                          <p className="card-text text-start"><b>Problem Solved: </b>My family member needs a site to show off her stained glass art to improve sales</p>
                          <a href="https://github.com/ericbwebdev86/elegant-art" className="btn btn-success me-2 mb-2">
                            <p>Github Repo</p></a>
                              <a href="http://elegantarte.com/" className="btn btn-success mb-2 me-2">
                              <p>
                              Deployed App
                              </p></a>
                        </div>
                      </div>  
                    </div>
                    {/* above */}
                </div>
                <div className="row">
                    <div className="col">
                        
                          <div className="card mt-2 mb-2" >
                        <img src="./assets/images/erics-tech-talk.JPG" className="card-img-top" alt="screenshot of erics-tech-talk"/>
                        <div className="card-body">
                          <h5 className="card-title">erics-tech-talk</h5>
                          <p className="card-text text-start"><b>Description: </b>This is a fullstack blog site: built with SQL/Sequelize, handlebars, ExpressJS, and NodeJS.</p>
                          <p className="card-text text-start"><b>Problem Solved: </b>helps technology enthusiasts come together and talk about all things tech</p>
                          <a href="https://github.com/ericbwebdev86/erics-tech-talk" className="btn btn-success me-2 mb-2">
                            <p>Github Repo</p></a>
                              <a href="https://enigmatic-tor-99381.herokuapp.com/" className="btn btn-success me-2 mb-2">
                              <p>
                              Deployed App
                              </p></a>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                    <div className="card mt-2 mb-2" >
                            <img src="./assets/images/work-day-scheduler.JPG" className="card-img-top" alt="screenshot of work-day-scheduler"/>
                            <div className="card-body">
                              <h5 className="card-title">work-day-scheduler</h5>
                              <p className="card-text text-start"><b>Description: </b>Front-end project. Uses HTML, CSS, JavaScript, Bootstrap, jQuery, Momnentjs, and FontAwesome.</p>
                              <p className="card-text text-start"><b>Problem Solved: </b>helps the user keep track of appointments during an 8 hour workday</p>
                              <a href="https://github.com/ericbwebdev86/work-day-scheduler" className="btn btn-success me-2 mb-2">
                            <p>Github Repo</p></a>
                              <a href="https://ericbwebdev86.github.io/work-day-scheduler/" className="btn btn-success me-2 mb-2">
                              <p>
                              Deployed App
                              </p></a>
                            </div>
                          </div>
                    </div>
                    <div className="col">
                        <div className="card mt-2 mb-2" >
                        <img src="./assets/images/code-quiz.JPG" className="card-img-top" alt="screenshot of code-quiz"/>
                        <div className="card-body">
                          <h5 className="card-title">code-quiz</h5>
                          <p className="card-text text-start"><b>Description: </b>Front-end project. Uses HTML, CSS, JavaScript, dom manipulation and local storage.</p>
                          <p className="card-text text-start"><b>Problem Solved: </b>enables JavaScript developers test their knowledge of basic JS</p>
                          <a href="https://github.com/ericbwebdev86/code-quiz" className="btn btn-success me-2 mb-2">
                            <p>Github Repo</p></a>
                              <a href="https://ericbwebdev86.github.io/code-quiz/" className="btn btn-success mb-2 me-2">
                              <p>
                              Deployed App
                              </p></a>
                        </div>
                      </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};