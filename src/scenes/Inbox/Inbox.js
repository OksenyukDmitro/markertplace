import React from 'react';
import T from 'prop-types';
import s from './Inbox.module.scss';
import Api from '../../api';
import { routes } from '../../scenes/router';
import {  Redirect } from 'react-router-dom';
function Inbox() {
  if (!Api.Auth.isLoggedIn) {
    return <Redirect to={routes.login}/>;
  }
  return <div className={s.container}>Inbox</div>;
}

Inbox.propTypes = {};

export default Inbox;
