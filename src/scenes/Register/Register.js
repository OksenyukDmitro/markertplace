import React from 'react';
import T from 'prop-types';
import s from './Register.module.scss';
import { routes } from '../../scenes/router';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div>
      <Link to={routes.login}>Login</Link>{' '}
    </div>
  );
}

Register.propTypes = {};

export default Register;
