import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const favsSlice = createSlice({
  name: "favs",
  initialState: {
    value: [1, 2, 3],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      state.value.remove(action.payload);
    },
    toggle: (state, action) => {
      state.value.findIndex(action.payload)
    },
  },
});

// export const { add, remove} = favsSlice.actions;
export default favsSlice;
