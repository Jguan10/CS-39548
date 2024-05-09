import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
    clear: (state) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, clear } = shopSlice.actions;

export default shopSlice.reducer;
