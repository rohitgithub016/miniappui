import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    animateLeftToRight: false,
  },
  reducers: {
    setAnimateLeftToRight: (state, action) => {
      state.animateLeftToRight = action.payload;
    },
  },
});

export const { setAnimateLeftToRight } = counterSlice.actions;
export const selectAnimateLeftToRight = (state: RootState) => {
    return state.counter.animateLeftToRight
}
export default counterSlice.reducer;
