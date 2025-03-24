import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import BrowserNavbar from "../partials/BrowserNavbar";
import Footer from "../partials/footer";
import { BrowserView, MobileView } from "react-device-detect";
import { MobileBotNavbar, MobiletopNavbar } from "../partials/MobileNavbar";
import { useState } from "react";
import LoginRequired from "../partials/loginRequired";

function DefaultLayout({ fetchData, userData, logout }) {
  useEffect(() => {
    fetchData();
  }, []);
  const links = [
    { link: "/trainers", name: "العملاء", icon: "bi bi-people" },
    { link: "/messages", name: "الرسائل", icon: "bi bi-chat" },
    { link: "/trainers/plans", name: "الخطط", icon: "bi bi-file-text" },
    {
      link: `/trainers/aboutTrainer/${userData.id}`,
      name: "الحساب",
      icon: "bi bi-person",
    },
  ];
  const [modalShow, setModalShow] = useState(true);

  return (
    <>
      {userData ? (
        <>
          <BrowserView>
            <BrowserNavbar
              fetchData={fetchData}
              userData={userData}
              logout={logout}
              links={links}
            />
            <Outlet />
            <Footer />
          </BrowserView>

          <MobileView>
            <MobiletopNavbar fetchData={fetchData} userData={userData} />
            <Outlet />
            <MobileBotNavbar links={links} />
          </MobileView>
        </>
      ) : (
        <LoginRequired
          show={modalShow}
          onHide={() => setModalShow(false)}
          fetchData={fetchData}
        />
      )}
    </>
  );
}

export default DefaultLayout;
