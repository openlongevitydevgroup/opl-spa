import { useSelector } from "react-redux";
import TextInput from "./TextInput";
import SourcesInput from "./Sources/SourcesInput";
import Chip from "../../../../components/UI/Chip/Chip";
import { useFormik } from "formik";
function ProposalForm() {
  // Redux state for switching post request to correct api endpoint.
  const viewState = useSelector((state) => state.details.researchSolutionsView);
  const formik = useFormik({
    initialValues: {
      title: "",
    },
  });
  const onClickHandler = () => {};

  return (
    <div className="proposal-form flex flex-col px-2 py-2 ">
      <h1 className="title pb-4 text-lg font-semibold text-theme-blue">
        Submit {viewState === "Solution" ? "a solution" : "additional research"}{" "}
      </h1>
      <form>
        <TextInput />
        <SourcesInput />
        <div className="submit-btn flex justify-center px-6">
          <Chip>
            <button type="submit" onClick={onClickHandler}>Submit</button>
          </Chip>
        </div>
      </form>
    </div>
  );
}

export default ProposalForm;
