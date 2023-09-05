import { useLoaderData } from "react-router-dom";
import { useRef } from "react";
import InformationSection from "./InformationInterface/InformationSection";
import { Link } from "react-router-dom";
import ProposalHeader from "./Proposals/ProposalHeader";
import Proposals from "./Proposals/Proposals";
function Details() {
  const { data } = useLoaderData();
  const openProblemDetails = data.open_problem;
  const description = data.open_problem.description;
  const id = openProblemDetails.problem_id;
  const title = openProblemDetails.title;
  const children = openProblemDetails.children;
  const parent = data.parent_data;
  const isRoot = parent ? false : true;

  // Select the title of the open problem to use as the anchor for the scrollToView function
  const ref = useRef(null);

  return (
    <div>
      <hr className="border-1 border-theme-blue" />
      <div className="return-bttn">
        <Link
          to="/open-problems"
          className="pt-2 text-base text-theme-blue underline hover:font-semibold md:text-lg"
        >
          {" "}
          Return{" "}
        </Link>
      </div>
      <div ref={ref} className="title flex flex-row pt-8 ">
        <h1 className="text-lg md:text-2xl" id={`title${id}`}>
          <u>{title}</u>{" "}
        </h1>
      </div>
      {description && (
        <div className="description py-4">{description && description}</div>
      )}

      <div className="details py-2">
        <InformationSection
          children={children}
          id={id}
          isRoot={isRoot}
          parent={parent}
        />
      </div>
      <hr className="border-1 mt-10 border-theme-blue" />
      {/* <ProposalHeader />
      <div className="research-and-proposals">
        <Proposals />
      </div> */}
    </div>
  );
}

export default Details;
