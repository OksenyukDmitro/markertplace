import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import Bookmarks from './BookmarksView';
import { productsOperations } from '../../modules/products';
import { withRouter } from 'react-router-dom';
import { getBookmarks } from '../../helpers/bookmarks';

const mapStateToProps = (state) => ({
  //list: state.products.latest.items,
  isLoading: state.viewer.isLoading,
  viewer: state.viewer.user,
});
const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
};
const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      let bookmarks;
      if (this.props.viewer) bookmarks = getBookmarks(this.props.viewer.id);
      if (bookmarks) bookmarks.map((item) => this.props.fetchProduct(item.id));
      
    },
  }),
);
export default enhancer(Bookmarks);
