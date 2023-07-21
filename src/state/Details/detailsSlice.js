import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  submission:{
    description: "", 
    references: [],
    firstName: "",
    lastName:"",
    affiliation:"",
    openProblem:null,
  }, 
  modal: false,
  submitStatus: {
    title: "", 
    message:"", 
    status:""
  }, 
  postSubmissions:{
    length:0,
  }, 
  commentBoxActive: false,
};

const reducers = {
    addReference(state, actions){
      state.submission.references.push({type: "Link", ref: "", id:actions.payload.id})
    }, 
    removeReference(state, actions){
      const filtered = state.submission.references.filter((ref) => ref.id !== actions.payload.id); 
      state.submission.references = filtered;
    },
    setReference(state, actions){
      const {id, key, value} = actions.payload;
      const reference = state.submission.references.find((ref) => ref.id === id); 
      reference[key] = value; 
      state.submission.references.map((ref) => ref.id === reference.id ? ref = reference : ref)     
    },
    setFormValue(state, actions){
      const id = actions.payload.id;
      const value = actions.payload.value;
      state.submission[id] = value;
    }, 
    clearFormValues(state){
      state.submission.description = DEFAULT_STATE.submission.description;
      state.submission.firstName = DEFAULT_STATE.submission.firstName; 
      state.submission.lastName = DEFAULT_STATE.submission.lastName; 
      state.submission.affiliation = DEFAULT_STATE.submission.affiliation;
    },
    setOpenProblem(state, actions){
      state.submission.openProblem = actions.payload.id
    },
    toggleModalOpen(state){
      state.modal = true
    }, 
    toggleModalClose(state){
      state.modal = false
    }, 
    setSubmitState(state,actions){
      const {title, message, status} = actions.payload; 
      state.submitStatus = {title,message,status}
    }, 
    setPostsLength(state, actions){
      state.postSubmissions.length = actions.payload.length;
    }, 
    toggleComment(state, actions){
      const toActivate = actions.payload.toggle; 
      if(toActivate){
        state.commentBoxActive = true;
      }else{
        state.commentBoxActive = false;
      }
    }
    
};

const detailsSlice = createSlice({
  name: "details",
  initialState: DEFAULT_STATE,
  reducers: reducers,
});

export default detailsSlice;
export const detailsActions = detailsSlice.actions;
