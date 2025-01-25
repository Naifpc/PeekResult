import React from "react";
import { CalendarDaysExample } from "../partials/calender.js";

function account() {
  return (
    <div class="container p-2 p-sm-2 p-md-3 p-lg-4 p-xl-5 ">
      <h4 className="mb-4">الحساب</h4>
      <div className="row">
        <div className="col-6 ">
          <a>
            <div className=" p-4 bg-body-secondary rounded text-center shadow ">
              <h1 className="">
                <i class="bi bi-person-fill "></i>
              </h1>
              <h5 className="text-nowrap">الملف الشخصي</h5>
            </div>
          </a>
        </div>

        <div className="col-6">
          <a>
            <div className="p-4 bg-body-secondary rounded text-center shadow ">
              <h1 className="">
                <i class="bi bi-person-vcard-fill"></i>
              </h1>
              <h5>الاشتراكات </h5>
            </div>
          </a>
        </div>
      </div>

      <div class="">
        <h4 className="my-4">القياسات</h4>

        <div className="container d-flex gap-1 justify-content-evenly rounded-pill my-4 text-white">
          <div className="w-100 text-center p-1 status-bar rounded-end-pill ">
            <h6>الوزن</h6>

            <h2 className="fw-bold ">76</h2>

            <h6 className="bg-white px-2 pb-1 text-primary rounded-pill mx-5  ">
              كجم
            </h6>
          </div>
          <div className="w-100 p-1 text-center p-1 status-bar  ">
            <h6>الطول</h6>

            <h2 className="fw-bold ">177</h2>

            <h6 className="bg-white px-2 pb-1 text-primary rounded-pill mx-5  ">
              سم
            </h6>
          </div>
          <div className="w-100 text-center p-1 status-bar rounded-start-pill">
            <h6> الدهون</h6>

            <h2 className="fw-bold ">16</h2>

            <h6 className="bg-white px-2 pb-1 text-primary rounded-pill mx-5  ">
              %
            </h6>
          </div>
        </div>

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
              الوزن
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
              القياسات
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
              inbody
            </button>
          </li>
        </ul>

        <div
          class="tab-content p-5 rounded bg-body-secondary shadow"
          id="myTabContent"
        >

<div class="col-12">
                <label for="validationCustom04" class="form-label">
                  وحدات القياس
                </label>
                <select class="form-select" id="validationCustom04" required>
                  <option selected value="">
                    كجم/سم
                  </option>
                  <option>باوند/انش</option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <form class="row g-3 needs-validation" novalidate>
  

              <div class="col-md-6">
                <label for="validationCustomUsername" class="form-label">
                  الوزن
                </label>
                <div class="input-group has-validation flex-row-reverse">
                  <span class="input-group-text " id="inputGroupPrepend">
                    كجم
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
                <label for="validationCustomUsername" class="form-label">
                  الطول
                </label>
                <div class="input-group has-validation flex-row-reverse ">
                  <span class="input-group-text   " id="inputGroupPrepend">
                    سم
                  </span>
                  <input
                    type="text"
                    class="form-control "
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>

              <div class="col-12"></div>
              <div class="col-12">
                <button class="btn btn-secondary" type="submit">
                  حفظ
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
            <form class="row g-3 needs-validation" novalidate>
              

              <div class="col-md-4">
                <label for="validationCustomUsername" class="form-label">
                  العمر
                </label>
                <div class="input-group has-validation flex-row-reverse">
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

              <div class="col-md-4">
                <label for="validationCustomUsername" class="form-label">
                  الرقبة
                </label>
                <div class="input-group has-validation flex-row-reverse ">
                  <span class="input-group-text   " id="inputGroupPrepend">
                    سم
                  </span>
                  <input
                    type="text"
                    class="form-control "
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>

              <div class="col-md-4">
                <label for="validationCustomUsername" class="form-label">
                  الخصر
                </label>
                <div class="input-group has-validation flex-row-reverse ">
                  <span class="input-group-text   " id="inputGroupPrepend">
                    سم
                  </span>
                  <input
                    type="text"
                    class="form-control "
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>

              <div class="col-12"></div>
              <div class="col-12">
                <button class="btn btn-secondary" type="submit">
                  حفظ
                </button>
              </div>
            </form>
          </div>
          <div
            class="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <form class="row g-3 needs-validation" novalidate>
              

              <div class="col-md-6">
                <label for="validationCustomUsername" class="form-label">
                  وزن العضلات
                </label>
                <div class="input-group has-validation flex-row-reverse ">
                  <span class="input-group-text   " id="inputGroupPrepend">
                    كجم
                  </span>
                  <input
                    type="text"
                    class="form-control "
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>

              <div class="col-md-6">
                <label for="validationCustomUsername" class="form-label">
                  وزن الدهون
                </label>
                <div class="input-group has-validation flex-row-reverse ">
                  <span class="input-group-text   " id="inputGroupPrepend">
                    كجم
                  </span>
                  <input
                    type="text"
                    class="form-control "
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>

              <div class="col-12"></div>
              <div class="col-12">
                <button class="btn btn-secondary" type="submit">
                  حفظ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <button class="btn btn-outline-danger w-100">
          {" "}
          <i class="bi bi-box-arrow-right"></i> تسجل خروج
        </button>
      </div>
    </div>
  );
}

export default account;
