import React from 'react';
import T from 'prop-types';
import s from './Bookmarks.module.scss';
import { Header, ProductsList } from '../../components';
import { Footer } from '../../components';
import { SearchBox } from '../../components';
import { getBookmarks } from '../../helpers/bookmarks';

function Bookmarks({viewer}) {
  let bookmarks
  if ( viewer)  bookmarks = getBookmarks(viewer.id);
  console.log(bookmarks);
  console.log(bookmarks);
  return (
    <div>
      <div className={s.container}>
        <Header>
          <SearchBox />
        </Header>
        <div >

          {bookmarks?bookmarks.map((item) => (
         <ProductsList item={item}/>
        )): null}
        </div>
      </div>

      <Footer />
    </div>
  );
}

Bookmarks.propTypes = {};

export default Bookmarks;
