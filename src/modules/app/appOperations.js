import * as actions from './appActions';
import Api, { SocketApi } from '../../api';
import { viewerOperations } from '../viewer';
import { messagesOperations } from '../messages';
import { productsOperations } from '../products';

export function subscribeToSockets() {
  return function subscribeToSocketsThunk(dispatch) {
    SocketApi.handleMessages((message) =>
      dispatch(messagesOperations.handleMessageRealTime(message)),
    );
  };
}

export function init() {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.initialization.start());
      Api.init();

      const viewer = await dispatch(viewerOperations.fetchViewer());
      dispatch(actions.initialization.success());
      dispatch(productsOperations.fetchBookmarks());
      dispatch(subscribeToSockets());
    } catch (err) {
      dispatch(
        actions.initialization.error({ message: err.message }),
      );
    }
  };
}
