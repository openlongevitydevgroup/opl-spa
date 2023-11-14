import { useSelector, useDispatch } from "react-redux";
import { generalActions } from "../../state/generalStateSlice";
import SubmissionModalContent from "../../components/UI/Modal/SubmissionModalContent";
import Statbar from "./Statbar/Statbar";
import SearchBar from "./SearchBar/SearchBar";
import ProblemsInterface from "./ProblemsInterface/ProblemsInterface";
import Modal from "../../components/UI/Modal/Modal";
import { useEffect } from "react";
import SideNav from "../../components/UI/Nav/SideNav/SideNav";
import config from "../../utils/configs/SideNavConfig";
function OpenProblems() {
  const modalState = useSelector((state) => state.question.modalOpen);
  const questionDetails = useSelector((state) => state.question.modalDetails);
  const dispatch = useDispatch();
  const modalCloseHandler = () => {
    dispatch(generalActions.toggleModal({ bool: false }));
  };
  // Set openProblems

  return (
    <div className="w-full overflow-auto flex flex-row p-6  space-x-4">
      <div className="side-nav w-1/5">
        <SideNav config={config} />
      </div>
      <div className="main w-4/5">
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
