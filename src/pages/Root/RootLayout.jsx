import { Nav2 } from "../../components/UI/Nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
function RootLayout() {
  return (
    <>
    <div className="nav h-max">
    <Nav2 />
    </div>
    <main className="inline-block h-screen w-full">
    <Outlet />

    </main>
      <section className="footer h-3/12">
      <Footer/>

      </section>
    </>
  );
}
export default RootLayout;
