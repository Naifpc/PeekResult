import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import BrowserNavbar from "../partials/BrowserNavbar";
import Footer from "../partials/footer";
import { BrowserView, MobileView } from "react-device-detect";
import { MobileBotNavbar, MobiletopNavbar } from "../partials/MobileNavbar";

function DefaultLayout({ fetchData, userData, setUserData }) {
  useEffect(() => {
    fetchData();
  }, []);

  const links = [
    { link: "/", name: "المدربين", icon: "bi bi-person-badge" },
    { link: "/Schedules", name: "جداول", icon: "bi bi-calendar3" },
    { link: "/Offers", name: "العروض", icon: "bi bi-percent" },
    { link: "/Account", name: "بياناتي", icon: "bi bi-pie-chart" },
  ];
  return (
    <>
      <BrowserView>
        <BrowserNavbar
          fetchData={fetchData}
          userData={userData}
          setUserData={setUserData}
          links={links}
        />
        <Outlet />
        <Footer />
      </BrowserView>

      <MobileView>
        <MobiletopNavbar
          fetchData={fetchData}
          userData={userData}
          setUserData={setUserData}
        />
        <Outlet />
        <MobileBotNavbar links={links} />
      </MobileView>
    </>
  );
}

export default DefaultLayout;
