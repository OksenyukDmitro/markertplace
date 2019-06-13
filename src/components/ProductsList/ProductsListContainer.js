import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import ProductListView from './ProductsListView';
import { productsOperations } from '../../modules/products';
import { routes } from '../../scenes/router';
import { withRouter, generatePath } from 'react-router-dom';
import saveBookmarks, { isBookmarks } from '../../helpers/bookmarks';
import { FastField } from 'formik';

const mapStateToProps = (state) => ({
  //list: state.products.latest.items,
  isLoading: state.products.latest.isLoading,
  viewer: state.viewer.user,
});
const mapDispatchToProps = {
  fetchLatest: productsOperations.fetchLatest,
};
const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
  withState('isBookmark', 'changeBookmark', false),
  withHandlers({
    openProduct: (props) => async () => {
      props.history.push({
        pathname: generatePath(routes.products, {
          id: props.item.id,
        }),
      });
    },
    addToBookmarks: (props) => () => {
      if (props.viewer) {
        saveBookmarks(props.viewer.id, props.item.id);
      } else {
        saveBookmarks('guest', props.item.id);
      }
      props.changeBookmark(!props.isBookmark);
    },
  }),
);
export default enhancer(ProductListView);
