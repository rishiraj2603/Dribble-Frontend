import { configureStore, createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
  name: "userName",
  initialState: { userName: "" },
  reducers: {
    saveUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { userName: userNameSlice.reducer },
});

export const { saveUserName } = userNameSlice.actions;
export default store;
