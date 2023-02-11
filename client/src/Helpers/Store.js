import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Index";

export const Store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
