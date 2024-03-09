import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../redux/Features/Counter/counterSlice"

const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})

export default store