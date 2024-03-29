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
import Inbox from './Inbox/IndoxContainer';
import Terms from './Terms/Terms';
import Privacy from './Privacy/Privacy';
import Bookmarks from './Bookmarks/BookmarksContainer';
import Profile from './Profile/ProfileContainer';
import ProfileEdit from './ProfileEdit/ProfileEditContainer';
import Api from '../api';
import Modal from './Modal/ModalAddView';
import  Product from './Product/ProductContainer';

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
  profile: '/profile/:id',
  profileEdit: '/profile/:id/edit',
  users: '/users/:id',
  listings: '`/listings/:id',
  search: '`/search',
  addProducts: '/products/add',
  products:'/products/:id',
  chat:'/chat/:id',
  restorePassword:'/auth/restorepassword',
};

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>     
        <Route exact path={routes.home} component={Home} />
      
        <PrivateRoute path={routes.inbox} component={Inbox} />     
        <PrivateRoute path={routes.chat} component={Inbox} />     
        <PrivateRoute path={routes.addProducts} component={Modal} />
        <Route path={routes.terms} component={Terms} />
        <Route path={routes.privacy} component={Privacy} />
        <Route path={routes.bookmarks} component={Bookmarks} />
        <PrivateRoute path={routes.profile} component={Profile} exact />
        <PrivateRoute path={routes.profileEdit} component={ProfileEdit} />
        <Route path={routes.auth} component={Auth} />
        <Route path={routes.products} component={Product} />
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
