import React from 'react';
import T from 'prop-types';
import s from './Profile.module.scss';
import { Header } from '../../components';
import { Footer } from '../../components';
import { Link } from 'react-router-dom';
import { routes } from '../router';
import test from '../../Images/test.jpg';
import UserProducts from '../UserProducts/UserProductsContainer';

function Profile({ user,isLoading }) {

  if(isLoading) return (<div>Loading</div>);
  return (
    <div className={s.container}>
      <Header />
      <img
      className={s.avatar}
        src={user.avatar === null ? test : user.avatar}
      />
      <p className={s.name}>{user.fullName}</p>
      <div className={s.text}>Profile;</div>
      <Link
        to={{
          pathname: routes.addProducts,
          state: { modal: true },
        }}
      >
        Add
      </Link>
      <UserProducts/>
      <Footer />
    </div>
  );
}

Profile.propTypes = {};

export default Profile;
