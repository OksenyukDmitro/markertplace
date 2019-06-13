import React from 'react';
import s from './ProfileEdit.module.scss';
import { Input, Header, Footer } from '../../components';

import test from '../../Images/test.jpg';
function ProfileEdit({
  fields,
  handleSave,
  handleFieldChange,
  isError,
  isLoading,
  message,
  viewer,
  ...props
}) {
  console.log(props);
  if (!viewer) return <div>Loading</div>;
  const isDisabled =
     fields.fullName === '' || fields.phone === '';
  return (
    <div>
      <Header />
      <div className={s.wrapper}>
        <div className={s.container}>
          <div>
            <p className={s.labelLogin}>Edit profile</p>
            <div className={s.avatarContainer}>
              <img
                className={s.avatar}
                src={viewer.avatar === null ? test : viewer.avatar}
              />
            </div>
            <Input
              fields={fields}
              name="fullName"
              placeholder={viewer.fullName}
              label="FULL NAME"
              onChange={handleFieldChange}
            />
            <Input
              fields={fields}
              name="phone"
              placeholder={viewer.phone}
              label="PHONE NUMBER"
              onChange={handleFieldChange}
              
            />
            <p className={s.forgetPass}>{message}</p>
            <button
              disabled={isDisabled ? true : false}
              style={isDisabled ? { opacity: 0.7 } : null}
              className={s.btn}
              type="button"
              onClick={handleSave}
            >
              {isLoading ? 'Loading' : 'Continue'}
            </button>
            <p className={s.error}> {isError ? '' : ''}</p>
            <br />{' '}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

ProfileEdit.propTypes = {};

export default ProfileEdit;
/* <input className={s.input} type="text" />
          <p className={s.label}>PASSWORD</p>
          <input className={s.input} type="text" />*/
