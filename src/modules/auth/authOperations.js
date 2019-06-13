import * as actions from './authActions';
import Api from '../../api';
import { viewerOperations } from '../viewer';

export function login(body) {
  return async function loginThunk(dispatch) {
    try {
      dispatch(actions.login.start());

      const res = await Api.Auth.login(body);

      const { user, token } = res.data;

      Api.Auth.setToken(token);
      dispatch(viewerOperations.fetchViewer());
      dispatch(actions.login.success(user));
    } catch (err) {
      dispatch(actions.login.error({ message: err.message }));
    }
  };
}
export function register(body) {
  return async function registerThunk(dispatch) {
    try {
      if (body.repeatPassword === body.password) {
        dispatch(actions.register.start());
        const copyBody = body;
        copyBody.repeatPassword = undefined;

        const res = await Api.Auth.register(copyBody);

        const { user, token } = res.data;

        Api.Auth.setToken(token);
        dispatch(viewerOperations.fetchViewer());
        dispatch(actions.register.success(user));
      } else
        dispatch(
          actions.register.error({
            message: 'Passwords do not match',
          }),
        );
    } catch (err) {
      debugger;
      dispatch(
        actions.register.error({
          message: err.response.data.error,
        }),
      );
    }
  };
}
