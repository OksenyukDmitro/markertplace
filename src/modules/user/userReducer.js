import { handleActions } from '@letapp/redux-actions';
import * as actions from './userActions';

const INITIAL_STATE = {
  fetchUser: {
    isError: false,
    isLoading: false,
    error: null,
  },
  userProducts: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  user: null,
};

export default handleActions(
  {
    [actions.fetchUser.start]: (state) => ({
        fetchUser: {
        ...state.fetchUser,
        isLoading: true,
      },
    }),
    [actions.fetchUser.success]: (state, action) => ({
      fetchUser: {
        ...state.fetchUser,
        isLoading: false,
      },
      user: action.payload.result,
    }),
    [actions.fetchUser.error]: (state, action) => ({
        fetchUser: {
        ...state.fetchUser,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
      user: null,
    }),
    [actions.fetchUserProducts.start]: (state) => ({
      ...state,
      userProducts: {
        ...state.userProducts,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [actions.fetchUserProducts.success]: (state, action) => ({
      ...state,
      
      userProducts: {
        ...state.userProducts,
        isLoading: false,
        items: action.payload.list,
      },

    }),
    [actions.fetchUserProducts.error]: (state, action) => ({
      ...state,
      userProducts: {
        ...state.userProducts,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
  },
  INITIAL_STATE,
);
