import React from "react";
import { Trainer } from "../partials/cards";
import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "../partials/filter"

function Home() {
  const [listOfTrainers, setListOfTrainers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/trainer").then((response) => {
      setListOfTrainers(response.data);
    });
  }, []);
  return (
    <div class="container p-2 p-sm-2 p-md-3 p-lg-4 p-xl-5  ">
      <h4 className="mb-4">المدربين</h4>

      <div class="input-group ">
        <span
          class="input-group-text rounded-0 rounded-end bg-body-secondary border-0 "
          id="search-addon"
        >
          <i class="bi bi-search "></i>
        </span>
        <input
          type="search"
          class="form-control bg-body-secondary border-0  rounded-0 rounded-start"
          placeholder="اسم المدرب"
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>

      <div class="m-4"></div>

      <Filter/>
      <div class="m-4"></div>

      <div className="container">
        <div className="row">
          {listOfTrainers.map((value, key) => {
            return (
              <Trainer 
                experience={value.experience}
                name={value.username}
                field={value.field}
                image={value.imagePath}
                id={value.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
