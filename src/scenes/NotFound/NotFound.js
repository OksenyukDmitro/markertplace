import React from 'react';
import T from 'prop-types';
import s from './NotFound.module.scss';
import { Header } from '../../components';
import { Footer } from '../../components';
function NotFound() {
  return (
    <div><Header theme="light" />
    <div className={s.container}>
      
     <p className={s.text}>You went to a dangerous area. For your own safety, go back</p>
     
    </div>
    <Footer  />
    </div>
  );
}

NotFound.propTypes = {};

export default NotFound;
