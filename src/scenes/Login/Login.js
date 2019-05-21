import React from 'react';
import T from 'prop-types';
import s from './Login.module.scss';
import { routes } from '../../scenes/router';
import { Link, withRouter } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';
import Api from '../../api';

function Login({ handleLogin }) {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div>
          <p className={s.labelLogin}>Login</p>
          <p className={s.label}>EMAIL</p>
          <input className={s.input} type="text" />
          <p className={s.label}>PASSWORD</p>
          <input className={s.input} type="text" />
          <p className={s.forgetPass}>Don’t remember password?</p>
          <button
            className={s.btn}
            type="button"
            onClick={handleLogin}
          >
            Continue
          </button>
          <br />{' '}
        </div>
      </div>
      <div className={s.containerNoAccount}>
        <p className={s.text}>
          I have no account,{' '}
            <Link className={s.link} to={routes.register}>REGISTER NOW</Link>
        </p>
      </div>
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
