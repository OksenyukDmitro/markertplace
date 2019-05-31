import React from 'react';

import { Link, withRouter } from 'react-router-dom';
import { routes } from '../../scenes/router';
import { compose, withHandlers } from 'recompose';
import Header from './HeaderView';
import Api from '../../api';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    user: state.viewer.user,    
  };
}
const mapDispatchToProps = {
 
  
};
const enhancer = compose(
  connect(mapStateToProps),
  withRouter,
  withHandlers({
    handleLogout: (props) => () => {
      Api.Auth.logout();
      props.history.push(routes.home);
    },
  }),
);
export default enhancer(Header);
