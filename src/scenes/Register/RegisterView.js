import React from 'react';
import T from 'prop-types';
import s from './Register.module.scss';
import { routes } from '../../scenes/router';
import { Link } from 'react-router-dom';


import {Input} from '../../components';

function Register({ fields, handleRegister, handleFieldChange, isError, isLoading,errorMessage }) {
    
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div>
          <p className={s.labelLogin}>Register</p>
     
          <Input
		
            fields={fields}
            name="email"
            placeholder="example@gmail.com"
            label="EMAIL"
            onChange={handleFieldChange}
          />
          <Input
		
            fields={fields}
            name="fullName"
            placeholder="TONY STARK"
            label="FULL NAME"
            onChange={handleFieldChange}
          />
          <Input
            fields={fields}
            name="password"
            label="PASSWORD"
            onChange={handleFieldChange}
          />
          <Input
            fields={fields}
            name="repeatPassword"
            label="PASSWORD AGAIN"
            onChange={handleFieldChange}
          />
          <p className={s.forgetPass}>Don’t remember password?</p>
          <button
          disabled={isLoading? true:false}
            className={s.btn}
            type="button"
            onClick={handleRegister}
          >
            {isLoading? "Loading":"Continue"}
          </button>
          <p className={s.error}> {isError? [errorMessage.message] :""}</p>

          <br />{' '}
        </div>
      </div>
     
    </div>
  );
}

Register.propTypes = {};

export default Register;
