import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Filter() {
  const [listOfFields, setListOfFields] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/fields").then((response) => {
      setListOfFields(response.data);
    });
  }, []);

  return (
    <div class="d-flex  gap-2">
      <p class="align-content-center pb-2 fs-6 border-start ps-2">المجالات</p>

      <div class="d-flex overflow-x-auto nowrap  gap-2  pb-4 px-2">
        <input
          type="checkbox"
          class="btn-check"
          id="الكل"
          name="الكل"
          checked={true}
        />
        <label class="btn btn-outline-secondary  filter" for="الكل">
          <div>الكل</div>
        </label>
        {listOfFields.map((value, key) => {
          return (
            <>
              <input
                type="checkbox"
                class="btn-check"
                id={value.id}
                name={value.fieldName}
                value={value.id}
              />
              <label class="btn btn-outline-secondary  filter" for={value.id}>
                <div>{value.fieldName}</div>
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
