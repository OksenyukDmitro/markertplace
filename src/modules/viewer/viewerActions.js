import { createAsyncActions } from '@letapp/redux-actions';

export const fetchViewer = createAsyncActions('viewer/FETCH_USER');

export const logout = createAsyncActions('viewer/LOGOUT');
