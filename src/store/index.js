import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../state/Question/questionFormReducer";

const store = configureStore({
    reducer:{
       form: formSlice.reducer 
    }
})

export default store;