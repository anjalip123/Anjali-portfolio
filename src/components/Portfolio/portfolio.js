import React from 'react'
import './portfolio.css'
import  Data from '../../Data/project.json'
import { Fade } from 'react-awesome-reveal';

function Portfolio() {
    const projects = Data.projects || [];
    console.log(projects);
    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="projectImage">
            <Fade direction="top">
                {projects.map((project, index) => (
                    <a key={index} href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <img src={process.env.PUBLIC_URL + project.imgSrc} alt={`Project ${index + 1}`} className="project-image" />
                    </a>
                ))}
                </Fade>
            </div>
            
        </section>
    );
};

export default Portfolio
