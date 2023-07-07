import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  researchSolutionsView: "Research",
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
};

const detailsSlice = createSlice({
  name: "details",
  initialState: DEFAULT_STATE,
  reducers: reducers,
});

export default detailsSlice;
export const detailsActions = detailsSlice.actions;
