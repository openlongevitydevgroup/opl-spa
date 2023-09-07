import { createSlice } from "@reduxjs/toolkit";

/// This slice and actions are related to the question form.

const DEFAULT_STATE = {
  submitFormOpen: false,
  chosenParent: false,
  formDetails: {
    title: "",
    description: "",
    parentTitle: "Submit as a root problem",
    parentId: null,
    species: "",
    references: [],
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
    jobfield: "",
  },
  submitModalOpen: false,
  submitStatus: {
    status: null,
    title: null,
    message: null,
  },
};
//Paylod data structure: {hasParent: boolean, parent: 'id-string'}
const reducers = {
  toggleFormOpen(state) {
    state.submitFormOpen = true;
  },
  toggleFormClose(state) {
    state.submitFormOpen = false;
  },
  chooseParent(state, action) {
    state.chosenParent = true;
    state.formDetails.parentTitle = action.payload.chosenParentTitle;
    state.formDetails.parentId = action.payload.parentId;
  },
  inputChange(state, action) {
    state.formDetails[action.payload.id] = action.payload.value;
  },
  selectChange(state, action) {
    state.formDetails.parentId = action.payload.id;
  },
  setReferences(state, action) {
    const referenceArray = [];
    const retrievedReferences = action.payload.references;
    for (const ref of retrievedReferences) {
      const index = ref.indexOf(":");
      const prefix = ref.substring(0, index);
      const suffix = ref.substring(index + 1);
      // const prefix = splitPrefix[0];
      switch (prefix) {
        case "doi":
          const doi = suffix;
          referenceArray.push({ type: "DOI", value: doi });
          break;
        case "pmid":
          const pmid = suffix;
          referenceArray.push({ type: "PMID", value: pmid });
          break;
        // If these prefixes are not included, the reference is invalid and will not be added to the array
        default:
          break;
      }
    }

    state.formDetails.references = referenceArray;
  },
  resetForm: (state, actions) => {
    const exit = actions.payload.exit;
    if (state.submitFormOpen && !exit) {
      return {
        ...DEFAULT_STATE,
        submitFormOpen: true,
        chosenParent: true,
        formDetails: {
          ...DEFAULT_STATE.formDetails,
          parentTitle: state.formDetails.parentTitle,
          parentId: state.formDetails.parentId,
        },
      };
    } else {
      return DEFAULT_STATE;
    }
  },
  toggleModalOpen(state) {
    state.submitModalOpen = true;
  },
  toggleModalClose(state) {
    state.submitModalOpen = false;
  },
  setSubmitStatus(state, action) {
    state.submitStatus = {
      status: action.payload.status,
      title: action.payload.title,
      message: action.payload.message,
    };
  },
};

const formSlice = createSlice({
  name: "form",
  initialState: DEFAULT_STATE,
  reducers: reducers,
});

export default formSlice;
export const formActions = formSlice.actions;
