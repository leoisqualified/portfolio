import React from "react";

/* import images */
import excel from '../assets/img/excel.png'


function Project() {
    const projectsList = [
        {
            title: "Project 1",
            description: "A data analysis project focusing on electricity comsumption in India",
            imageUrl: excel,
            link: "#"
        },
        {
            title: "Project 2",
            description: "A machine learning project predicting customer churn.",
            imageUrl: '#',
            link: "#"
        },
        {
            title: "Project 3",
            description: "A web scraping project to collect data from various websites.",
            imageUrl: '#',
            link: "#"
        }
    ];

    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projectsList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.imageUrl} />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} className="project-link">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;
