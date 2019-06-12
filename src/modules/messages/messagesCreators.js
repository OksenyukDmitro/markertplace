import uuid from 'uuid/v4'


export const createMessage =({text, chatId, ownerId})=>({
    id: uuid(),
    text,
    createdAt: new Date().getTime(),
    chatId,
    ownerId,
})