import React from 'react';
import T from 'prop-types';
import s from './Login.module.scss';
import { routes } from '../../scenes/router';
import { Link, withRouter } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';
import Api from '../../api';

function Login({ handleLogin }) {
  return (
    <div className={s.btn}>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <br />
      <Link to={routes.register}>Register</Link>{' '}
    </div>
  );
}

Login.propTypes = {};

const enhancer = compose(
  withHandlers({
    handleLogin: (props) => () => {
      Api.Auth.login();
      props.history.push(routes.home);
    },
  }),
);
export default enhancer(Login);
