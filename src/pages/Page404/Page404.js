import React from 'react';
import { Link } from 'react-router-dom';

import './Page404.css';

import image404 from '../../static/image404.gif';
import Button from '../../components/Button/Button';

const Page404 = () => {
  return (
    <section className='error-page-ctr'>
      <h1>Oops!</h1>
      <h3>Seems like something went wrong...</h3>
      <img src={image404} alt='' />
      <Link to='/home'>
        <Button type='button' value='Back Home' />
      </Link>
    </section>
  );
};

export default Page404;
