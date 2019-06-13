import { createAsyncActions } from '@letapp/redux-actions';

export const fetchLatest = createAsyncActions('products/FETCH_LATEST');

export const addProduct = createAsyncActions('products/ADD_PRODUCT');

export const fetchProduct = createAsyncActions('products/FETCH_PRODUCT');

export const fetchBookmarksProduct = createAsyncActions('products/FETCH_BOOKMARKS_PRODUCT');

export const fetchBookmarks = createAsyncActions('products/FETCH_BOOKMARKS');
