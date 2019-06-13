import React from 'react';
import s from './Input.module.scss';

function Input({ fields, label, onChange, name, ...props }) {
  return (
    <div>
      <label htmlFor={name}>
        <p className={s.label}> {label}</p>
        <input
          className={s.input}
          id={name}
          value={fields[name]}
          onChange={(evt) => onChange(name, evt.target.value)}
          {...props}
        />
      </label>
    </div>
  );
}
export default Input;
