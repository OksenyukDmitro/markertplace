import React from 'react';
import T from 'prop-types';
import s from './UserProducts.module.scss';
import { Header, SingleProduct } from '../../components';
import { Footer } from '../../components';
import { SearchBox } from '../../components';
import { ProductsList } from '../../components';


function UserProductsView({ items, isLoading, }) {
  
  if(isLoading ) return (<div>Loading</div>);
  return (
    <div >
      <Header>
        <SearchBox />
      </Header>
      <div className={s.bossContainer}>
      <div className={s.container}>
     
        {items.map((item) => (
         <SingleProduct item={item}/>
        ))}
      </div>
      </div>
      <Footer />
    </div>
    
  );
}

UserProductsView.propTypes = {};

export default UserProductsView;
