import React from 'react';
import T from 'prop-types';
import s from './Bookmarks.module.scss';
import { Header, ProductsList } from '../../components';
import { Footer } from '../../components';
import { SearchBox } from '../../components';
import { getBookmarks, isBookmarks } from '../../helpers/bookmarks';
import { productsOperations, productsSelectors } from '../../modules/products';

function Bookmarks({ viewer, items, fetchBookmarksProduct}) {
  if (!viewer) {
    viewer = {
      id: 'guest',
    };
   const itemsId = getBookmarks(viewer.id);
    fetchBookmarksProduct(itemsId);   
  }
 
  return (
    <div>
      <div>
        <Header>
          <SearchBox />
        </Header>
        <div className={s.container}>
          {items
            ? items.map((item) =>
                viewer && isBookmarks(viewer.id, item.id) ? (
                  <ProductsList item={item} />
                ) : null,
              )
            : null}
        </div>
      </div>

      <Footer />
    </div>
  );
}

Bookmarks.propTypes = {};

export default Bookmarks;
