import { connect } from 'react-redux';
import { compose, withHandlers,lifecycle, withState} from 'recompose';
import Inbox from './InboxView';

import { withRouter, generatePath } from 'react-router-dom';

import { chatsOperations, chatsSelectors } from '../../modules/chats';
import { routes } from '../router';


const mapStateToProps = (state,props) => ({
  isLoading: state.chats.fetch.isLoading,
  items: chatsSelectors.getChatsWithLastMessage(state),
});
const mapDispatchToProps = {
  fetchChats: chatsOperations.fetch,
};
const enhancer = compose(
  withRouter,
  withState('isModalOpen', 'setIsModalOpen',false),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),  lifecycle({
    async componentDidMount() {
     
    await this.props.fetchChats();
    },
  }),
  
  withHandlers({  
    openChat:(props)=>(chatId)=>{
      
      if(props.match.params.id !== chatId)
      props.history.push({
        pathname: generatePath(routes.chat, {
          id: chatId,
        }),
      });
    }
  }),
);
export default enhancer(Inbox);
