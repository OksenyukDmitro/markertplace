import { createSelector } from 'reselect';

const getMessagesEntities = (state) => state.entities.messages;
const gettParticipantsEntities = (state, chatId) =>
  state.entities.chats[chatId] || [];
const getUserEntities = (state) => state.entities.users;
const getIds = (state, chatId) => state.messages.items[chatId] || [];

export const getMessages = createSelector(
  [getMessagesEntities, getIds],
  (entities, ids) => ids.map((i) => entities[i]),
);
export const getParticipants = createSelector(
  [gettParticipantsEntities],
  (entities) => entities.participants,
);
