import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import ProductView from './ProductView';
import {
  productsOperations,
  productsSelectors,
} from '../../modules/products';

const mapStateToProps = (state, props) => ({
  //list: state.products.latest.items,
  item: productsSelectors.getProduct(state, props.match.params.id),
  
 
});
const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
};
const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),

);
export default enhancer(ProductView);
