import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  withState,
  withHandlers,
  withProps,
} from 'recompose';
import { withRouter, generatePath } from 'react-router-dom';
import ContactSellerModal from './ContactSellerModalView';
import {
  productsOperations,
  productsSelectors,
} from '../../modules/products';
import { chatsOperations } from '../../modules/chats';
import { messagesOperations } from '../../modules/messages';
import { routes } from '../router';

const mapStateToProps = (state, { productId }) => ({
  product: productsSelectors.getProduct(state, productId),
  owner: productsSelectors.getProductOwner(state, productId),

  isLoading: state.products.latest.isLoading,
});
const mapDispatchToProps = {
  createChat: chatsOperations.createChat,
  fetchProduct: productsOperations.fetchProduct,
  sendMessage: messagesOperations.sendMessage,
};
const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('text', 'setText', ''),
  withState('create', 'setCreate', false),
  withHandlers({
    send: (props) => () => {
    
    },
    submit: (props) => async () => {
      if (!props.product.chatId) {
        await props.createChat(props.product.id);
        props.fetchProduct(props.product.id);
        props.setCreate(true);
      }
      if (props.product.chatId) {
        props.sendMessage(props.product.chatId, props.text);
        props.setCreate(false);
        props.setText(' ');
        props.history.push({
          pathname: generatePath(routes.chat, {
            id: props.product.chatId,
          }),
        });
      }
    },
  }),
  withProps((props) => ({
    disabled: props.text.trim().length === 0,
  })),
);
export default enhancer(ContactSellerModal);
