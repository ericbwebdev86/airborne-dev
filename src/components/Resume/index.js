import React from 'react';

export default function Resume() {
    return (
        <div className="about-img">
    <div className="about-container container"> 
        <div className="border border-dark border-2 rounded-3 container bg-dark text-light col-12 col-lg-6">
            
                <h2 className="mt-2 mb-2 text-center">Resume</h2>
                <a className="text-decoration-none text-success fw-bold text-decoration-underline" href="./assets/docs/EricBates-Resume-Oct20.docx" download><i class="fa-solid fa-file"></i></a>
                <p className="text-center lead">Click the icon above for a copy of my resume.</p>
                <div className="row mb-2">
                    <div className="col">
                        <h3>Front-End Proficiencies</h3>
                        <ul className="list-group">
                            <li className="list-group-item bg-dark text-light">HTML5</li>
                            <li className="list-group-item bg-dark text-light">CSS3</li>
                            <li className="list-group-item bg-dark text-light">JavaScript</li>
                            <li className="list-group-item bg-dark text-light">jQuery</li>
                            <li className="list-group-item bg-dark text-light">Responsive Design</li>
                            <li className="list-group-item bg-dark text-light">Bootstrap</li>
                            <li className="list-group-item bg-dark text-light">React</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Back-End Proficiencies</h3>
                        <ul classNmae="list-group">
                            <li className="list-group-item bg-dark text-light">APIs</li>
                            <li className="list-group-item bg-dark text-light">REST</li>
                            <li className="list-group-item bg-dark text-light">Express</li>
                            <li className="list-group-item bg-dark text-light">Node</li>
                            <li className="list-group-item bg-dark text-light">MySQL/Sequelize</li>
                            <li className="list-group-item bg-dark text-light">MongoDB/Mongoose</li>
                            <li className="list-group-item bg-dark text-light">Express Handlebars</li>
                        </ul>
                    </div>
                </div>
        </div>
    </div>
</div>
    )
}