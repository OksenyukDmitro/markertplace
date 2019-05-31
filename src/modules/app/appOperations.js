import * as actions from './appActions';
import Api from '../../api';
import { viewerOperations } from '../viewer';
export function init() {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.initialization.start());
      Api.init();
			console.log("fetch");
			dispatch(viewerOperations.fetchViewer());
      dispatch(actions.initialization.success());
    } catch (err) {
      dispatch(
        actions.initialization.error({ message: err.message }),
      );
    }
  };
}
