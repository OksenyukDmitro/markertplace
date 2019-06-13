import { compose, withStateHandlers, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { authOperations } from '../../modules/auth';
import { routes } from '../../scenes/router';
import Api from '../../api';
import Register from './RegisterView';
function mapStateToProps(state) {
  return {
    isLoading: state.auth.register.isLoading,
    isError: state.auth.register.isError,
    errorMessage: state.auth.register.error,
  
  };
}
const mapDispatchToProps = {
  register: authOperations.register,
  
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
        fullName:'',
        password: '',
        repeatPassword: '',
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
    handleRegister: (props) => async () => {
        
           debugger
      await props.register(props.fields);
      
     if(Api.Auth.isLoggedIn) props.history.push(routes.home);
    },
  }),
);
export default enhancer(Register);
