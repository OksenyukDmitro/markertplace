import { createAsyncActions } from '@letapp/redux-actions';
export const createChat = createAsyncActions(
  'chats/CREATE_CHAT',
);
export const fetch = createAsyncActions(
  'chats/FETCH_CHATS',
);
