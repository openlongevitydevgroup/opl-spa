import { useSelector, useDispatch } from "react-redux";
import { generalActions } from "../../state/generalStateSlice";
import SubmissionModalContent from "../../components/UI/Modal/SubmissionModalContent";
import Statbar from "./Statbar/Statbar";
import SearchBar from "./SearchBar/SearchBar";
import ProblemsInterface from "./ProblemsInterface/ProblemsInterface";
import Modal from "../../components/UI/Modal/Modal";
import { useEffect } from "react";
import { getProblems } from "../../utils/functions/getOpenProblems";
import SideNav from "../../components/UI/Nav/SideNav/SideNav";
import config from "../../utils/configs/SideNavConfig";
function OpenProblems() {
  const modalState = useSelector((state) => state.question.modalOpen);
  const questionDetails = useSelector((state) => state.question.modalDetails);
  const dispatch = useDispatch();
  const modalCloseHandler = () => {
    dispatch(generalActions.toggleModal({ bool: false }));
  };
  useEffect(() => {
    getProblems(dispatch);
  }, [dispatch]);
  // Set openProblems

  return (
    <div className="w-full overflow-auto flex flex-row p-6  space-x-4">
      {/* <div className="py-2 pb-6 text-center text-sm md:text-lg">
        <p>
          <strong>
            Our initial list of open problems in ageing and longevity science
            and their interconnected aspects organised in a hierarchical manner.
            Each problem of interest can represent a broader topic where you can
            find other connected problems that can offer insights into specific
            areas of the topic. We encourage you to contribute your open
            problems to aid in refining our database and effectively
            categorizing these scientific challenges.
          </strong>{" "}
        </p>
      </div> */}
      {/* <div>
        <p className="pb-2 text-sm md:text-base">
          {" "}
          If you want to add an open problem that falls under the problems
          provided, select the open problem and click the "add" button.
          Otherwise use the submit open problem button in the bar below.
        </p>
      </div> */}
      <div className="side-nav w-1/4">
        <SideNav config={config} />
      </div>
      <div className="main w-3/4">
        {" "}
        <SearchBar label={"Search for an open problem"} />
        <Statbar className="statbar" />
        <ProblemsInterface />
      </div>
      <Modal open={modalState} close={modalCloseHandler}>
        <SubmissionModalContent
          questionDetails={questionDetails}
          close={modalCloseHandler}
        />
      </Modal>
    </div>
  );
}
export default OpenProblems;
