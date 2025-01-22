import React from "react";
import { CalendarDaysExample } from "../partials/calender.js";

function account() {
  return (
    <div class="container p-1 p-sm-2 p-md-3 p-lg-4 p-xl-5 ">

       
      <div className="row">
        <div className="col-6">

        <div className="p-4 bg-body-secondary rounded text-center shadow ">
          <h1 className="text-primary">
            <i class="bi bi-person-fill "></i>
          </h1>
          <h5 className="text-nowrap">الملف الشخصي</h5>
        </div>

        </div>

        <div className="col-6">
        <div className="p-4 bg-body-secondary rounded text-center shadow ">
          <h1 className="text-primary">
            <i class="bi bi-person-vcard-fill"></i>
          </h1>
          <h5>الاشتراكات </h5>
        </div>
        </div>
      </div>

      <div class="">
        <h4 className="my-4">
           القياسات 
        </h4>

        <ul class="nav nav-tabs " id="myTab" role="tablist">
          <li class=" nav-item " role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Home
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Contact
            </button>
          </li>
        </ul>

        <div class="tab-content p-5 rounded bg-body-secondary shadow" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <form class="row g-3 needs-validation" novalidate>
              <div class="col-md-4">
                <label for="validationCustom01" class="form-label">
                  First name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  value="Mark"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustom02" class="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom02"
                  value="Otto"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustomUsername" class="form-label">
                  Username
                </label>
                <div class="input-group has-validation">
                  <span class="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustom03" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  required
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div class="col-md-3">
                <label for="validationCustom04" class="form-label">
                  State
                </label>
                <select class="form-select" id="validationCustom04" required>
                  <option selected disabled value="">
                    Choose...
                  </option>
                  <option>...</option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <div class="col-md-3">
                <label for="validationCustom05" class="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
                <div class="invalid-feedback">Please provide a valid zip.</div>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label class="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div class="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p>This is the Profile tab content.</p>
          </div>
          <div
            class="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <p>Contact tab content goes here.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <button class="btn btn-outline-danger w-100" > <i class="bi bi-box-arrow-right"></i> تسجل خروج</button>
      </div>
      
    </div>
  );
}

export default account;
