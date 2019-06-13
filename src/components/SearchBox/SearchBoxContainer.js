import { connect } from 'react-redux';
import {
  compose,
  withHandlers,
  lifecycle,
  withState,
} from 'recompose';
import SearchBox from './SearchBoxView';
import { routes } from '../../scenes/router';
import { withRouter, generatePath } from 'react-router-dom';

const enhancer = compose(
  withRouter,
  withState('inputValue', 'updateInputValue', ''),

  withHandlers({
    handleChangeInputValue: (props) => (evt) => {
      props.updateInputValue(evt.target.value);
      if (props.onChange) props.onChange(evt.target.value);
    },
    openInbox: (props) => () => {
      props.history.push(routes.inbox);
    },

    
    ownerProfile: (props) => () => {
      props.history.push({
        pathname: generatePath(routes.profile, {
          id: props.owner.id,
        }),

        //  state: { item: props.item },
      });
    },
    handleFetchUser: (props) => () => {
      props.fetchProduct(props.item.ownerId);
    },
  }),
);
export default enhancer(SearchBox);
