import React from 'react';
import './Project.css';
import ProjectTitle from './ProjectComponents/ProjectTitle';
import ProjectCards from './ProjectComponents/ProjectCards';

const Project = () => {
  return (
    <div className='projects'>
        <div className='container'>
          <ProjectTitle/>
          <ProjectCards/>
        </div>
    </div>
  )
}

export default Project