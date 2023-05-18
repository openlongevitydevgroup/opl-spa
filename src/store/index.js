import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../state/Question/questionFormReducer";
import questionSlice from "../state/Question/questionSlice";


const store = configureStore({
    reducer:{
       form: formSlice.reducer, 
       question: questionSlice.reducer,
    }
})

export default store;