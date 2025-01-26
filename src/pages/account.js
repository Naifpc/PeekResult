import React from "react";
import { Link } from "react-router-dom";

function account() {
  return (
    <div class="container p-2 p-sm-2 p-md-3 p-lg-4 p-xl-5 ">
      <h4 className="mb-4">القياسات</h4>
      <div className="container my-4">
        <div className="row  gap-3 ">
          <div className="col-12  p-3 bg-body-secondary rounded shadow">
          <h6> نسبة الدهون</h6>

            
            <h2>14<sub className="fs-6">/100</sub></h2>

            <div
              class="progress bg-body"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar" style={{ width: "14%" }}></div>
            </div>
          </div>
          <div className="col bg-body-secondary text-center p-1 rounded shadow ">
            <h6>الطول</h6>
            <h2>160</h2>
            <span class="badge rounded-pill text-bg-secondary">سم</span>

          </div>
          <div className="col bg-body-secondary text-center p-1  rounded shadow ">
            <h6>الوزن</h6>
            <h2>77</h2>
            <span class="badge rounded-pill text-bg-secondary">كجم</span>

          </div>
        </div>
      </div>
      
      

      <div class="">
        <h4 className="my-4">تحديث القياسات</h4>

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
      
      <h4 className="my-4">الحساب</h4>
      <div className="container my-4">
      <div className="row gap-3">
        <div className="col bg-body-secondary rounded text-center shadow">
          <Link className="nav-link" to="/accountData">
            <div className=" p-4  ">
              <h1 className="">
                <i class="bi bi-person-fill "></i>
              </h1>
              <h6 className="">الملف الشخصي</h6>
            </div>
          </Link>
        </div>

        <div className="col bg-body-secondary rounded text-center shadow">
        <Link className="nav-link" to="/mySubscription">
            <div className="p-4  ">
              <h1 className="">
                <i class="bi bi-person-vcard-fill"></i>
              </h1>
              <h6>الاشتراكات </h6>
            </div>
          </Link>
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
