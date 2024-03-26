import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./slices/countSlice";

export default configureStore({
  reducer: {
    myfirstitem: countSlice,
  },
});
