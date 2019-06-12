import { handleActions } from '@letapp/redux-actions';
import * as actions from './viewerActions';

const INITIAL_STATE = {
  fetchViewer: {
    isError: false,
    isLoading: false,
    error: null,
  },
  user: null,
};

export default handleActions(
  {
    [actions.fetchViewer.start]: (state) => ({
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: true,
      },
    }),
    [actions.fetchViewer.success]: (state, action) => ({
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
      },
      user: action.payload,
    }),
    [actions.fetchViewer.error]: (state, action) => ({
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
      user: null,
    }),
    [actions.logout.start]: (state) => ({
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: true,
      },
    }),
    [actions.logout.success]: (state, action) => ({
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
      },
      user: null,
    }),
    [actions.logout.error]: (state, action) => ({
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
      user: null,
    }),
  },
  INITIAL_STATE,
);
