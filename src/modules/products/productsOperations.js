import * as actions from './productsActions';
import Api, { schemas } from '../../api';
import { normalize } from 'normalizr';

export function fetchLatest() {
  return async function fetchLatestThunk(dispatch) {
    try {
      dispatch(actions.fetchLatest.start());

      const res = await Api.Products.getLatest();

      const { result, entities } = normalize(
        res.data,
        schemas.ProductList,
      );

      dispatch(actions.fetchLatest.success({ result, entities }));
    } catch (err) {
      dispatch(actions.fetchLatest.error({ message: err.message }));
    }
  };
}

export function fetchProduct(id) {
  return async function fetchProductThunk(dispatch) {
    try {
      dispatch(actions.fetchProduct.start());

      const res = await Api.Products.Product(id);

      const { entities } = normalize(res.data, schemas.Product);
      
      dispatch(actions.fetchProduct.success({ entities }));
    } catch (err) {
      dispatch(actions.fetchProduct.error({ message: err.message }));
    }
  };
}
export function addProduct(body) {
  return async function addProducttThunk(dispatch) {
    try {
      dispatch(actions.addProduct.start());

      const res = await Api.Products.addProduct(body);

      dispatch(actions.addProduct.success(res.data));
      return res.data;
    } catch (err) {
      dispatch(actions.addProduct.error({ message: err.message }));
    }
  };
}
