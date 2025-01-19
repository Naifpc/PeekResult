import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div class="bg-body bg-opacity-75 sticky-top ">
      <nav class="container navbar navbar-expand-lg  ">
        <div class="container-fluid ps-5 ">
          <button
            class="navbar-toggler"
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
            class="offcanvas offcanvas-start"
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
                class="navbar-toggler"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
            <div class="offcanvas-body justify-content-start">
              <ul class="navbar-nav  ">
                <li class="nav-item">
                  <Link class="nav-link active" to="/">
                    الرئيسية
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/Schedules">
                    جداول
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/Offers">
                    العروض
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active " to="/Account">
                    الحساب
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <a class="navbar-brand" href="/">
            <img
              src={`${process.env.PUBLIC_URL}/PR-Logo-Light.png`}
              alt="PEEK RESULT"
              width="115"
            />{" "}
          </a>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
