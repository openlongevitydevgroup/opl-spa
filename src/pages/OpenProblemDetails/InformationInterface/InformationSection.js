import Classification from "./Sections/Classification";
import References from "./Sections/References";
import ConnectedProblems from "./Sections/ConnectedProblems";
import Proposals from "../Proposals/Proposals";
import ProposalHeader from "../Proposals/ProposalHeader";

function InformationSection(props) {
  const children = props.children;
  const id = props.id;
  const isRoot = props.isRoot;
  const parent = props.parent;

  return (
    <>
      <ConnectedProblems children={children} parent={{isRoot, parent}} />
      {!isRoot &&  
      <>
            <ProposalHeader />
      <div className="research-and-proposals">
        <Proposals />
      </div>
      </>
      }

      {/* {!isRoot && <Classification />} */}
      <References id={id} />
    </>
  );
}

export default InformationSection;
