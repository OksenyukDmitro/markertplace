import { createAsyncActions } from '@letapp/redux-actions';

export const fetchUser = createAsyncActions('user/FETCH_USER');

export const fetchUserProducts = createAsyncActions('user/FETCH_USER_PRODUCTS');
