import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state) => {},
    login: (state) => {},
    logout: () => {},
  },
});

export const { register, login, logout } = userSlice.actions;

export default userSlice.reducer;
