import React from 'react';

function Project({ project, index }) {
  return (
      <div className={project.class} key={`k${index}`}>
        <div className='box3'>
        <a href = {project.deployment}> {project.name} </a><br></br><br></br><br></br><br></br>
        <a className='h3' href = {project.repo}>GitHub: {project.description}</a>
        <h2>Technologies: {project.tech}</h2>
        </div>
      </div>
  );
}

export default Project;
