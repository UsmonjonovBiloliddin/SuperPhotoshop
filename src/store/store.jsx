import { configureStore } from "@reduxjs/toolkit";
import BackraundSlice from "../Slice/BackraundSlice";

export const store = configureStore({
    reducer:{
        background:BackraundSlice
    }

})

export default store