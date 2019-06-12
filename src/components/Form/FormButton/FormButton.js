import React from 'react';
import { FormContext } from '../FormContainer/FormContainer';
import s from './FormButton.module.scss';

function FormButton() {
  return (
    <FormContext.Consumer>
      {({
        onSubmit,
        formState: { title, description, price, photos, location },
      }) => {
        const isEmpty = () => {
          if (title.trim() && location.trim() && !isNaN(price)) {
            return true;
          }
          return false;
        };

        return (
          <div>
            <button className={!isEmpty()?s.disabledBtn:s.btn} disabled={!isEmpty()} onClick={onSubmit}>
            <p className={s.text}>SUBMIT</p>
            </button>
          </div>
        );
      }}
    </FormContext.Consumer>
  );
}

export default FormButton;
