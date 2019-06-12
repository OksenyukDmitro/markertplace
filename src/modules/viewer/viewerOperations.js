import * as actions from './viewerActions';
import Api from '../../api';

export function fetchViewer() {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchViewer.start());
      const res = await Api.viewer.get();
      dispatch(actions.fetchViewer.success(res.data));
      console.log("res.data");
      console.log(res.data);
      console.log("res.data");
    } catch (error) {
      dispatch(actions.fetchViewer.error({ message: error.message }));
    }
  };
}
export function logout() {
  return async function logoutThunk(dispatch) {
    try {
      dispatch(actions.logout.start());

      Api.Auth.logout();
      Api.Auth.isLoggedIn=false;
      dispatch(actions.logout.success());
    } catch (err) {
      dispatch(
        actions.logout.error(),
      );
    }
  };
}
