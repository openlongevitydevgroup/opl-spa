import { Form, useLoaderData } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import {
  Typography,
  StyledEngineProvider,
  Button,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import ModalInstance from "../../../components/UI/Modal/Modal";
import styles from "./QuestionForm.module.css";
import { formActions } from "../../../state/Question/questionFormReducer";
import { formValidationActions } from "../../../state/Question/formValidationSlice";

function QuestionForm(props) {
  const dispatch = useDispatch();
  const { data: questions } = useLoaderData();

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

  //Parent question selection input
  const selectOnChange = (e, id) => {
    if (e.target.value === "None") {
      dispatch(
        formActions.chooseParent({
          chosenParentTitle: "",
          parentId: null,
        })
      );
    } else {
      dispatch(
        formActions.chooseParent({
          chosenParentTitle: e.target.value,
          parentId: id.props.id,
        })
      );
    }
  };

  //Text input change
  const inputOnChange = (e, key) => {
    dispatch(formActions.inputChange({ id: key, value: e.target.value }));
  };
  //Submission modal
  const onSubmitModalClose = () => {
    dispatch(formActions.toggleModalClose());
    dispatch(formActions.resetForm());
  };

  //Form submission handler - submits to database in the submitted questions database
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const isValidated = validateForm(
      validationState,
      formDetailsState,
      dispatch
    );

    if (isValidated) {
      //Send request if valid
      sendRequest(isValidated, formDetailsState, dispatch);
    } else {
      dispatch(formActions.toggleModalOpen());
      dispatch(
        formActions.setSubmitStatus({
          status: "failed",
          title: "Incomplete submission",
          message: "Please enter required fields (title and description)",
        })
      );
    }
  };

  //Exit button handler
  const exitButtonHandler = () => {
    dispatch(formActions.resetForm());
  };

  return (
    <StyledEngineProvider injectFirst>
      <h1 ref={ref} className="form-title text-center text-xl md:text-2xl">
        Submit a question
      </h1>
      <p className="py-4 text-sm md:text-base">
        If you believe that a question you are submitting falls, as a category,
        under one of our high-level questions please select it as a parent
        question. If not, select None. Additionally, a parent question, title
        and description are required to submit your question.
      </p>
      <Form
        className="flex w-full flex-col text-sm md:text-base"
        onSubmit={onSubmitHandler}
      >
        <div className={styles.inputs}>
          <label htmlFor="Parent-Question:" className="py-2">
            <p>Parent question:</p>
          </label>
          <Select
            sx={{ width: "80%", marginLeft: "1.5rem" }}
            onChange={(e, id) => selectOnChange(e, id)}
            value={formDetailsState.parentTitle}
          >
            <MenuItem key="0" id={0} value="None">
              None
            </MenuItem>
            {questions.map((question) => {
              return (
                <MenuItem
                  key={question.question_id}
                  id={question.question_id}
                  value={question.title}
                >
                  {question.title}
                </MenuItem>
              );
            })}
          </Select>
        </div>

        <div className={styles.inputs}>
          <label htmlFor="title">
            <p>Title:</p>
          </label>
          <TextField
            required={true}
            id="title"
            label="required"
            onChange={(e) => inputOnChange(e, "title")}
            value={formDetailsState.title}
          ></TextField>
        </div>

        <div className={styles.inputs}>
          <label htmlFor="description">
            <p>Description:</p>
          </label>
          <TextField
            required
            onChange={(e) => inputOnChange(e, "description")}
            id="description"
            multiline
            rows={4}
            value={formDetailsState.description}
            label="required"
          ></TextField>
        </div>

        {/* Need to refactor this bit due to repeats */}
        <div className={styles.inputs}>
          <label htmlFor="species" className="">
            {" "}
            <p>Species (if applicable):</p>{" "}
          </label>
          <TextField
            onChange={(e) => inputOnChange(e, "species")}
            name="species"
            id="species"
            type="text"
            value={formDetailsState.species}
          />
        </div>

        <div className={styles.inputs}>
          <label htmlFor="references">
            <p> References (optional):</p>
          </label>
          <TextField
            onChange={(e) => inputOnChange(e, "citation")}
            name="references"
            id="references"
            multiline
            rows={4}
            value={formDetailsState.citation}
          />
        </div>

        <div className={styles.buttons}>
          <Button type="submit"> Submit </Button>
          <Button onClick={exitButtonHandler}>Exit</Button>
        </div>

        {formModalState && (
          <ModalInstance
            open={formModalState}
            close={onSubmitModalClose}
            width={300}
            height={"max-content"}
          >
            <div className="p-2">
              <Typography variant="h5" sx={{ paddingTop: "3rem" }}>
                {" "}
                {formStatus.title}{" "}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  paddingTop: "2rem",
                }}
              >
                {" "}
                {formStatus.message}{" "}
              </Typography>
              <Button onClick={onSubmitModalClose} sx={{ padding: "1.5rem" }}>
                Exit
              </Button>
            </div>
          </ModalInstance>
        )}
      </Form>
    </StyledEngineProvider>
  );
}

const validateForm = (validationState, formDetailsState, dispatch) => {
  console.log(validationState);
  dispatch(formValidationActions.checkTitle({ title: formDetailsState.title }));
  dispatch(
    formValidationActions.checkDescription({
      description: formDetailsState.description,
    })
  );
  if (validationState.title && validationState.description) {
    return true;
  } else {
    return false;
  }
};

//Send request to the database using formData
const sendRequest = async (formDetailsState, dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/questions/submit",
      {
        title: formDetailsState.title,
        excerpt: formDetailsState.description,
        parent_question:
          formDetailsState.parentTitle === "None"
            ? null
            : formDetailsState.parentId,
        species: formDetailsState.species,
        citation: formDetailsState.citation,
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

export default QuestionForm;
