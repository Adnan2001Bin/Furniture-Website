import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  "/auth/register",
  async (formdata) => {
    const response = await axios.post(
      "http://localhost:7000/api/auth/register",
      formdata,
      {
        withCredentials: true,
      }
    );
    return response.data
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
