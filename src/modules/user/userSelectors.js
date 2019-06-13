import { createSelector } from 'reselect';

const getProductEntities = (state) => state.entities.products;
const getUserEntities = (state) => state.entities.users;
const getLatestIds = (state) => state.products.latest.items;

export const getLatest = createSelector(
  [getProductEntities, getLatestIds],
  (entities, ids) => ids.map((i) => entities[i]),
);
export const getProducts = createSelector(
  (state) => {
    if (state.user.userProducts) {
      return state.user.userProducts.items;
    }

    return undefined;
  },
  (item) => item,
);
export const getOwner = createSelector(
  (state, id) => {
    const users = getUserEntities(state);

    if (!users) {
      return undefined;
    }
    return users[id];
  },
  (item) => item,
);
