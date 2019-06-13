import React from 'react';
import T from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import s from './Auth.module.scss';
import { Header } from '../../components';
import { routes } from '../../scenes/router';
import Login from '../Login/LoginContainer';
import Register from '../Register/RegisterContainer';
import { Footer } from '../../components';
import Api from '../../api';
import RestorePassword from '../RestorePassword/RestorePasswordContainer';
function Auth() {
  return (
    <Route path={routes.auth}>
      <div className={s.container}>
        <Header light="true" />
        <Switch>
          {Api.Auth.isLoggedIn && <Redirect to={routes.home} />}
          <Route path={routes.login} component={Login} exact />
          <Route path={routes.register} component={Register} exact />
          <Route path={routes.restorePassword} component={RestorePassword} exact />
          <Redirect from={routes.auth} to={routes.notfound} />
        </Switch>
        <Footer />
      </div>
    </Route>
  );
}

Auth.propTypes = {};

export default Auth;
