import { Nav2 } from "../../components/UI/Nav/Nav";
import { Outlet } from "react-router-dom";
import "./RootLayout.css";
function RootLayout() {
  return (
    <>
      <Nav2 />
      <Outlet />
      <footer></footer>
    </>
  );
}
export default RootLayout;
