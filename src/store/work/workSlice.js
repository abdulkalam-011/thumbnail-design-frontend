import { createSlice } from "@reduxjs/toolkit";
import {workData} from "./workdata.js";



const initialState = {
  name: "work",
  data: workData || [],
};

const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {},
});

export default workSlice.reducer;