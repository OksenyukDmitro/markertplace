import { schema } from 'normalizr';

export const User = new schema.Entity('users');
export const Product = new schema.Entity('products', {
  owner: User,
});
export const ProductList = new schema.Array(Product);

export const Message = new schema.Entity('messages', undefined, {
  idAttribute: (entity) => entity.id + '-' + entity.chatId,
});

export const MessageCollection = [Message];
export const Chat = new schema.Entity('chats',{
  lastMessage:Message
});

export const ChatCollection = [Chat];

export const UserProducts = new schema.Entity('userProducts', {
  list: ProductList,
});
