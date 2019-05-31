import React from 'react';
import T from 'prop-types';
import s from './Login.module.scss';
import { routes } from '../../scenes/router';
import { Link } from 'react-router-dom';

import {Input} from '../../components';

function Login({ fields, handleLogin, handleFieldChange, isError, isLoading }) {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div>
          <p className={s.labelLogin}>Login</p>
     
          <Input
		
            fields={fields}
            name="email"
            placeholder="example@gmail.com"
            label="EMAIL"
            onChange={handleFieldChange}
          />
          <Input
            fields={fields}
            name="password"
            label="PASSWORD"
            onChange={handleFieldChange}
          />
          <p className={s.forgetPass}>Don’t remember password?</p>
          <button
          disabled={isLoading? true:false}
            className={s.btn}
            type="button"
            onClick={handleLogin}
          >
            {isLoading? "Loading":"Continue"}
          </button>
          <p className={s.error}> {isError? " The username or password  is invalid.":""}</p>

          <br />{' '}
        </div>
      </div>
      <div className={s.containerNoAccount}>
        <p className={s.text}>
          I have no account,{' '}
          <Link className={s.link} to={routes.register}>
            REGISTER NOW
          </Link>
        </p>
      </div>
    </div>
  );
}

Login.propTypes = {};

export default Login;
/* <input className={s.input} type="text" />
          <p className={s.label}>PASSWORD</p>
          <input className={s.input} type="text" />*/
