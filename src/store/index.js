import { configureStore } from "@reduxjs/toolkit";
import workReducer from "./work/workSlice";


const store = configureStore({
  reducer: {
    work:workReducer,
  },
})

export {store}