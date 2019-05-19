import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import React from 'react';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Auth from './Auth/Auth';
import Inbox from './Inbox/Inbox';
import Terms from './Terms/Terms';
import Privacy from './Privacy/Privacy';
import Bookmarks from './Bookmarks/Bookmarks';
import Profile from './Profile/Profile';
import Api from '../api';
export const routes = {
  home: '/',
  login: '/auth/login',
  register: '/auth/register',
  auth: '/auth',
  notfound: '/notfound',
  inbox: '/inbox',
  terms: '/terms',
  privacy: '/privacy',
  bookmarks: '/bookmarks',
  profile: '/profile',
  users: '/users/:id',
  listings: '`/listings/:id',
  search: '`/search',
};

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.inbox} component={Inbox} />
        <Route path={routes.terms} component={Terms} />
        <Route path={routes.privacy} component={Privacy} />
        <Route path={routes.bookmarks} component={Bookmarks} />
        <PrivateRoute path={routes.profile} component={Profile} />
        <Route path={routes.auth} component={Auth} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );

  function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          Api.Auth.isLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: routes.login,
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  }
}
