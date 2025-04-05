import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Login from "./login";
import AccountModal from "./accountModal";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import UserIcon from "./userIcon";

function BrowserNavbar({ fetchData, userData, links, setUserData }) {
  const [modalShow, setModalShow] = useState(false);
  const [showAccountModal, setAccountModal] = useState(false);

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    setAccountModal(false);
    setUserData(false);
  };

  return (
    <>
      <div className="sticky-top bg-body bg-opacity-75">
        <div className="container d-flex justify-content-between align-items-center  px-2 px-sm-2 px-md-3 px-lg-4 px-xl-5">
          {/* User  & Chat Icon */}
          <div className="d-flex align-items-center  justify-content-end">
            {!userData ? (
              <>
                <button className="btn" onClick={() => setModalShow(true)}>
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
              <div className="d-flex align-items-center  justify-content-end">
                <button className="btn" onClick={() => setAccountModal(true)}>
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
              </div>
            )}
          </div>

          {/* logo */}
          <NavLink to="/" className="navbar-brand   text-center">
            <img
              src={`${process.env.PUBLIC_URL}/PR-Logo-Light.svg`}
              alt="PEEK RESULT"
              width="120"
            />
          </NavLink>
        </div>

        <Navbar expand="lg" className=" p-0 ">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="d-flex justify-content-center gap-4 w-100">
                {links.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.link}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link align-items-center border-bottom border-primary border-2 text-primary"
                        : "nav-link align-items-center"
                    }
                    end
                  >
                    <div className="d-flex align-items-center gap-1">
                      <i className={item.icon}></i>
                      {item.name}
                    </div>
                  </NavLink>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default BrowserNavbar;
