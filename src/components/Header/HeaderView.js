import React from 'react';
import T from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import s from './Header.module.scss';
import { routes } from '../../scenes/router';
import { compose, withHandlers } from 'recompose';
import Api from '../../api';
import heart from '../../Images/Shape.svg';
import heart_light from '../../Images/Shape_light.png';
import LogofullLogin from '../../Images/Logofull_login.png';
import LogofullRegister from '../../Images/Logofull_register.png';
import Logofull_light from '../../Images/Logofull_light.png';
function Header({ handleLogout, user, ...props }) {
  var container;

  props.light
    ? (container = s.container_light)
    : (container = s.container);
  if (props.children !== [] && props.children !== undefined)
    container = s.container_search;

  return (
    <div className={container}>
      <header className={s.header}>
        <div className={s.left}>
          {props.location.pathname === routes.register ? (
            <Link to={routes.home}>
              {' '}
              <img className={s.logo} src={LogofullRegister} />
            </Link>
          ) : (
            <Link to={routes.home}>
              {' '}
              <img
                className={s.logo}
                src={props.light ? LogofullLogin : Logofull_light}
              />
            </Link>
          )}
        </div>

        <div className={s.search}>{props.children}</div>

        <div className={s.right}>
          <button className={s.btnCell}>sell</button>

          {Api.Auth.isLoggedIn && user ? (
            <div className={s.userIcon}>
              <div>
                {user.fullName[0]}
                <div className={s.modal}>
                  <div>
                    <img src={user.avatar} alt="avatar" />,
                    <h4 className={s.fullname}> {user.fullName}</h4>,
                    <h4 className={s.fullname}> {user.email}</h4>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link className={s.btn} to={routes.login}>
              Login
            </Link>
          )}
          <Link to={routes.bookmarks}>
            <img
              className={s.image}
              src={props.light ? heart : heart_light}
            />
          </Link>
        </div>
      </header>
    </div>
  );
}

Header.propTypes = {};

export default Header;
