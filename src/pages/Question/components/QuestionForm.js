import { Form } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
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

const validateForm = (validationState, formDetailsState, dispatch) => {
    dispatch(formValidationActions.checkTitle({title: formDetailsState.title}));
    dispatch(formValidationActions.checkDescription({description: formDetailsState.description}));
    if (validationState.title && validationState.description) {
        return true;
    } else {
        return false;
    }
};

function QuestionForm(props) {
  const dispatch = useDispatch();
  const formDetailsState = useSelector((state) => state.form.formDetails);
  const formStatus = useSelector((state) => state.form.submitStatus);
  const formModalState = useSelector((state) => state.form.submitModalOpen);
  const validationState = useSelector((state) => state.validation);
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
    //Send request
    if (isValidated) {
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
          console.log(formModalState);
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
        throw error;
      }
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
    dispatch(formActions.toggleFormClose());
    dispatch(formActions.resetForm());
  };

  return (
    <StyledEngineProvider injectFirst>
      <Typography variant="h3"> Submit a question </Typography>
      <Form className="w-full flex flex-col" onSubmit={onSubmitHandler}>
        <div className={styles.inputs}>
          <label htmlFor="Parent-Question:">
            {" "}
            <Typography>Parent question</Typography>{" "}
          </label>
          <Select
            sx={{ width: "80%", marginLeft: "1.5rem" }}
            label="Parent Question"
            onChange={(e, id) => selectOnChange(e, id)}
            value={formDetailsState.parentTitle}
          >
            <MenuItem key="0" id={0} value="None">
              {" "}
              None
            </MenuItem>
            {props.questions.map((question) => {
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
            {" "}
            <Typography variant="body1">Title:</Typography>{" "}
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
            <Typography>Description:</Typography>
          </label>
          <TextField
            required
            onChange={(e) => inputOnChange(e, "description")}
            id="description"
            multiline
            rows={4}
            value={formDetailsState.description}
          ></TextField>
        </div>

        {/* Need to refactor this bit due to repeats */}
        <div className={styles.inputs}>
          <label htmlFor="species">
            {" "}
            <Typography>Species (If applicable)</Typography>{" "}
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
            {" "}
            <Typography> References (optional)</Typography>{" "}
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
                        <Button
                            onClick={onSubmitModalClose}
                            sx={{ padding: "1.5rem" }}
                        >
                            Exit
                        </Button>
                    </ModalInstance>
                )}
            </Form>
        </StyledEngineProvider>
    );
}

export default QuestionForm;
