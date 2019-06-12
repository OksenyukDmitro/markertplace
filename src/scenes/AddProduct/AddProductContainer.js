import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import AddProduct from './AddProductView';
import { productsOperations } from '../../modules/products';

const mapStateToProps = (state) => ({
  list: state.products.latest.items,
  isLoading: state.products.latest.isLoading,
});
const mapDispatchToProps =  {
  fetchLatest: productsOperations.fetchLatest,
}; 
const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {       
        this.props.fetchLatest();
    },
  }),
);
export default enhancer(AddProduct);
