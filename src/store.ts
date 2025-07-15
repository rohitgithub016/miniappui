import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "reducerSlice",
  initialState: { count: 0 },
  reducers: {
    increment: (state, payload) => {
      console.log(payload);
      state.count = state.count + payload?.payload;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice?.reducer,
});
