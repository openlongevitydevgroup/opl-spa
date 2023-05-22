import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../state/Question/questionFormReducer";
import questionSlice from "../state/Question/questionSlice";
import formValidationSlice from "../state/Question/formValidationSlice"

const store = configureStore({
    reducer:{
       form: formSlice.reducer, 
       question: questionSlice.reducer,
       validation: formValidationSlice.reducer
    }
})

export default store;