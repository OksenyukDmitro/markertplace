import React from 'react';
import s from './ProductsList.module.scss';
import test from '../../Images/test.jpg';
import heart from '../../Images/greyHeart.svg';
import greenHeart from '../../Images/greenHeart.svg';
import { isBookmarks } from '../../helpers/bookmarks';
import Footer from '../Footer/Footer';

const ProductsList = ({
  viewer,
  item,
  addToBookmarks,
  openProduct,
  isBookmark,
  lightBack,
  location
}) => { if (!viewer) {
  viewer = {
    id: 'guest',
  };    
}
  if (item && viewer) isBookmark = isBookmarks(viewer.id, item.id);
 
  if(!isBookmark && location.pathname==="/bookmarks")
  return null
console.log(location.pathname);
  return (
    <div className={lightBack ? s.floatLight : s.pfloat}>
      <div className={s.pfloatIn} onClick={openProduct}>
        <div>
          <div className={s.imgContainer}>
            <img
              className={s.pimg}
              src={
                Array.isArray(item.photos) && item.photos.length > 0
                  ? item.photos[0]
                  : test
              }
            />
          </div>
          <div className={s.itemContainer}>
            <div className={s.pname}>{item.title}</div>
            <div className={s.pprice}>${item.price}</div>
          </div>
        </div>
      </div>
      <img
        className={s.padd}
        src={isBookmark ? greenHeart : heart}
        onClick={addToBookmarks}
      />
    </div>
  );
};

export default ProductsList;
