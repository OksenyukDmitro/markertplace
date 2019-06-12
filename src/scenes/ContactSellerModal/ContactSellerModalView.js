import React from 'react';
import T from 'prop-types';

import s from './ContactSellerModal.module.scss';

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
  return (
    <div className={s.container}>
      Subject:{product.title}
      <br />
      Owner:{owner.fullName}
      <br />
      <textarea
        value={text}
        onChange={(evt) => setText(evt.target.value)}
      />
      <button disabled={disabled} onClick={submit} type="button">
        send
      </button>
    </div>
  );
}

ContactSellerModalView.propTypes = {};

export default ContactSellerModalView;
