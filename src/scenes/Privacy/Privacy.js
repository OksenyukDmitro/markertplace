import React from 'react';
import T from 'prop-types';
import s from './Privacy.module.scss';
import { Header } from '../../components';
import { Footer } from '../../components';
function Privacy() {
  return (
    <div className={s.container}>
      <Header theme="light" />
      Privacy;
      <Footer />
    </div>
  );
}

Privacy.propTypes = {};

export default Privacy;
