import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};
 
export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUser);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", userInfo);
        setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout", async () => {
    try {
      await axios.post("/users/logout");
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const reduxState = thunkAPI.getState();
  const savedToken = reduxState.auth.token;
setAuthHeader(savedToken);

  const response = await axios.get("/users/current");
  return response.data;
  
},
{condition(_, thunkAPI) {
  const reduxState = thunkAPI.getState();
  const savedToken = reduxState.auth.token;

  return savedToken !== null;
},});


// export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const savedToken = state.auth.token || localStorage.getItem("token"); // Отримуємо токен з Redux або localStorage

//   console.log(savedToken);

//   if (!savedToken) {
//     return thunkAPI.rejectWithValue("No token found");
//   }

//   setAuthHeader(savedToken);

//   try {
//     const response = await axios.get("/users/current");
//     console.log("my refresh");
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// 2232939@ukr.net
// nonka@mail.com