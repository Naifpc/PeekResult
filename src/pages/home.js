import React from "react";
import { trainer as Trainer } from "../partials/cards";


function home() {
  return (
    <div class="container p-2 p-sm-2 p-md-3 p-lg-4 p-xl-5 ">
   
      <div class="input-group shadow">
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

      <div class="d-flex  gap-2">
        <p class="align-content-center pb-2 fs-6 border-start ps-2">المجالات</p>

        <div class="d-flex overflow-x-auto nowrap  gap-2  pb-4">
          <input
            type="radio"
            class="btn-check"
            id="btn-check"
            name="filters"
            autocomplete="off"
          />
          <label
            class="btn btn-outline-secondary  rounded-pill filter"
            for="btn-check"
          >
            الكل
          </label>

          <input
            type="radio"
            class="btn-check"
            id="btn-check2"
            name="filters"
            autocomplete="off"
          />
          <label
            class="btn btn-outline-secondary  rounded-pill filter"
            for="btn-check2"
          >
            كمال اجسام
          </label>

          <input
            type="radio"
            class="btn-check"
            id="btn-check3"
            name="filters"
            autocomplete="off"
          />
          <label
            class="btn btn-outline-secondary  rounded-pill filter"
            for="btn-check3"
          >
            كروس فيت
          </label>

          <input
            type="radio"
            class="btn-check"
            id="btn-check4"
            name="filters"
            autocomplete="off"
          />
          <label
            class="btn btn-outline-secondary  rounded-pill filter"
            for="btn-check4"
          >
            باور ليفتنق
          </label>

          <input
            type="radio"
            class="btn-check"
            id="btn-check5"
            name="filters"
            autocomplete="off"
          />
          <label
            class="btn btn-outline-secondary  rounded-pill filter"
            for="btn-check5"
          >
            تغذية
          </label>

          <input
            type="radio"
            class="btn-check"
            id="btn-check6"
            name="filters"
            autocomplete="off"
          />
          <label
            class="btn btn-outline-secondary  rounded-pill filter"
            for="btn-check6"
          >
            رفع اثقال
          </label>

          <input
            type="radio"
            class="btn-check"
            id="btn-check7"
            name="filters"
            autocomplete="off"
          />
          <label
            class="btn btn-outline-secondary  rounded-pill filter"
            for="btn-check7"
          >
            الجري
          </label>

          <input
            type="radio"
            class="btn-check"
            id="btn-check8"
            name="filters"
            autocomplete="off"
          />
          <label
            class="btn btn-outline-secondary  rounded-pill filter"
            for="btn-check8"
          >
            كالسثنكس
          </label>
        </div>
      </div>

      <div class="m-4"></div>

      <div className="container">
      <div className="row">
        <Trainer />
        <Trainer />
        <Trainer />
        <Trainer />
        <Trainer />
      </div>
      </div>
    </div>
  );
}

export default home;
