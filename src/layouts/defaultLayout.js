import { Outlet } from "react-router-dom";
import BrowserNavbar from "../partials/BrowserNavbar";
import Footer from "../partials/footer";

function DefaultLayout({ fetchData, userData, logout }) {
  return (
    <>
      <BrowserNavbar
        fetchData={fetchData}
        userData={userData}
        logout={logout}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;
