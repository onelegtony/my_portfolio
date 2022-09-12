import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './About.css';

import { codingSince } from '../../utils/codingSince';

const About = () => {
  const [codingDays, setCodingDays] = useState('____');

  useEffect(() => {
    setCodingDays(codingSince());
  }, []);

  return (
    <section className='about-page-ctr'>
      <h1>About me</h1>
      <h3>Developer, gamer, movies lover, geek.</h3>
      <div className='about-text-ctr'>
        <p>
          Hi! My name is Sasha, I am a developer based in Oslo, Norway.
          <br />
          Recently I have rediscovered the world of programming and now I am
          studying Computer Science to change careers. At the moment I am
          working in service industry, but also had a taste of sales,
          photography and videography.
          <br />I am obsessed with technology, quality games and movies. If I am
          not working, I study, but when I don't, I get lost in magical worlds
          of fantasy.
          <br />I am always happy to have a chat, so feel free to send me a{' '}
          <Link to='/contact' className='text-link'>
            message
          </Link>
          !
        </p>
      </div>
    </section>
  );
};

export default About;
