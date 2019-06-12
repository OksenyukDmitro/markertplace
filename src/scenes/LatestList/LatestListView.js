import React from 'react';
import T from 'prop-types';
import s from './LatestList.module.scss';
import { Header } from '../../components';
import { Footer } from '../../components';
import { SearchBox } from '../../components';
import { ProductsList } from '../../components';


function LatestList({ list, isLoading, }) {
  
  if(isLoading) return (<div>Loading</div>);
  return (
    <div >
      <Header>
        <SearchBox />
      </Header>
      <div className={s.bossContainer}>
      <div className={s.container}>
     
        {list.map((item) => (
         <ProductsList item={item}/>
        ))}
      </div>
      </div>
      <Footer />
    </div>
    
  );
}

LatestList.propTypes = {};

export default LatestList;
