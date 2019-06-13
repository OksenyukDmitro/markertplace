import React from 'react';
import T from 'prop-types';
import s from './RestorePassword.module.scss';
import { routes } from '../../scenes/router';
import { Link } from 'react-router-dom';
import { Input } from '../../components';

function RestorePassword({
  fields,
  handleLogin,
  handleFieldChange,
  isError,
  isLoading,
  message,
}) {
    const isDisabled = isLoading||fields.email==="";
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div>
          <p className={s.labelLogin}>Restore Password</p>
          <Input
            fields={fields}
            name="email"
            placeholder="example@gmail.com"
            label="EMAIL"
            onChange={handleFieldChange}
          />         
          <p className={s.forgetPass}>{message}</p>
          <button
            disabled={ isDisabled? true : false}
            style={isDisabled?{ opacity: 0.7} :null}
            className={s.btn}
            type="button"
            onClick={handleLogin}
          >
            {isLoading ? 'Loading' : 'Continue'}
          </button>
          <p className={s.error}>
            {' '}
            {isError ? '' : ''}
          </p>
          <br />{' '}
        </div>
      </div>    
    </div>
  );
}

RestorePassword.propTypes = {};

export default RestorePassword;
/* <input className={s.input} type="text" />
          <p className={s.label}>PASSWORD</p>
          <input className={s.input} type="text" />*/
