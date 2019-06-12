import React from 'react';
import s from './TextArea.module.scss';

function Input({ fields, label, onChange, name, ...props }) {
  return (
		<div >
    <label  htmlFor={name}>
		 <p className={s.label}> {label}</p>
      <textarea className={s.textarea}
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
