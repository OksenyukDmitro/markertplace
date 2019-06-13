import React from 'react';
import T from 'prop-types';

import s from './ContactSellerModal.module.scss';
import { randomColor } from '../../helpers';

function ContactSellerModalView({
  disabled,
  submit,
  setText,
  text,
  product,
  owner,
  isLoading,
  send,
  create,
}) {
  if (isLoading) return <div>Loading</div>;
  if (text.trim().length !== 0 && create) submit();
  const random_color = randomColor();

  return (
    <div className={s.container}>
      <p className={s.title}>Contact seller</p>
      <p className={s.subject}> Subject: {product.title}</p>
      <br />
      {owner.avatar ? (
        <img className={s.userIconContent} src={owner.avatar} />
      ) : (
        <div
          className={s.userIconContent}
          style={{ backgroundColor: random_color }}
        >
          {owner.fullName[0]}
        </div>
      )}
      <p className={s.fullName}>Owner:{owner.fullName}</p>
      <p className={s.location}>{owner.fullName}</p>
      <br />
      <div className={s.inputContainer}>
      <p className={s.label}>Message</p>
      <textarea
        className={s.textArea}
        value={text}
        onChange={(evt) => setText(evt.target.value)}
        placeholder="For example: iron man suit"
      />
      <button
        className={disabled ? s.disabledBtn : s.btn}
        disabled={disabled}
        onClick={submit}
        type="button"
      >
        <p className={s.text}>SUBMIT</p>
      </button>
      </div>
    </div>
  );
}

ContactSellerModalView.propTypes = {};

export default ContactSellerModalView;
