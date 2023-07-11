import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  researchSolutionsView: "Research",
  submission:{
    description: "", 
    references: [],
    openProblem:null,
  }
};

const reducers = {
  changeView(state, actions) {
    if (actions.payload.view === "Research") {
      state.researchSolutionsView = "Research";
    }
    if (actions.payload.view === "Solution") {
      state.researchSolutionsView = "Solution";
    }
  },
    addReference(state, actions){
      state.submission.references.push({type: "", ref: "", id:actions.payload.id})
    }, 
    removeReference(state, actions){
      const filtered = state.submission.references.filter((ref) => ref.id !== actions.payload.id); 
      state.submission.references = filtered;
    },
    setFormValue(state, actions){
      const id = actions.payload.id;
      const value = actions.payload.value;
    }
};

const detailsSlice = createSlice({
  name: "details",
  initialState: DEFAULT_STATE,
  reducers: reducers,
});

export default detailsSlice;
export const detailsActions = detailsSlice.actions;
