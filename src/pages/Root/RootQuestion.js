import "./RootQuestion.css";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../../state/Question/questionSlice";
import { useEffect } from "react";
import { Nav2 } from "../../components/UI/Nav/Nav";

function RootQuestion() {
  const dispatch = useDispatch(); 
  const viewWidth = useSelector(state => state.question.viewWidth)
  useEffect(()=>{ // Handle resizing of window and keep track of the inner width
    const handleResize = () => {
      dispatch(questionActions.setWidth({viewWidth: window.innerWidth}))
      dispatch(questionActions.setIsMobile())
    }
    handleResize();
    window.addEventListener('resize', handleResize); 
    return () => {
      window.removeEventListener('resize', handleResize) //Cleanup function to prevent memory leak 
    }
  }, [dispatch, viewWidth])
  return (
    <Fragment>
      <Nav2 />
      <section>
        <Container className="root-container">
          <h1 className="py-2 text-center text-3xl md:text-5xl">
            {" "}
            Open Problems in Longevity{""}
          </h1>
        </Container>
      </section>
      <main className="w-full p-8">
        <Container>
          <Outlet />
        </Container>
      </main>
    </Fragment>
  );
}

export default RootQuestion;
