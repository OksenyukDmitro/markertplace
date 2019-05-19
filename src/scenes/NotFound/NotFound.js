import React from 'react';
import T from 'prop-types';
import s from './NotFound.module.scss';
import { Header } from '../../components';
import { Footer } from '../../components';
function NotFound() {
  return (
    <div className={s.container}>
      <Header theme="light" />
      NotFound;
      <Footer theme="light" />
    </div>
  );
}

NotFound.propTypes = {};

export default NotFound;
