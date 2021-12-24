import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items;
const getIsLoading = state => state.contacts.isLoading;
const getIsAdding = state => state.contacts.isAdding;
const getDeletingIds = state => state.contacts.deletingIds;
const getFilter = state => state.contacts.filter;
const getFilteredItems = createSelector(getItems, getFilter, (items, filter) =>
  items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())),
);

export {
  getItems,
  getIsLoading,
  getIsAdding,
  getDeletingIds,
  getFilter,
  getFilteredItems,
};
