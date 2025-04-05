import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Login from "./login";
import AccountModal from "./accountModal";
import UserIcon from "./userIcon";

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

function MobiletopNavbar({ userData, fetchData, setUserData }) {
  const [showAccountModal, setAccountModal] = useState(false);

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    setAccountModal(false);
    setUserData(false);
  };
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div class=" bg-body  ">
        <nav class="container d-flex justify-content-between navbar navbar-expand-lg px-3 px-sm-3 px-md-3 px-lg-4 px-xl-5">
          {!userData ? (
            <>
              <button className="btn p-0" onClick={() => setModalShow(true)}>
                <i class="bi bi-person-circle fs-3"></i>
              </button>
              {/* Login Modal */}
              <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
                fetchData={fetchData}
              />
            </>
          ) : (
            <>
              <button className="btn p-0" onClick={() => setAccountModal(true)}>
                <UserIcon username={userData.username} size={10} />
              </button>
              {/* account Modal */}
              <AccountModal
                show={showAccountModal}
                onHide={() => setAccountModal(false)}
                fetchData={fetchData}
                logout={logout}
                userData={userData}
              />
            </>
          )}

          <NavLink class="" to="/">
            <img
              src={`${process.env.PUBLIC_URL}/PR-Logo-Light.svg`}
              alt="PEEK RESULT"
              width="90"
            />
          </NavLink>
          <i class="bi bi-three-dots-vertical fs-2"></i>
        </nav>
      </div>
    </>
  );
}

export { MobileBotNavbar, MobiletopNavbar };
