import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Login from "./login";

function MobileBotNavbar({ links }) {
  const active =
    "nav-link active text-center d-flex flex-column align-items-center p-0  text-primary ";
  const unactive =
    "nav-link text-center d-flex flex-column align-items-center p-0 ";
  return (
    <nav class="navbar py-0  fixed-bottom bg-body   ">
      <div class="container-fluid py-0">
        <ul class="navbar-nav d-flex flex-row justify-content-between px-3 px-sm-3 px-md-3 px-lg-4 px-xl-5 w-100">
          {links.map((item, index) => (
            <li key={index} class="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? active : unactive)}
                to={item.link}
              >
                <i className={`fs-3 ${item.icon}`}></i>
                <p class="fs-7">{item.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function MobiletopNavbar({ userData, fetchData }) {
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
