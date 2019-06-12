
import React from 'react';
import T from 'prop-types';
import s from './AddProduct.module.scss';
import { Header } from '../../components';
import { Footer } from '../../components';
import { SearchBox } from '../../components';
import {Formik} from 'formik';
function AddProduct({list}) {

  return (
    <div className={s.container}>
      <Header>
        <SearchBox />
      </Header>
      <div>
        {list.map((item) => (
          <div key={item.id}>{item.title} </div>
        ))}
        ;
      </div>
      <Footer />
    </div>
  );
}

AddProduct.propTypes = {};

export default AddProduct;
