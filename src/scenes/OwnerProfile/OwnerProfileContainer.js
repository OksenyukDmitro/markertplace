import { compose, withStateHandlers, withHandlers } from 'recompose';
import Profile from './ProfileView';
import { connect } from 'react-redux';
import { authOperations } from '../../modules/auth';
import { routes } from '../../scenes/router';
import Api from '../../api';

function mapStateToProps(state) {
  return {
    user: state.viewer.user,
    isLoading: state.viewer.fetchViewer.isLoading,
    isError: state.auth.login.isError,
  };
}
const mapDispatchToProps = {
  login: authOperations.login,
};
const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    {
      fields: {
        email: '',
        password: '',
      },
    },
    {
      handleFieldChange: (state) => (fieldName, value) => ({
        ...state,
        fields: {
          ...state.fields,
          [fieldName]: value,
        },
      }),
    },
  ),
  withHandlers({
    handleLogin: (props) => async () => {
      console.log(props.fields);
      await props.login(props.fields);
      if (Api.Auth.isLoggedIn) props.history.push(routes.home);
    },
  }),
);
export default enhancer(Profile);
