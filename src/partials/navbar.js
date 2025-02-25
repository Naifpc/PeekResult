import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";




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
        if(response.data.error){
          setUserData(false);
        }else{
          setUserData(response.data);
        }
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

  return (
    <div class="sticky-top bg-body border-bottom">
      <nav class="container  navbar navbar-expand-lg   px-2 px-sm-2 px-md-3 px-lg-4 px-xl-5   ">
        <button
          class="navbar-toggler border-0 fs-1 p-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list  "></i>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header justify-content-between">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              القائمة
            </h5>
            <button
              type=""
              class="navbar-toggler border-0"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
          <div class="offcanvas-body ">
          {!userData && (
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
          )}

        {userData && (
            <div className="d-flex gap-3 align-items-center">
              <div className="border-start ps-3">
              <p className="fs-6 m-0 text-secondary">يا هلا</p>
              <p className="fs-6 m-0">{userData.username}</p>
              </div>
              <i class="bi bi-bell fs-5"></i>
            </div>
           

          )}
            <ul class="navbar-nav mx-auto px-0 gap-3">
              <li class="nav-item" data-bs-dismiss="offcanvas">
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
              <li class="nav-item " data-bs-dismiss="offcanvas">
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
              <li class="nav-item" data-bs-dismiss="offcanvas">
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
              <li class="nav-item" data-bs-dismiss="offcanvas">
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
        <NavLink class="" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/PR-Logo-Light.svg`}
            alt="PEEK RESULT"
            width="110"
          />
        </NavLink>
      </nav>
    </div>
  );
}

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
              <i class="bi bi-person fs-3"></i>
              <h6 class="nav-link p-0">الحساب</h6>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function MobiletopNavbar() {
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
        if(response.data.error){
          setUserData(false);
        }else{
          setUserData(response.data);
        }
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

  return (
    <div class=" bg-body  ">
      <nav class="container d-flex justify-content-between navbar navbar-expand-lg px-3 px-sm-3 px-md-3 px-lg-4 px-xl-5">
   
          {!userData && (
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
          )}

          {userData && (
            <div
            
          >
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
  );
}

export { BrowserNavbar, MobileBotNavbar, MobiletopNavbar };
