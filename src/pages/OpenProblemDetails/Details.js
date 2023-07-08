import { useLoaderData } from "react-router-dom";
import { useEffect, useRef } from "react";
import InformationSection from "./InformationInterface/InformationSection";
import ProposalHeader from "./Proposals/ProposalHeader";
import Proposals from "./Proposals/Proposals";
function Details() {
  const { data } = useLoaderData();
  const openProblemDetails = data.open_problem;
  const id = openProblemDetails.question_id;
  const title = openProblemDetails.title;
  const children = openProblemDetails.children;

  // Select the title of the open problem to use as the anchor for the scrollToView function
  const ref = useRef(null);
  const scrollTo = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollTo();
  }, []);

  return (
    <div>
      <hr className="border-1 border-theme-blue" />
      <div ref={ref} className="title flex flex-row pt-8 ">
        <h1 className="text-lg md:text-2xl">
          Open Problem {id}: <u>{title}</u>{" "}
        </h1>
      </div>
      <div className="details py-2">
        <InformationSection children={children}/>
      </div>
      <hr className="border-1 mt-10 border-theme-blue" />
      <ProposalHeader/>
      <div className="research-and-proposals">
        <Proposals />
      </div>
    </div>
  );
}

export default Details;
