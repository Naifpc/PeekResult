import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import BrowserNavbar from "../partials/BrowserNavbar";
import Footer from "../partials/footer";
import { BrowserView, MobileView } from "react-device-detect";
import SecondaryNav from "../partials/SecondaryNav";

function SecondaryLayout({ fetchData, userData, logout, prev, title }) {
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
          logout={logout}
          links={links}
        />
        <Outlet />
        <Footer />
      </BrowserView>

      <MobileView>
        <SecondaryNav prev={prev} title={title} />
        <Outlet />
      </MobileView>
    </>
  );
}

export default SecondaryLayout;
