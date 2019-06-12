export default function saveBookmarks(viewerId, productId) {
  let bookmarks = getBookmarks(viewerId);
  if(bookmarks === null)
  bookmarks = [];
  if (isBookmarks(viewerId, productId)) {
    const filteredBookmarks = bookmarks.filter(b => b !==productId);
    
    localStorage.setItem(viewerId, JSON.stringify(filteredBookmarks));
  } else {
    bookmarks.push(productId);
    localStorage.setItem(viewerId, JSON.stringify(bookmarks));
  }  
}
export function getBookmarks(viewerId) {
  return JSON.parse(localStorage.getItem(viewerId));
}

export function isBookmarks(viewerId, productId) {
  if( getBookmarks(viewerId))
  return getBookmarks(viewerId).includes(productId);
  return false;
}
