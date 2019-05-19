import React from 'react';
import T from 'prop-types';
import s from './Profile.module.scss';
import { Header } from '../../components';
import { Footer } from '../../components';
function Profile() {
  return (
    <div className={s.container}>
      <Header />
      <div className={s.text}>Profile;</div>
      <Footer />
    </div>
  );
}

Profile.propTypes = {};

export default Profile;
