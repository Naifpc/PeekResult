import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown } from "react-bootstrap";

function BrowserNavbar() {
  const [userData, setUserData] = useState([]);

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

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    setUserData(false);
  };

  return (
    <>
      <div class="sticky-top bg-body border-bottom container-fluid   ">
        <div className="container d-flex justify-content-between py-2 px-2 px-sm-2 px-md-3 px-lg-4 px-xl-5 ">
        {!userData ? (
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
            class="nav-link d-flex gap-2 align-items-center  "
            to="/"
          >
            <i class="bi bi-person-circle fs-5"></i>
            <p className="fs-6 m-0">دخول / تسجيل</p>
          </button>
        ) : (
          <div className="d-flex gap-3 align-items-center">
            <i className="bi bi-bell fs-5"></i>
            <div className="border h-100"></div>
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic" className="p-0">
                يا هلا , {userData.username}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={logout} className="text-danger">تسجيل الخروج  <i class="bi bi-box-arrow-right "></i></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}

        <NavLink class="" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/PR-Logo-Light.svg`}
            alt="PEEK RESULT"
            width="110"
          />
        </NavLink>
        </div>
      </div>


      <nav class="navbar navbar-expand-lg navbar-light bg-body border-bottom">
        <div class="container-fluid">
          <button
            data-mdb-collapse-init
            class="navbar-toggler"
            type="button"
            data-mdb-target="#navbarCenteredExample"
            aria-controls="navbarCenteredExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarCenteredExample"
          >
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item" data-bs-dismiss="collapse">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link align-items-center rounded-pill bg-body-secondary"
                      : "nav-link align-items-center"
                  }
                  to="/"
                >
                  <div className="d-flex align-items-center gap-1 ">
                    <i class="bi bi-person-badge "></i>
                    المدربين
                  </div>
                </NavLink>
              </li>
              <li class="nav-item " data-bs-dismiss="collapse">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link align-items-center rounded-pill bg-body-secondary"
                      : "nav-link align-items-center"
                  }
                  to="/Schedules"
                >
                  <div className="d-flex align-items-center gap-1 ">
                    <i class="bi bi-calendar3"></i>
                    جداول
                  </div>
                </NavLink>
              </li>
              <li class="nav-item" data-bs-dismiss="collapse">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link align-items-center rounded-pill bg-body-secondary"
                      : "nav-link align-items-center"
                  }
                  to="/Offers"
                >
                  <div className="d-flex align-items-center gap-1 ">
                    <i class="bi bi-patch-check"></i>
                    العروض
                  </div>
                </NavLink>
              </li>
              <li class="nav-item" data-bs-dismiss="collapse">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link align-items-center rounded-pill bg-body-secondary"
                      : "nav-link align-items-center"
                  }
                  to="/Account"
                >
                  <div className="d-flex align-items-center gap-1 ">
                    <i class="bi bi-person"></i>
                    الحساب
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default BrowserNavbar;
