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
    [actions.viewer.start]: (state) => ({
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: true,
      },
    }),
    [actions.viewer.success]: (state, action) => ({
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
      },
      user: action.payload,
    }),
    [actions.viewer.error]: (state, action) => ({
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
