import { createSlice } from "@reduxjs/toolkit";

export const BackSlice = createSlice({
  name: "BackraundSlice",
  initialState: {
    Signopen: false,
    Manuopen: false,
  },
  reducers: {
    SignBackraund: (state) => {
      state.Signopen = state.Signopen ? false : true;
    },
    NavManuBackround: (state) => {
      state.Manuopen = state.Manuopen ? false : true;
    },
  },
});

export const { SignBackraund, NavManuBackround } = BackSlice.actions;

export default BackSlice.reducer;
