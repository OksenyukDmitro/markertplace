import { handleActions } from '@letapp/redux-actions';
import * as actions from './productsActions';

const INITIAL_STATE = {
  latest: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  addProduct: {
    product: [],
    isLoading: false,
    isError: false,
    error: null,
  },
 
  product: {
  
    isLoading: false,
    isError: false,
    error: null,
  },
};

export default handleActions(
  {
    [actions.fetchLatest.start]: (state) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [actions.fetchLatest.success]: (state, action) => ({
      ...state,
      
      latest: {
        ...state.latest,
        isLoading: false,
        items: action.payload.result,
      },

    }),
    [actions.fetchLatest.error]: (state, action) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
 
    [actions.addProduct.start]: (state) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [actions.addProduct.success]: (state, action) => ({
      ...state,
      
      addProduct: {
        ...state.addProduct,
        isLoading: false,
      },

    }),
    [actions.addProduct.error]: (state, action) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  
    [actions.fetchProduct.start]: (state) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [actions.fetchProduct.success]: (state, action) => ({
      ...state,
      
      product: {
        ...state.product,
        isLoading: false,
       
      },

    }),
    [actions.fetchProduct.error]: (state, action) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  INITIAL_STATE,
);
