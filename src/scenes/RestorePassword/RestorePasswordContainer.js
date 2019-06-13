import { compose, withStateHandlers, withHandlers, withProps, withState } from 'recompose';
import RestorePassword from './RestorePasswordView';
import { connect } from 'react-redux';
import { authOperations } from '../../modules/auth';
import { routes } from '../../scenes/router';
import Api from '../../api';
import {  generatePath } from 'react-router-dom';

function mapStateToProps(state) {
  return {
    isLoading: state.auth.login.isLoading,
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
  withState("message", "setMessage",""),
  withHandlers({
    handleLogin: (props) =>  () => {
        props.setMessage("Password send in your email")
    },
  }),
);
export default enhancer(RestorePassword);
