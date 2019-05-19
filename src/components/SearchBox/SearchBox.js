import React from 'react';
import s from './SearchBox.module.scss';
const SearchBox = (props) => {
  return (
    <div className={s.container}>
      <input type="text" className={s.search} placeholder="Search products by name" />
      <input type="text" className={s.searchLocation} placeholder="Location" />

      <button type="submit" className={s.btn}>Search </button>
    </div>
  );
};

export default SearchBox;
