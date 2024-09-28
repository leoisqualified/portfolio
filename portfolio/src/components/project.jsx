import React from "react";

function Project ( ) {
    const projectList = [
        { name : 'FIGMA PRODUCT DESIGN', description : 'Used Figma in Prototyping the website of DiamondTours'
        ,imageUrl:'#', link : '#'},
        { name : 'PROJECT-2', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'PROJECT-3', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'PROJECT-4', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'PROJECT-5', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'PROJECT-6', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'PROJECT-7', description : 'This is the project description',imageUrl:'#', link : '#'},
        { name : 'PROJECT-8', description : 'This is the project description',imageUrl:'#', link : '#'},
    ]
    return ( 
        <React.Fragment>
            <div className='projects-section'>
                <h1>My <i>Projects</i></h1>
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