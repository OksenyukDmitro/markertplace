import React from 'react';

import { Link, withRouter } from 'react-router-dom';
import { routes } from '../../scenes/router';
import { compose, withHandlers } from 'recompose';
import Header from './HeaderView';
import Api from '../../api';
import { connect } from 'react-redux';
import { viewerOperations } from '../../modules/viewer';

function mapStateToProps(state) {
  return {
    user: state.viewer.user,
  };
}
const mapDispatchToProps = {
  logout: viewerOperations.logout,
};
const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
  withHandlers({
    handleLogout: (props) => () => {
      props.logout();
    },
  }),
);
export default enhancer(Header);
