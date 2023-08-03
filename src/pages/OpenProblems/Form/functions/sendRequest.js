import { formActions } from "../../../../state/Question/questionFormSlice";
import axios from "axios";

//Send request to the database using formData
const sendRequest = async (formDetailsState, dispatch) => {
  console.log(formDetailsState.parentTitle)
  console.log(formDetailsState.parentId)
    try {
      const response = await axios.post(process.env.REACT_APP_POST_REQUEST,
        {
          title: formDetailsState.title,
          excerpt: formDetailsState.description,
          parent_problem:
            formDetailsState.parentTitle === "Submit as a root problem"
              ? null
              : formDetailsState.parentId,
          species: formDetailsState.species,
          citation: formDetailsState.citation,
          first_name: formDetailsState.firstName,
          last_name: formDetailsState.lastName,
          email: formDetailsState.email,
          organisation: formDetailsState.organisation,
          job_field: formDetailsState.jobfield,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      if (response.status === 201) {
        //Creates a success status
        dispatch(
          formActions.setSubmitStatus({
            status: "success",
            title: "Submitted",
            message: "Question information was submitted successfully.",
          })
        );
        //Toggle modal to display success status
        dispatch(formActions.toggleModalOpen());
      }
    } catch (error) {
      dispatch(formActions.toggleModalOpen());
      dispatch(
        formActions.setSubmitStatus({
          status: "failed",
          title: "Unsuccessful submission",
          message: error.message,
        })
      );
    }
  };

  export default sendRequest