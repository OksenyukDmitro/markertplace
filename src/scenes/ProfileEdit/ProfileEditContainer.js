import {
  compose,
  withStateHandlers,
  withHandlers,
  lifecycle,
  withState,
} from 'recompose';
import ProfileEdit from './ProfileEditView';
import { connect } from 'react-redux';
import { authOperations } from '../../modules/auth';
import { viewerOperations } from '../../modules/viewer';

function mapStateToProps(state) {
  return {
    isLoading: state.auth.login.isLoading,
    isError: state.auth.login.isError,
    viewer: state.viewer.user,
  };
}
const mapDispatchToProps = {
  fetchViewer: viewerOperations.fetchViewer,
};
const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    {
      fields: {
        fullName: '',
        phone: '',
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
   lifecycle({
    componentDidMount() {       
       if(!this.props.viewer)
       this.props.fetchViewer();
    },
  }),
  withState('message', 'setMessage', ''),
  withHandlers({
    handleSave: (props) => () => {
      props.setMessage('Maybe saved');
    },
  }),
);
export default enhancer(ProfileEdit);
