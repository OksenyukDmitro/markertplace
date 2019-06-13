import React from 'react';
import { FormContext } from '../FormContainer/FormContainer';
import s from './FormInput.module.scss';

export default function FormInput({
  name,
  label,
  validate,
  ...props
}) {
  return (
    <FormContext.Consumer>
      {({ onChange, formState, setError, getError }) => {
        function handleChange(value) {
          if (validate) {
            setError(name, validate(value));
          }
          onChange(name, value);
        }

        const error = getError(name);

        return (
          <div className={s.container}>
            {error && <div className={s.error}>{error}</div>}
            <label htmlFor={name}>
              <p className={s.label}> {label}</p>
              <input
                className={s.input}
                id={name}
                value={formState[name]}
                onChange={(evt) => handleChange(evt.target.value)}
                {...props}
              />
            </label>
          </div>
        );
      }}
    </FormContext.Consumer>
  );
}
