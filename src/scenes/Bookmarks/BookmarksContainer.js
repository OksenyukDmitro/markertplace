import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers } from 'recompose';
import Bookmarks from './BookmarksView';
import {
  productsOperations,
  productsSelectors,
} from '../../modules/products';
import { withRouter } from 'react-router-dom';
import { getBookmarks } from '../../helpers/bookmarks';
import { userOperations } from '../../modules/user';
import { viewerOperations } from '../../modules/viewer';

const mapStateToProps = (state) => ({
  //list: state.products.latest.items,
  isLoading: state.viewer.isLoading,
  viewer: state.viewer.user,
  items: productsSelectors.getBookmarks(state),
});
const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
  fetchBookmarksProduct: productsOperations.fetchBookmarksProduct,
  fetchBookmarks: productsOperations.fetchBookmarks,
  fetchViewer: viewerOperations.fetchViewer,
};
const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({
   
  }),
  lifecycle({
    async componentDidMount() {
      if (!this.props.viewer) {
        await this.props.fetchViewer();
        await this.props.fetchBookmarks();
      }


      if (this.props.viewer) await this.props.fetchBookmarks();
      console.log(this.props.items);
    },
  }),
);
export default enhancer(Bookmarks);
