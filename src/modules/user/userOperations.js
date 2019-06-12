
import * as actions from './userActions'
import Api, { schemas } from '../../api';
import { normalize } from 'normalizr';

export function fetchUser(id) {
  return async function fetchUserThunk(dispatch) {
    try {
      dispatch(actions.fetchUser.start());

      const res = await Api.user.get(id);
      const {result, entities}= normalize(res.data,schemas.User)

     
      dispatch(actions.fetchUser.success({result, entities}));
    } catch (err) {
      dispatch(actions.fetchUser.error({ message: err.message }));
    }
  };
}

export function fetchUserProducts(id) {
  return async function fetchUserProductsThunk(dispatch) {
    try {
      dispatch(actions.fetchUserProducts.start());

      const res = await Api.Products.getUserProducts(id);
     
     //debugger
     // const {result, entities}= normalize(res.data,schemas.UserProducts);
     console.log("res.data");
     console.log(res.data);
      dispatch(actions.fetchUserProducts.success(res.data));
    } catch (err) {
      dispatch(actions.fetchUserProducts.error({ message: err.message }));
    }
  };
}