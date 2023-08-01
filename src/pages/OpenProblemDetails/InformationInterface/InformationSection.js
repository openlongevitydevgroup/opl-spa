import Classification from "./Sections/Classification";
import References from "./Sections/References";
import ConnectedProblems from "./Sections/ConnectedProblems";
import Proposals from "../Proposals/Proposals";
import ProposalHeader from "../Proposals/ProposalHeader";

function InformationSection(props) {
  const children = props.children;
  const id = props.id;
  const isRoot = props.isRoot;
  return (
    <>
      <ConnectedProblems children={children} />
      <ProposalHeader />
      <div className="research-and-proposals">
        <Proposals />
      </div>
      {!isRoot && <Classification />}
      <References id={id} />
    </>
  );
}

export default InformationSection;
