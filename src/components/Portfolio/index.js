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
                            <img src="./assets/images/3-guys.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" className="btn btn-success">Github Repo</a>
                              <a href="#" className="btn btn-success">Deployed App</a>
                            </div>
                          </div>
                    </div>
                    <div className="col">
                        <div className="card mt-2 mb-2 card-width" >
                        <img src="./assets/images/erics-tech-talk.JPG" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-success">Github Repo</a>
                              <a href="#" className="btn btn-success">Deployed App</a>
                        </div>
                      </div>  
                    </div>
                    <div className="col">
                        <div className="card mt-2 mb-2 card-width" >
                        <img src="./assets/images/code-quiz.JPG" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-success">Github Repo</a>
                              <a href="#" className="btn btn-success">Deployed App</a>
                        </div>
                      </div>  
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card mt-2 mb-2 card-width" >
                            <img src="./assets/images/work-day-scheduler.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" className="btn btn-success">Github Repo</a>
                              <a href="#" className="btn btn-success">Deployed App</a>
                            </div>
                          </div>
                    </div>
                    <div className="col">
                        <div className="card mt-2 mb-2 card-width" >
                        <img src="./assets/images/elegant-art.JPG" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-success">Github Repo</a>
                              <a href="#" className="btn btn-success">Deployed App</a>
                        </div>
                      </div>  
                    </div>
                    <div className="col">
                        <div className="card mt-2 mb-2 card-width" >
                        <img src="./assets/images/note-taker.JPG" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-success">Github Repo</a>
                              <a href="#" className="btn btn-success">Deployed App</a>
                        </div>
                      </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};