import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";

import contactsReducer from "./contacts/slice";


// import contactsReducer from "./contactsSlice";
import filtersReducer from "./filterSlice";



const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
  
});


export default store;