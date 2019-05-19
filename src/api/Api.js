export const Auth = {
  _token: null,

  get isLoggedIn() {
    return !!this._token;
  },

  init() {
    try {
      const token = window.localStorage.getItem('token');
      this._token = token;
    } catch (err) {
      console.log(err);
    }
  },
  login() {
    //TODO request
    this._token = 'token';

    this._storeToken();
  },
  logout() {
    this._token = null;
    try {
      window.localStorage.removeItem('token', this._token);
    } catch (err) {
      console.log(err);
    }
  },
  _storeToken() {
    try {
      window.localStorage.setItem('token', this._token);
    } catch (err) {
      console.log(err);
    }
  },
};

export function init() {
  Auth.init();
}
