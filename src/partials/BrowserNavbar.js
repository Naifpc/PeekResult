import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import Login from "./login";
import { TopNavBtn, TopNavDrop } from "./topNavBtn";

function BrowserNavbar() {
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

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    setUserData(false);
  };

  return (
    <>
      <div class="sticky-top bg-body  container-fluid   ">
        <div className="container d-flex justify-content-between py-2 px-2 px-sm-2 px-md-3 px-lg-4 px-xl-5 ">
          {!userData ? (
            <TopNavBtn
              onClick={() => setModalShow(true)}
              mainTxt={"دخول / تسجيل"}
              subTxt={"يا هلا"}
            />
          ) : (
            <div className="d-flex gap-3 align-items-center">
              <i class="bi bi-chat fs-4"></i>
              <div className="border h-100"></div>
              <Dropdown>
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-basic"
                  className="p-0 d-flex align-items-center top-navbar rounded-pill"
                >
                  <TopNavBtn
                    mainTxt={"الحساب"}
                    subTxt={`يا هلا ${userData.username}!`}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu className="text-end">
                  <Dropdown.Item onClick={logout}>
                  <i class="bi bi-person-gear ms-1"></i>
                     تحديث الحساب 
                  </Dropdown.Item>
                  <Dropdown.Item onClick={logout}>
                  <i class="bi bi-person-vcard ms-1"></i>
                      اشتراكي 
                  </Dropdown.Item>

                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <Dropdown.Item onClick={logout} className="text-danger">
                  <i class="bi bi-box-arrow-right ms-1 "></i> 
                    تسجيل الخروج 
                  </Dropdown.Item>
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

      <nav class="navbar navbar-expand-lg navbar-light bg-body border-bottom py-0">
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
                      ? "nav-link align-items-center border-bottom border-primary border-2"
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
                      ? "nav-link align-items-center border-bottom border-primary border-2"
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
                      ? "nav-link align-items-center border-bottom border-primary border-2"
                      : "nav-link align-items-center"
                  }
                  to="/Offers"
                >
                  <div className="d-flex align-items-center gap-1 ">
                  <i class="bi bi-percent"></i>
                    العروض
                  </div>
                </NavLink>
              </li>
              <li class="nav-item" data-bs-dismiss="collapse">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link align-items-center border-bottom border-primary border-2"
                      : "nav-link align-items-center"
                  }
                  to="/Account"
                >
                  <div className="d-flex align-items-center gap-1 ">
                  <i class="bi bi-pie-chart"></i>
                    بياناتي
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Login
        show={modalShow}
        onHide={() => setModalShow(false)}
        fetchData={fetchData}
      />
    </>
  );
}

export default BrowserNavbar;
