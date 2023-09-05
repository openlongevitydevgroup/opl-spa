import { useSelector } from "react-redux";
import View from "./View";
import QuestionForm from "../Form/QuestionForm";
import SortingInputs from "./Sorting/SortingInputs";
function ProblemsInterface() {
  const formState = useSelector((state) => state.form);
  // const viewWidth = useSelector((state) => state.question.viewWidth);
  return (
    <div className="flex flex-col">
      {!formState.submitFormOpen && (
        <div className="sort-problems flex flex-row items-center justify-center px-4 pt-2">
          <SortingInputs />
        </div>
      )}

      <div className="questions-container px-4 py-2">
        {formState.submitFormOpen ? (
          <QuestionForm
            parent={
              formState.chosenParent
                ? formState.formDetails.parentTitle
                : "None"
            }
          />
        ) : (
          <View></View>
        )}
      </div>
    </div>
  );
}

export default ProblemsInterface;
