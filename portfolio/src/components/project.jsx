import React from "react";

function Project ( ) {
    const projectList = [
        { name : 'Project 1', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'Project 1', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'Project 1', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'Project 1', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'Project 1', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'Project 1', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'Project 1', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'Project 1', description : 'This is the project description',imageUrl:'#', link : '#'},
    ]
    return ( 
        <React.Fragment>
            <div className='projects-section'>
                <h1>My Projects</h1>
                <div className="projects-grid">
                    {projectList.map((project, index) => (
                        <div className="projects-card" key={index}>
                            <h3>{project.name}</h3>
                            <p>{project.imageUrl}</p>
                            <p>{project.description}</p>
                            <p>{project.link}</p>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
     );
}

export default Project;