import axios from 'axios';
import SocketApi from './SocketApi';
import Qs from 'qs'
const urls = {
  login: '/api/auth/login',
  register: '/api/auth/register',
  viewer: '/api/account/user',
  productsLatest: '/api/products/latest',
  addProduct: '/api/products',
  userProducts: '/api/users/', 
   uploadImage: '/api/upload/images',
   user: '/api/users/',
    product: '/api/products/',
    chats: '/api/chats',
    bookmarksProduct:'/api/products/ids', 
    getBookmarks:"/api/products/saved",
    bookmarks:"/api/products/saved"
};

export const Auth = {
  _token: null,

  get isLoggedIn() {
    return !!this._token;
  },

  setToken(token) {
    this._token = token;
    this._storeToken(token);
    this._setTokenToAxios(token);
  },

  init() {
    try {
      const token = window.localStorage.getItem('token');
      this._token = JSON.parse(token);
      this._setTokenToAxios(this._token);
      SocketApi.init(this._token);
    } catch (error) {
      console.error(error);
    }
  },

  login(body) {
    return axios.post(urls.login, body);
  },

  register(body) {
    return axios.post(urls.register, body);
  },

  logout() {
    this._token = null;
    axios.defaults.headers.common.Authorization = ``
    try {
      window.localStorage.removeItem('token');
    } catch (error) {
      console.error(error);
    }
  },

  _storeToken() {
    try {
      window.localStorage.setItem(
        'token',
        JSON.stringify(this._token),
      );
    } catch (error) {
      console.error(error);
    }
  },

  _setTokenToAxios(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};
export const viewer = {
  get() {
    return axios.get(urls.viewer);
  },
};
export const user = {
  get(id) {
    return axios.get(urls.user +   `${id}`);
  },
};

export const Products = {
  getLatest() {
    return axios.get(urls.productsLatest);
  },
  addProduct(body) {
    return axios.post(urls.addProduct, body);
  },
  Product(id) {
    return axios.get(urls.product+   `${id}`);
  },

  uploadImage(body) {
    return axios.post(urls.uploadImage, body);
  },
  getUserProducts(id) {
    return axios.get(urls.userProducts + `${id}/products`);
  },
  bookmarks() {
    return axios.get(urls.bookmarks);
  },
  bookmarksProduct(ids) {
    console.log([ids]);
    return axios.get(urls.bookmarksProduct,  {
      params: {
        id:ids
      },
      paramsSerializer: params => Qs.stringify(params, {arrayFormat: 'repeat'})
    })
  },
  
  saveBookmarks(id) {
    return axios.post(`${urls.product}/${id}/save`);
  },
  unSaveBookmarks(id) {
    return axios.post(`${urls.product}/${id}/unsave`);
  },
  getBookmarks(id) {
    return axios.get(urls.getBookmarks);
  },
};

export const Chats={
  createChat(productId){
    return axios.post(`${urls.product}${productId}/createChat `);

  },
  fetch(){
    return axios.get(urls.chats);

  }
}
export const Messages={
  sendMessage(chatId, text){
   
    return axios.post(`${urls.chats}/${chatId}/messages`,{text});

  },
  fetchMessages(chatId){
    return axios.get(`${urls.chats}/${chatId}/messages`);

  }
}

export function init() {
  Auth.init();
}
