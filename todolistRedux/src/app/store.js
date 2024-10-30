import { configureStore } from "@reduxjs/toolkit"

import todoReducer from "../features/todo/todoSlice"
// here what is exporting from todoSlice.js we export in name of todoReducer
// and todoSlice.js is exporting todoSlice.reducer which it made internally .

export const store=configureStore({
    reducer:todoReducer
})