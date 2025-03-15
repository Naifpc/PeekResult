import { Outlet } from "react-router-dom";
import BrowserNavbar from "../partials/BrowserNavbar";

function TrainersLayout({ fetchData, userData, logout }) {
  return (
    <>
      <BrowserNavbar
        fetchData={fetchData}
        userData={userData}
        logout={logout}
      />
      <Outlet />
    </>
  );
}

export default TrainersLayout;
