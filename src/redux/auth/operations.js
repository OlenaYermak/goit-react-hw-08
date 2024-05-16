import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => {
//     try {
//     console.log("Registering new user:", newUser);
//         const response = await axios.post("/users/signup", newUser);
//      console.log("Response:", response.data);    
//     return response.data;
//     } catch (error) {
//         console.error("Registration error:", error.response?.data || error.message);
//     return thunkAPI.rejectWithValue(error.message);
//     }
// });

 
export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUser);
    //   setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



// 2232939@ukr.net
// nonka@mail.com