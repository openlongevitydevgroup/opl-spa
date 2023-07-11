import Submissions from "./Submissions/Submissions";
import ProposalForm from "./ProposalForm/ProposalForm";
function Proposals() {
  return (
    <div className="py-4">
      <section className="submissions">
        <div className="w-full bg-white px-8 py-4 shadow-lg ">
          <Submissions />
          <ProposalForm />
        </div>
      </section>
    </div>
  );
}

export default Proposals;
