import React from 'react';

import './ProjectBox.css';
import nextjs_icon from '../../static/nextjs_icon.png';

import {
  SiReact,
  SiReactrouter,
  SiRedux,
  SiJavascript,
  SiNodedotjs,
  SiSass,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
} from 'react-icons/si';

const technologiesIcons = {
  react: <SiReact key={1} />,
  router: <SiReactrouter key={2} />,
  redux: <SiRedux key={3} />,
  javascript: <SiJavascript key={4} />,
  nodejs: <SiNodedotjs key={5} />,
  sass: <SiSass key={6} />,
  css: <SiCss3 key={7} />,
  html: <SiHtml5 key={8} />,
  tailwindcss: <SiTailwindcss key={9} />,
  nextjs: (
    <img src={nextjs_icon} alt='next.js icon' width='16' height='16' key={10} />
  ),
};

const ProjectBox = ({ name, description, github, demo, technologies }) => {
  return (
    <div className='project-box-ctr'>
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
      <div>
        <div className='project-buttons'>
          <a
            href={github}
            className='project-btn'
            target='_blank'
            rel='noreferrer'
          >
            Source
          </a>
          {demo !== '' && (
            <a
              href={demo}
              className='project-btn'
              target='_blank'
              rel='noreferrer'
            >
              Demo
            </a>
          )}
        </div>
        <hr />
        <div className='project-technologies'>
          <small>Made with:</small>
          <div className='technologies-icons-ctr'>
            {technologies.map((tech) => {
              return technologiesIcons[tech];
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
