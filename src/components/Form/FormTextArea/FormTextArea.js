import React from 'react';
import { FormContext } from '../FormContainer/FormContainer';
import s from './FormTextArea.module.scss';

function FormTextArea({ name, label, validate, ...props }) {
  return (
    <FormContext.Consumer>
      {({ onChange, formState, setError, getError }) => {
        function handleChange(value) {
          if (validate) {
            setError(name, validate(name, value));
          }
          onChange(name, value);
        }

        const error = getError(name);

        return (
          <div className={s.container}>
            <label htmlFor={name}>
              <p className={s.label}> {label}</p>
              <textarea
                className={s.area}
                id={name}
                type="text"
                value={formState[name]}
                onChange={(evt) => handleChange(evt.target.value)}
                {...props}
              />
              {error && <span>{error}</span>}
            </label>
          </div>
        );
      }}
    </FormContext.Consumer>
  );
}

export default FormTextArea;
