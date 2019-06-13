import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  withHandlers,
  withState,
} from 'recompose';
import LatestListView from './LatestListView';
import { productsOperations } from '../../modules/products';

const mapStateToProps = (state) => ({
  list: state.products.latest.items.map(
    (i) => state.entities.products[i],
  ),
  isLoading: state.products.latest.isLoading,
});
const mapDispatchToProps = {
  fetchLatest: productsOperations.fetchLatest,
};
const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('searchText', 'setSearchText', ''),
  withHandlers({
    onChangeSearchText: (props) => (text) => {
      props.setSearchText(text);
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchLatest();
    },
  }),
);
export default enhancer(LatestListView);
