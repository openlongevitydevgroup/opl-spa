import "./RootQuestion.css";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../../state/Question/questionSlice";
import { useEffect } from "react";
import { Nav2 } from "../../components/UI/Nav/Nav";
import Footer from "./Footer/Footer";
import SideNav from "../../components/UI/Nav/SideNav/SideNav";

function RootOpenProblems() {
  const dispatch = useDispatch();
  const viewWidth = useSelector((state) => state.question.viewWidth);
  useEffect(() => {
    // Handle resizing of window and keep track of the inner width
    const handleResize = () => {
      dispatch(questionActions.setWidth({ viewWidth: window.innerWidth }));
      dispatch(questionActions.setIsMobile());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); //Cleanup function to prevent memory leak
    };
  }, [dispatch, viewWidth]);
  return (
    <>
      <div className="nav h-3/12">
        <Nav2 />
      </div>
      {/* <section className="h-6/12 px-12"> */}
      {/* <Container className="root-container">
          <h1 className="py-2 text-center text-3xl md:text-5xl" id="title">
            {" "}
            Open Problems in Longevity{""}
          </h1>
        </Container> */}
      {/* </section> */}
      <main
        className={`w-full ${
          viewWidth > 450 ? "px-8" : "px-2"
        } overflow-auto py-6 pb-4`}
      >
        <div className="flex flex-row justify-between">
          <SideNav />
          <Outlet />
        </div>
      </main>
      <footer className="h-3/12">
        <Footer />
      </footer>
    </>
  );
}

export default RootOpenProblems;
