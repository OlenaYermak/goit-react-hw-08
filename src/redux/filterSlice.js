

import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
      searchContact(state, action) {
          
      state.name = action.payload;
    },
  },
});

export const { searchContact } = filterSlice.actions;

export const selectContactFilter = (state) => state.filters.name;

export default filterSlice.reducer;

