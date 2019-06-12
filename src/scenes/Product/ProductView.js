import React from 'react';
import s from './Product.module.scss';
import { Header, SingleProduct } from '../../components';
import { Footer } from '../../components';
import { SearchBox } from '../../components';

function ProductView({  item, isLoading, ...props }) {
  //const item = props.location.state.item;

  
  console.log(props.match.params.id);
  if (isLoading) return <div>Loading</div>;
  return (
    <div>
      <Header>
        <SearchBox />
      </Header>
      <div className={s.bossContainer}>
        <div className={s.container}>
          <SingleProduct item={item} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

ProductView.propTypes = {};

export default ProductView;
