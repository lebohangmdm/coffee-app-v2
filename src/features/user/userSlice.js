import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  email: "",
  address: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.firstName = action.payload.name;
    },
    logout: (state) => {},
  },
});

export const { register, login, logout } = userSlice.actions;

export default userSlice.reducer;
