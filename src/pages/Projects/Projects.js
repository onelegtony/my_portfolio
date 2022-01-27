import React from 'react';

import './Projects.css';

import { projectsList } from './projectsList';
import ProjectBox from '../../components/ProjectBox/ProjectBox';

const Projects = () => {
  return (
    <section className='projects-page-ctr'>
      <h1>Projects</h1>
      <h3>Here’s some examples of work I’ve done.</h3>
      <div className='all-projects-container'>
        {projectsList.map((project) => {
          return <ProjectBox key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
