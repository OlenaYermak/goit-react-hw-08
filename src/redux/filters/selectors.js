import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;


export const selectContactFilter = (state) => state.filters.name;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactFilter],
  (contacts, filter) => {
   
  
      
      return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter)
    );
  }
);