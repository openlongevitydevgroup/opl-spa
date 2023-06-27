import { Form } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { Button } from "@mui/material";
import styles from "./QuestionForm.module.css";
import { formActions } from "../../../state/Question/questionFormSlice";
import { formValidationActions } from "../../../state/Question/formValidationSlice";
import FormContent from "./FormContent";
import ModalT from "../../../components/UI/Modal/Modal";

function QuestionForm() {
  const dispatch = useDispatch();

  const formDetailsState = useSelector((state) => state.form.formDetails);
  const formStatus = useSelector((state) => state.form.submitStatus);
  const formModalState = useSelector((state) => state.form.submitModalOpen);
  const validationState = useSelector((state) => state.validation);

  //Scroll to element on load;
  const ref = useRef(null);
  const scrollTo = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollTo();
  }, []);

  //Submission modal
  const onSubmitModalClose = () => {
    dispatch(formActions.toggleModalClose());
    dispatch(formActions.resetForm());
  };

  //Form submission handler - submits to database in the submitted questions database
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    validateForm(dispatch, formDetailsState, validationState)
      .then(() => sendRequest(formDetailsState, dispatch))
      .catch(() => {
        dispatch(formActions.toggleModalOpen());
        dispatch(
          formActions.setSubmitStatus({
            status: "failed",
            title: "Incomplete submission",
            message:
              "Please enter required fields (title and description) and ensure that you have entered a valid email address.",
          })
        );
      });
  };
  //Exit button handler
  const exitButtonHandler = () => {
    dispatch(formActions.resetForm());
  };

  return (
    <div className="form items-center">
      <h1
        ref={ref}
        className="form-title text-center text-xl font-bold md:text-2xl"
      >
        Submit a question
      </h1>
      <p className="py-4 text-sm md:text-base">
        If you believe that a question you are submitting falls, as a category,
        under one of our high-level questions please select it as a parent
        question. If not, select None. Additionally, a parent question, title
        and description are required to submit your question.
      </p>
      <Form
        className="flex w-full flex-col items-center text-center text-sm md:text-base"
        onSubmit={onSubmitHandler}
      >
        <FormContent />

        <div className={styles.buttons}>
          <Button type="submit"> Submit </Button>
          <Button onClick={exitButtonHandler}>Exit</Button>
        </div>

        {formModalState && (
          <ModalT
            open={formModalState}
            close={onSubmitModalClose}
            height={350}
            width={350}
          >
            <div className="p-2">
              <h1 className="text-center text-lg font-bold md:text-2xl">
                {formStatus.title}
              </h1>
              <p className="text-md pt-4 md:text-lg">{formStatus.message}</p>
              <div className="flex flex-row justify-center p-2">
                <Button onClick={onSubmitModalClose}>Exit</Button>
              </div>
            </div>
          </ModalT>
        )}
      </Form>
    </div>
  );
}

//Send request to the database using formData
const sendRequest = async (formDetailsState, dispatch) => {
  try {
    const response = await axios.post(
      `http://${process.env.REACT_APP_POST_REQUEST}/api/questions/submit`,
      {
        title: formDetailsState.title,
        excerpt: formDetailsState.description,
        parent_question:
          formDetailsState.parentTitle === "None"
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

const validateForm = (dispatch, formDetailsState, validationState) => {
  dispatch(formValidationActions.checkTitle({ title: formDetailsState.title }));
  dispatch(
    formValidationActions.checkDescription({
      description: formDetailsState.description,
    })
  );
  dispatch(formValidationActions.checkEmail({ email: formDetailsState.email }));
  if (!formDetailsState.email.trim()) {
    return new Promise((resolve, reject) => {
      validationState.title && validationState.description
        ? resolve()
        : reject();
    });
  } else {
    return new Promise((resolve, reject) => {
      validationState.title &&
      validationState.description &&
      validationState.email
        ? resolve()
        : reject();
    });
  }
};

export default QuestionForm;
