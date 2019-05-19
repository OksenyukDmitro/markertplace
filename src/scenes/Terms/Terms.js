import React from 'react';
import T from 'prop-types';
import s from './Terms.module.scss';
import { Header } from '../../components';
import { Footer } from '../../components';
function Terms() {
  return (
    <div className={s.container}>
      <Header theme="light" />
      Terms;
      <Footer />
    </div>
  );
}

Terms.propTypes = {};

export default Terms;
