import * as actions from './chatsActions';
import Api from '../../api';
import { viewerOperations } from '../viewer';
import { normalize } from 'normalizr';
import { Chat,ChatCollection } from '../../api/schemas';
export function createChat(productId) {
  return async function createChatThunk(dispatch) {
    try {
      dispatch(actions.createChat.start());
      const res = await Api.Chats.createChat(productId);
      const { result, entities } = normalize(
        res.data,
        Chat,
      );
      dispatch(actions.createChat.success({ result, entities }));
    } catch (err) {
      dispatch(actions.createChat.error({ message: err.message }));
    }
  };
}
export function fetch() {
  return async function fetchThunk(dispatch) {
    try {
      dispatch(actions.fetch.start());
      const res = await Api.Chats.fetch();

      const { result, entities } = normalize(
        res.data,
        ChatCollection,
      );
        
      dispatch(actions.fetch.success({ result, entities }));
    } catch (err) {
      dispatch(actions.fetch.error({ message: err.message }));
    }
  };
}
