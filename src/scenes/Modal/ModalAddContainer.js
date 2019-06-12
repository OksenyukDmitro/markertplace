import React from 'react';

import { routes } from '../router';
import { compose, withStateHandlers, withHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';
import { productsOperations } from '../../modules/products';

import {  generatePath } from 'react-router-dom';
function mapStateToProps(state) {
  return {
    isLoading: state.auth.login.isLoading,
    isError: state.auth.login.isError,
  };
}
const mapDispatchToProps = {
  addProduct: productsOperations.addProduct,
};
const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),

  
  withHandlers({
    
    handleAddProduct: (props) => async (fields) => {
     
      
    if(fields.description.trim().length===0)
    fields.description=undefined;
    if(fields.price.trim().length===0)
    fields.price=0;
   

    const product = await props.addProduct(fields);
   
    if(product&&product.id){
    props.history.push({
      pathname: generatePath(routes.products, { id: product.id} ),
    
       
    });}
    else{
      props.history.push(routes.home)}
    },
    handlCheck: (props) => () => {
      console.log(props.fields);
      console.log(props.fields.photos);
    },
  }),
);


export default enhancer;
