import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./login";

function MobileBotNavbar() {

  const active = "nav-link active text-center d-flex flex-column align-items-center p-0  text-primary ";
  const unactive ="nav-link text-center d-flex flex-column align-items-center p-0 "
  return (
    <nav class="navbar py-0 px-2 px-sm-2 px-md-3 px-lg-4 px-xl-5 fixed-bottom bg-body   ">
      <div class="container-fluid p-0">
        <ul class="navbar-nav d-flex flex-row justify-content-evenly p-0 w-100">
          <li class="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? active
                  : unactive
              }
              to="/"
            >
              <i class="bi bi-person-badge fs-3"></i>
              <h6 class="p-0 fw-light">المدربين</h6>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
              ? active
              : unactive
              }
              to="/Schedules"
            >
              <i class="bi bi-calendar3 fs-3"></i>
              <h6 class="p-0 fw-light">الجداول</h6>
            </NavLink>
          </li>
          <li class="nav-item ">
            <NavLink
              className={({ isActive }) =>
                isActive
              ? active
              : unactive
              }
              to="/Offers"
            >
              <i class="bi bi-percent fs-3"></i>
              <h6 class="p-0 fw-light">العروض</h6>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
              ? active
              : unactive
              }
              to="/Account"
            >
              <i class="bi bi-pie-chart fs-3"></i>
              <h6 class="p-0 fw-light">بياناتي</h6>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function MobiletopNavbar({userData,fetchData}) {
  const [modalShow, setModalShow] = useState(false);
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
            <i class="bi bi-chat fs-4"></i>
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
      />
  </>
  );
}

export { MobileBotNavbar, MobiletopNavbar };
