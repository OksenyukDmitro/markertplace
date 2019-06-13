import {
  compose,
  withStateHandlers,
  withHandlers,
  lifecycle,
  withState
} from 'recompose';
import Profile from './ProfileView';
import { connect } from 'react-redux';
import { authOperations } from '../../modules/auth';
import { routes } from '../../scenes/router';
import Api from '../../api';
import { userSelectors, userOperations } from '../../modules/user';
function mapStateToProps(state, props) {
  return {
    viewer: state.viewer.user,
    owner: userSelectors.getOwner(state, props.match.params.id),
    products: userSelectors.getProducts(state),
    isLoading: state.viewer.fetchViewer.isLoading,
    isError: state.auth.login.isError,
  };
}
const mapDispatchToProps = {
  fetchUser: userOperations.fetchUser,
  fetchUserProducts: userOperations.fetchUserProducts,
};
const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),

  withHandlers({
    handleLogin: (props) => async () => {
      console.log(props.fields);
      await props.login(props.fields);
      if (Api.Auth.isLoggedIn) props.history.push(routes.home);
    },
  }),
  
  withState("searchText","setSearchText",""),
  withHandlers({  
    onChangeSearchText:(props)=>(text)=>{
      console.log(text)
      props.setSearchText(text);     
    }
  }),  
  lifecycle({
    async componentDidMount() {
    
      // debugger
      if (!this.props.owner){
        this.props.fetchUser(this.props.match.params.id);}
       
      await this.props.fetchUserProducts(this.props.match.params.id);
    },
    async componentDidUpdate(prevProps, prevState) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.props.fetchUser(this.props.match.params.id)
        await  this.props.fetchUserProducts(this.props.match.params.id)
      }
    },
  }),
);
export default enhancer(Profile);
