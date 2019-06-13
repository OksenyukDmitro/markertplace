import Api from '../api';
import { productsOperations } from '../modules/products';
import { viewerOperations, viewerSelectors } from '../modules/viewer';

export default function saveBookmarks(viewerId, productId) {
  let bookmarks = getBookmarks(viewerId);
  if (bookmarks === null) bookmarks = [];
  if (isBookmarks(viewerId, productId)) {
   saveBookmark(bookmarks,viewerId, productId);
  } else {
   unsaveBookmark(bookmarks,viewerId, productId);
  }
}
async function saveBookmark(bookmarks,viewerId, productId){
  const filteredBookmarks = bookmarks.filter(
    (b) => b !== productId,
  );
  localStorage.setItem(viewerId, JSON.stringify(filteredBookmarks));
  if (viewerId !== 'guest')
    await Api.Products.unSaveBookmarks(productId);
}
async function unsaveBookmark(bookmarks,viewerId, productId){
  bookmarks.push(productId);
  localStorage.setItem(viewerId, JSON.stringify(bookmarks));
  if (viewerId !== 'guest')
    await Api.Products.saveBookmarks(productId);
}
export async function saveBookmarksList(state, productIds) {
  const bookmarks = [];
  const viewer = viewerSelectors.getUser(state);
  if (!viewer) viewer = await viewerOperations.fetchViewer();
  if (productIds)
    productIds.map((id) => {
      bookmarks.push(id);
    });

  localStorage.setItem(viewer.id, JSON.stringify(bookmarks));
}

export function getBookmarks(viewerId) {
  productsOperations.fetchBookmarks();
  return JSON.parse(localStorage.getItem(viewerId));
}

export function isBookmarks(viewerId, productId) {
  const data = getBookmarks(viewerId);

  if (data) return data.includes(productId);
  return false;
}
