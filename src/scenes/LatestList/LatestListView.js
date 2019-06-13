import React from 'react';
import T from 'prop-types';
import s from './LatestList.module.scss';
import { Header } from '../../components';
import { Footer } from '../../components';
import { SearchBox } from '../../components';
import { ProductsList } from '../../components';


function LatestList({ list, isLoading,onChangeSearchText,searchText}) {
  
  if(isLoading) return (<div>Loading</div>);
  return (
    <div >
      <Header>
        <SearchBox onChange={onChangeSearchText}/>
      </Header>
      <div className={s.bossContainer}>
      <div className={s.container}>
     
        {list.map((item) => (
          ~item.title.indexOf(searchText)?
         <ProductsList item={item}/>:null
        ))}
      </div>
      </div>
      <Footer />
    </div>
    
  );
}

LatestList.propTypes = {};

export default LatestList;
