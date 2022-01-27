import React from 'react';
import { Link } from 'react-router-dom';

import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiSass,
  SiCss3,
  SiHtml5,
  SiGit,
  SiNpm,
  SiGithub,
  SiFigma,
} from 'react-icons/si';

import './Home.css';

const Home = () => {
  return (
    <section className='home-page-ctr'>
      <h1>Hi! My name is Sasha.</h1>
      <p>
        I am a{' '}
        <a
          href='https://www.linkedin.com/in/alexander-cozub/'
          target='_blank'
          rel='noreferrer'
          className='text-link'>
          Web Developer
        </a>{' '}
        based in <strong>Oslo, Norway</strong>.
        <br />
        I love programming and its ability to bring ideas to life!
        <br />I am currently{' '}
        <a
          href='https://www.codecademy.com/profiles/sashacozub'
          target='_blank'
          rel='noreferrer'
          className='text-link'>
          learning
        </a>{' '}
        Full Stack Development to change careers.
        <br />
        Check out my{' '}
        <Link to='/projects' className='text-link'>
          projects
        </Link>{' '}
        to see some of my latest work!
        <br />
        Or just send me a{' '}
        <Link to='/contact' className='text-link'>
          message
        </Link>{' '}
        for a chat!
      </p>
      <h5>Here are some of the main skills I have:</h5>
      <div>
        {/* Add skill name on hover */}
        <SiReact className='skill-icon' />
        <SiRedux className='skill-icon' />
        <SiJavascript className='skill-icon' />
        <SiSass className='skill-icon' />
        <SiCss3 className='skill-icon' />
        <SiHtml5 className='skill-icon' />
        <SiGit className='skill-icon' />
        <SiNpm className='skill-icon' />
        <SiGithub className='skill-icon' />
        <SiFigma className='skill-icon' />
      </div>
    </section>
  );
};

export default Home;
