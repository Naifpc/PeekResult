import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (

      <div class="sticky-top bg-body bg-opacity-75 ">
        <nav class="container  navbar navbar-expand-lg   px-1 px-sm-2 px-md-3 px-lg-4 px-xl-5   ">
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
              <ul class="navbar-nav  justify-content-start px-0 ">
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <Link class="nav-link active" to="/"  >
                    الرئيسية
                  </Link>
                </li>
                <li class="nav-item " data-bs-dismiss="offcanvas">
                  <Link class="nav-link active" to="/Schedules" >
                    جداول
                  </Link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <Link class="nav-link active" to="/Offers">
                    العروض
                  </Link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <Link class="nav-link active " to="/Account">
                    الحساب
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <a class="navbar-brand" href="/" >
            <img
              src={`${process.env.PUBLIC_URL}/PR-Logo-Light.png`}
              alt="PEEK RESULT"
              width="90"
            />{" "}
          </a>
        </nav>
      </div>


  );
}

export default navbar;
