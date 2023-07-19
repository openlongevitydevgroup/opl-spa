import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
    viewWidth: null,
    isMobile: false,
}

const reducers = {
    setWidth(state, actions){
        state.viewWidth = actions.payload.viewWidth
      },
      setIsMobile(state){
        state.isMobile = state.viewWidth < 450 ? true : false;
      },
}

const generalSlice = createSlice({
    name: "general",
    initialState: DEFAULT_STATE,
    reducers: reducers,
  });

export default generalSlice; 
export const generalActions = generalSlice.actions; 