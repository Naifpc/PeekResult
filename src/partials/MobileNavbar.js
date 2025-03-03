import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./login";

function MobileBotNavbar() {
  return (
    <nav class="navbar py-0 px-2 px-sm-2 px-md-3 px-lg-4 px-xl-5 fixed-bottom bg-body border-top  ">
      <div class="container-fluid p-0">
        <ul class="navbar-nav d-flex flex-row justify-content-evenly p-0 w-100">
          <li class="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link active text-center d-flex flex-column align-items-center border-top border-primary border-2 p-0"
                  : "nav-link text-center d-flex flex-column align-items-center p-0"
              }
              to="/"
            >
              <i class="bi bi-person-badge fs-3"></i>
              <h2 class="nav-link p-0">المدربين</h2>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link active text-center d-flex flex-column align-items-center border-top border-primary border-2 p-0"
                  : "nav-link text-center d-flex flex-column align-items-center p-0"
              }
              to="/Schedules"
            >
              <i class="bi bi-calendar3 fs-3"></i>
              <h2 class="nav-link p-0">الجداول</h2>
            </NavLink>
          </li>
          <li class="nav-item ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link active text-center d-flex flex-column align-items-center p-0  border-top border-primary border-2 "
                  : "nav-link text-center d-flex flex-column align-items-center p-0"
              }
              to="/Offers"
            >
              <i class="bi bi-patch-check fs-3"></i>
              <h2 class="nav-link p-0">العروض</h2>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link active text-center d-flex flex-column align-items-center border-top border-primary border-2 p-0 "
                  : "nav-link text-center d-flex flex-column align-items-center p-0"
              }
              to="/Account"
            >
              <i class="bi bi-pie-chart fs-3"></i>
              <h6 class="nav-link p-0">بياناتي</h6>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function MobiletopNavbar() {
  const [userData, setUserData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/authenticate/userData",
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      );
      if (response.data.error) {
        setUserData(false);
      } else {
        setUserData(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  

  return (

  <>
    <div class=" bg-body  ">
      <nav class="container d-flex justify-content-between navbar navbar-expand-lg px-3 px-sm-3 px-md-3 px-lg-4 px-xl-5">
        {!userData && (
          <button
            type="button"
            onClick={() => setModalShow(true)}
            className="nav-link d-flex gap-2 align-items-center  "

          >
            <i class="bi bi-person-circle fs-5"></i>
            <p className="fs-6 m-0">دخول / تسجيل</p>
          </button>
        )}

        {userData && (
          <div>
            <i class="bi bi-bell fs-5"></i>
          </div>
        )}

        <NavLink class="" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/PR-Logo-Light.svg`}
            alt="PEEK RESULT"
            width="90"
          />
        </NavLink>
      </nav>
    </div>
    <Login
        show={modalShow}
        onHide={() => setModalShow(false)}
        fetchData={fetchData}
        fullscreen={true}
      />
  </>
  );
}

export { MobileBotNavbar, MobiletopNavbar };
