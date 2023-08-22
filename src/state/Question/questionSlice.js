import { createSlice } from "@reduxjs/toolkit";

// This slice and these actions are related to how the quetsions are viewed including search results from the search bar.

const DEFAULT_STATE = {
  viewType: "tree",
  searchQuery: "",
  filteredResults: null,
  filterOpen: false,
  filters: {
    sorting: "top",
  },
  modalOpen: false,
  modalDetails: {
    title: null,
    description: null,
    species: null,
    citation: null,
  },
  viewWidth: null,
  isMobile: false,
  openProblem: {},
  allProblems: null,
  rootProblems: null,
};

const reducers = {
  toggleTreeState(state) {
    //Set the view type of the question to a hierarchical list
    state.viewType = "tree";
  },
  toggleListState(state) {
    //Set the view type of the question as a list
    state.viewType = "table";
  },
  setQuery(state, actions) {
    //Sets the search query from search bar
    state.searchQuery = actions.payload.query;
  },
  setSearchResults(state, actions) {
    //Gets the search results from the database using the query
    state.filteredResults = actions.payload.results;
  },
  setSorting(state, actions) {
    state.filters.sorting = actions.payload.value;
  },
  //Turn on and off question modal
  toggleModalOpen(state) {
    state.modalOpen = true;
  },
  toggleModalClose(state) {
    state.modalOpen = false;
  },
  setModalDetails(state, actions) {
    state.modalDetails = actions.payload.modalDetails;
  },
  setWidth(state, actions) {
    state.viewWidth = actions.payload.viewWidth;
  },
  setIsMobile(state) {
    state.isMobile = state.viewWidth < 450 ? true : false;
  },
  setState(state, actions) {
    state[actions.payload.key] = actions.payload.value;
  },
};

const questionSlice = createSlice({
  name: "question",
  initialState: DEFAULT_STATE,
  reducers: reducers,
});

export default questionSlice;
export const questionActions = questionSlice.actions;
