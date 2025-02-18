import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";


function Filter() {


  const [listOfFields, setListOfFields] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/fields").then((response) => {
      setListOfFields(response.data);
    });
  }, []);

  return (
    <div class="d-flex  gap-2  ">
      <p class="align-content-center pb-2 fs-6 border-start ps-2">المجالات</p>

      <ul class=" flex-nowrap nav d-flex overflow-x-auto  gap-2 pb-4 px-2 ">
      <li class="nav-item" >
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
            <li class="nav-item" >
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
