import * as actions from './messagesActions';
import Api from '../../api';
import { viewerOperations, viewerSelectors } from '../viewer';
import { normalize } from 'normalizr';
import { Message, MessageCollection } from '../../api/schemas';
import { createMessage } from './messagesCreators';
import thunk from 'redux-thunk';

export function sendMessage(chatId, text) {
  return async function sendMessageThunk(dispatch, getState) {
    const user = viewerSelectors.getUser(getState());

    const message = createMessage({ chatId, text, ownerId: user.id });
    console.log('cvxc', [message]);
    try {
      const messageNormalize = normalize(message, Message);
      dispatch(
        actions.sendMessage.start({
          chatId,
          result:messageNormalize.result,
          entities: messageNormalize.entities
        }),
      );
      const res = await Api.Messages.sendMessage(chatId, text);

      const { result, entities } = normalize(res.data, Message);

      dispatch(
        actions.sendMessage.success({
          oldMessageId: messageNormalize.result,
          chatId,
          result,
          entities,
        }),
      );
    } catch (err) {
      dispatch(actions.sendMessage.error({ message: err.message }));
    }
  };
}
export function fetchMessages(chatId) {
  return async function fetchMessagesThunk(dispatch) {
    try {
      dispatch(actions.fetchMessages.start());

      const res = await Api.Messages.fetchMessages(chatId);

      const { result, entities } = normalize(
        res.data,
        MessageCollection,
      );

      dispatch(
        actions.fetchMessages.success({ chatId, result, entities }),
      );
    } catch (err) {
      dispatch(actions.fetchMessages.error({ message: err.message }));
    }
  };
}

export function handleMessageRealTime(evt) {
return async function handleMessageRealTimeThunk(dispatch) {
  
  if(evt.type === "ADD")
  dispatch(addMessage(evt.message))
  };
}

export function addMessage(message) {
  return async function addMessageThunk(dispatch) {
   
    
      const messageNormalize = normalize(message, Message);
      dispatch(
        actions.sendMessage.start({
          chatId: message.chatId,
          result:messageNormalize.result,
          entities: messageNormalize.entities
        }),
      );
      
  };
}