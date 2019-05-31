import * as actions from './viewerActions';
import Api from '../../api';

export function fetchViewer() {
  return async (dispatch) => {
    try {
      dispatch(actions.viewer.start());
      const res = await Api.viewer.get();
      dispatch(actions.viewer.success(res.data));
      console.log("res.data");
      console.log(res.data);
      console.log("res.data");
    } catch (error) {
      dispatch(actions.viewer.error({ message: error.message }));
    }
  };
}
