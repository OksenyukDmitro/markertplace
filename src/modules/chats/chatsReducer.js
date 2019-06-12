import { handleActions } from '@letapp/redux-actions';
import * as actions from './chatsActions';

const INITIAL_STATE = {
  items: [],
  createChat: {
    isLoading: false,
    isError: false,
    error: null,
  },
  fetch: {
    isLoading: false,
    isError: false,
    error: null,
  },
};

export default handleActions(
  {
    [actions.createChat.start]: (state) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [actions.createChat.success]: (state, action) => ({
      ...state,
      items:[action.payload.result].concat(state.items),
      createChat: {
        ...state.createChat,
        isLoading: false,
      },
    }),
    [actions.createChat.error]: (state, action) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),
    [actions.fetch.start]: (state) => ({
      ...state,
      fetch: {
        ...state.fetch,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),
    [actions.fetch.success]: (state, action) => ({
      ...state,
      items:action.payload.result,
      fetch: {
        ...state.fetch,
        isLoading: false,
      },
    }),
    [actions.fetch.error]: (state, action) => ({
      ...state,
      fetch: {
        ...state.fetch,
        isLoading: false,
        isError: true,
        error: action.payload,
      },
    }),

  },
  INITIAL_STATE,
);
