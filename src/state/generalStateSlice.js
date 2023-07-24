import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  viewWidth: null,
  isMobile: false,
  modal: {
    isOpen: false,
    content: {
      title: "",
      message: "",
      status: "",
    },
  },
};

const reducers = {
  setWidth(state, actions) {
    state.viewWidth = actions.payload.viewWidth;
  },
  setIsMobile(state) {
    state.isMobile = state.viewWidth < 450 ? true : false;
  },
  // Generic state for toggling a state. 
  toggleModal(state){
    state.modal.isOpen = !state.modal.isOpen; 
  }, 
  setModalContent(state,actions){
    state.modal.content = actions.payload.content;
  }, 
  // Generic reducer for setting a state
  setState(state,actions){
    state[actions.payload.key] = actions.payload.value;
  }, 
  
};

const generalSlice = createSlice({
  name: "general",
  initialState: DEFAULT_STATE,
  reducers: reducers,
});

export default generalSlice;
export const generalActions = generalSlice.actions;
