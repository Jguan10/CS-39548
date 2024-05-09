import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./shop";

export default configureStore({
  reducer: {
    shop: shopReducer,
  },
});
