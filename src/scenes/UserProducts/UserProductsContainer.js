import { connect } from 'react-redux';
import { compose, lifecycle,withHandlers } from 'recompose';
import UserProductsView from './UserProductsView';
import { productsOperations } from '../../modules/products';

const mapStateToProps = (state) => ({
  isLoading: state.products.userProducts.isLoading,
  items: state.products.userProducts.items,
  user: state.viewer.user,
});
const mapDispatchToProps =  {
  fetchUserProducts: productsOperations.fetchUserProducts,  
};
const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {         
          this.props.fetchUserProducts(this.props.user.id);
    },
  }),
  withHandlers({
    handleFetchUserProducts: (props) => async () => {
   
      await props.fetchUserProducts(props.user.id);
     
    },
  }),
);
export default enhancer(UserProductsView);
