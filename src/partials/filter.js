import React from "react";

import { NavLink } from "react-router-dom";

function Filter({ listOfFields }) {
  return (
    <div class="d-flex gap-2 align-items-center  ">
      <p class="fs-6 m-0"> المجالات</p>
      <hr className="border h-75"></hr>

      <ul class=" flex-nowrap  nav d-flex align-items-center overflow-x-auto  gap-2  px-2 ">
        <li class="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link text-white bg-primary rounded-pill"
                : "nav-link text-body bg-body-secondary rounded-pill filter-badge"
            }
            to="/"
          >
            الكل
          </NavLink>
        </li>
        {listOfFields.map((value, key) => (
          <React.Fragment key={key}>
            <li class="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-white bg-primary rounded-pill"
                    : "nav-link text-body bg-body-secondary rounded-pill filter-badge"
                }
                to={`/${value.id}`}
              >
                {value.fieldName}
              </NavLink>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
