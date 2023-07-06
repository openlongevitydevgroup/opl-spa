import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import RootLayout from "./pages/Root/RootLayout";
// import Home from './pages/Home/Home'
// import About from './pages/About/About'
import RootOpenProblems from "./pages/Root/OpenProblems";
import OpenProblems, {loader as getQuestions} from "./pages/OpenProblems/OpenProblems";
import Details from "./pages/OpenProblemDetails/Details";
import './index.css'

const router = createBrowserRouter([
  {path: 'open-problems', element:<RootOpenProblems/>,children:[
    {index: true, element: <OpenProblems/>, loader:getQuestions},
    {path:':id', element:<Details/>}
  ]}])
//Uncompleted home pages:
// {path: '/', element: <RootLayout/> ,children:[
//   {path: '', index: true, element: <Home/>},
//   {path: 'About', element: <About/>}]}

function App() {
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
