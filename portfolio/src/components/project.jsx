import React from "react";

function Project ( ) {
    const projectList = [
        { name : 'Project 1', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'Project 2', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'Project 3', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'Project 4', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'Project 5', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'Project 6', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'Project 7', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'Project 8', description : 'This is the project description',imageUrl:'#', link : '#'},
    ]
    return ( 
        <React.Fragment>
            <div className='projects-section'>
                <h1>My Projects</h1>
                <div className="projects-grid">
                    {projectList.map((project, index) => (
                        <div className="projects-card" key={index}>
                            <h3>{project.name}</h3>
                            <img src="{project.imageUrl}"/>
                            <p>{project.description}</p>
                            <a href='{project.link}'>See Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
     );
}

export default Project;