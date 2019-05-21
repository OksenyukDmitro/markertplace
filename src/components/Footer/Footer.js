import React from 'react';
import T from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import s from './Footer.module.scss';
import { routes } from '../../scenes/router';
import { compose, withHandlers } from 'recompose';
import Api from '../../api';
import Terms from '../../scenes/Terms/Terms';
function Footer({ ...props }) {
  let footerStyle;
  props.theme === 'light'
    ? (footerStyle = s.footer_light)
    : (footerStyle = s.footer);
  //ukjhk
  return (
    <footer className={footerStyle}>
      <div className={s.container}>
        <span className={s.text}>Copyright © 2017.</span>
        <Link className={s.text} to={routes.privacy}>
          Privacy
        </Link>
        <Link className={s.text} to={routes.terms}>
          Policy.
        </Link>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

/*const enhancer = compose(
  withRouter,
  withHandlers({
    handleLogout: (props) => () => {
      Api.Auth.logout();
      props.history.push(routes.home);
    },
  }),
);*/
export default Footer;
