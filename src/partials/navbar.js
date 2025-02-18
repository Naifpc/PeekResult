import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";

function BrowserNavbar() {
  return (
    <div class="sticky-top bg-body-tertiary">
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
          <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  class="nav-link"

                >
                  <i class="bi bi-person-circle fs-3 nav-link"></i>
            </button>
            <ul class="navbar-nav mx-auto px-0 ">

              <li class="nav-item" data-bs-dismiss="offcanvas">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active text-center d-flex flex-column align-items-center"
                      : "nav-link text-center d-flex flex-column align-items-center"
                  }
                  to="/"
                >
                  الرئيسية
                </NavLink>
              </li>
              <li class="nav-item " data-bs-dismiss="offcanvas">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active text-center d-flex flex-column align-items-center"
                      : "nav-link text-center d-flex flex-column align-items-center"
                  }
                  to="/Schedules"
                >
                  جداول
                </NavLink>
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active text-center d-flex flex-column align-items-center"
                      : "nav-link text-center d-flex flex-column align-items-center"
                  }
                  to="/Offers"
                >
                  العروض
                </NavLink>
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active text-center d-flex flex-column align-items-center"
                      : "nav-link text-center d-flex flex-column align-items-center"
                  }
                  to="/Account"
                >
                  الحساب
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
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

function MobileBotNavbar() {
  return (
    <nav class="navbar py-0 px-2 px-sm-2 px-md-3 px-lg-4 px-xl-5 fixed-bottom bg-body  ">
      <div class="container-fluid p-0">
        <ul class="navbar-nav d-flex flex-row justify-content-evenly p-0 w-100">
          <li class="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link active text-center d-flex flex-column align-items-center p-0"
                  : "nav-link text-center d-flex flex-column align-items-center p-0"
              }
              to="/"
            >
              <i class="bi bi-person-badge fs-2"></i>
              <h2 class="nav-link p-0">المدربين</h2>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link active text-center d-flex flex-column align-items-center p-0"
                  : "nav-link text-center d-flex flex-column align-items-center p-0"
              }
              to="/Schedules"
            >
              <i class="bi bi-calendar3 fs-2"></i>
              <h2 class="nav-link p-0">الجداول</h2>
            </NavLink>
          </li>
          <li class="nav-item ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link active text-center d-flex flex-column align-items-center p-0  "
                  : "nav-link text-center d-flex flex-column align-items-center p-0"
              }
              to="/Offers"
            >
              <i class="bi bi-patch-check fs-2"></i>
              <h2 class="nav-link p-0">العروض</h2>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link active text-center d-flex flex-column align-items-center p-0"
                  : "nav-link text-center d-flex flex-column align-items-center p-0"
              }
              to="/Account"
            >
              <i class="bi bi-person fs-2"></i>
              <h2 class="nav-link p-0">الحساب</h2>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function MobiletopNavbar() {
  return (
    <div class=" bg-body-tertiary bg-opacity-75  ">
      <nav class="container d-flex justify-content-between navbar navbar-expand-lg px-2 px-sm-2 px-md-3 px-lg-4 px-xl-5">
        <div>
        <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  class="nav-link d-flex gap-2   align-items-center"
                  to="/"
                >
                  <i class="bi bi-person-circle fs-1 "></i> 
            </button>
        </div>
        <Link class="" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/PR-Logo-Light.svg`}
            alt="PEEK RESULT"
            width="90"
          />
        </Link>
      </nav>
    </div>
  );
}

export { BrowserNavbar, MobileBotNavbar, MobiletopNavbar };
