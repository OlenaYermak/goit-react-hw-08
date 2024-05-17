// import { createSlice, createSelector } from "@reduxjs/toolkit";
// // import { fetchContacts, addContact, deleteContact } from "./contactsOps";
// import { selectContactFilter } from "./filterSlice";



// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     items: [],
//      loading: false,
//     error: null,
//   },

//   extraReducers: (builder) =>
//     builder
//       .addCase(fetchContacts.pending, (state) => {
//         state.error = false;
//         state.loading = true;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.items = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchContacts.rejected, (state) => {
//         state.error = true;
//         state.loading = false;
//       })
//       .addCase(addContact.pending, (state) => {
//         state.error = false;
//         state.loading = true;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.items.push(action.payload);
//         state.loading = false;
//       })
//       .addCase(addContact.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       })

//       .addCase(deleteContact.pending, (state) => {
//         state.error = null;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.items = state.items.filter(
//           (item) => item.id !== action.payload.id
//         );
//         state.loading = false;
//       })
//    .addCase(deleteContact.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       })
// });





// export default contactsSlice.reducer;

// export const selectContacts = (state) => state.contacts.items;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectContactFilter],
//   (contacts, filter) => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );










// import { createSelector } from "@reduxjs/toolkit";

// export const selectContacts = (state) => state.contacts;

// export const selectSearchQuery = (state) => state.filters;

// export const selectLoading = (state) => state.contacts.loading;

// export const selectError = (state) => state.contacts.error;

// Мемоізація селекторів
// export const selectFilteredContacts = createSelector([selectContacts, selectSearchQuery], (contacts, filters) => {
//   return contacts.items.filter((contact) => contact.name.toLowerCase().includes(filters.name.toLowerCase()));
// });