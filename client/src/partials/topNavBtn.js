import React from "react";
import { Dropdown } from "react-bootstrap";

function TopNavBtn({ onClick, mainTxt, subTxt }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="top-navbar nav-link d-flex align-items-center rounded-pill"
    >
      <i className="bi bi-person fs-2 pe-1"></i>
      <div className="top-navbar-text px-2">
        <p className=" text-secondary text-end m-0 fw-light">{subTxt}</p>
        <p className=" m-0 fw-bold">{mainTxt}</p>
      </div>
    </button>
  );
}

function TopNavDrop({ mainTxt, subTxt, item }) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant=""
        id="dropdown-basic"
        className="top-navbar nav-link d-flex align-items-center rounded-pill"
      >
        <i className="bi bi-person fs-2 pe-1"></i>
        <div className="top-navbar-text px-2">
        <p className=" text-secondary text-end m-0 fw-light ">{subTxt}</p>
        <p className=" m-0 fw-bold ">{mainTxt}</p>
      </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className="text-danger">
          {item}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export { TopNavBtn, TopNavDrop };
