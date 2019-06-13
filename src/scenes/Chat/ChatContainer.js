import { connect } from 'react-redux';
import {
  compose,
  withHandlers,
  lifecycle,
  withState,
} from 'recompose';
import { Chat } from './ChatView';

import { withRouter } from 'react-router-dom';
import {
  messagesOperations,
  messagesSelectors,
} from '../../modules/messages';

const mapStateToProps = (state, props) => ({
  isLoading: state.messages.fetchMessages.isLoading,
  messages: messagesSelectors.getMessages(
    state,
    props.match.params.id,
  ),
  participants: messagesSelectors.getParticipants(
    state,
    props.match.params.id,
  ),
  viewer: state.viewer.user,
});
const mapDispatchToProps = {
  fetchMessages: messagesOperations.fetchMessages,
  sendMessage: messagesOperations.sendMessage,
};
const enhancer = compose(
  withRouter,
  withState('isModalOpen', 'setIsModalOpen', false),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('text', 'setText', ''),
  withHandlers({
    sendMessage: (props) => () => {
      props.sendMessage(props.match.params.id, props.text);
      props.setText('');
    },
    fetchMessage: (props) => () => {
      props.fetchMessages(props.match.params.id);
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchMessages(this.props.match.params.id);
    },
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.props.fetchMessage();
      }

      if (
        this.props.messages &&
        this.props.messages !== null &&
        prevProps &&
        prevProps.messages &&
        prevProps.messages !== null
      ) {
        const messages = this.props.messages;
        const { messages: prevMessages } = prevProps;
      }
    },
  }),
);
export default enhancer(Chat);
