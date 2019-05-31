import React from 'react';
import T from 'prop-types';
import s from './Home.module.scss';
import { Header } from '../../components';
import { Footer } from '../../components';
import { SearchBox } from '../../components';

function Home() {
  return (
    <div className={s.container}>
      <Header />
      <Footer />
    </div>
  );
}

Home.propTypes = {};

export default Home;
