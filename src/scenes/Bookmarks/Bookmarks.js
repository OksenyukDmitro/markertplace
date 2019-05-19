import React from 'react';
import T from 'prop-types';
import s from './Bookmarks.module.scss';
import { Header } from '../../components';
import { Footer } from '../../components';
import { SearchBox } from '../../components';

function Bookmarks() {
  return (
    <div className={s.container}>
      <Header >
        <SearchBox />
      </Header>
      <div className={s.text}>Bookmarks;</div>
      <Footer />
    </div>
  );
}

Bookmarks.propTypes = {};

export default Bookmarks;
