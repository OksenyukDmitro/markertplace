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
function Header({ handleLogout, ...props }) {
  let container;
  let favorite;
  let logo;
  if (props.theme === 'light') {
    container = s.container_light;
    logo = LogofullLogin;
    favorite = heart;
    console.log('light');
  } else {
		if(props.children !== [])
    container = s.container_search;
		else
    container = s.container;
    logo = Logofull_light;
    favorite = heart_light;
    console.log('black');
  }

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
              <img className={s.logo} src={logo} />
            </Link>
          )}
        </div>

   <div className={s.search}>{props.children}</div>

        <div className={s.right}>
          <button className={s.btnCell}>sell</button>
          {Api.Auth.isLoggedIn ? (
            <div className={s.btn} onClick={handleLogout}>
              Logout
            </div>
          ) : (
            <Link className={s.btn} to={routes.login}>
              Login
            </Link>
          )}
          <Link to={routes.bookmarks}>
            <img className={s.image} src={favorite} />
          </Link>
        </div>
       
      </header>
    </div>
  );
}

Header.propTypes = {};

const enhancer = compose(
  withRouter,
  withHandlers({
    handleLogout: (props) => () => {
      Api.Auth.logout();
      props.history.push(routes.home);
    },
  }),
);
export default enhancer(Header);
