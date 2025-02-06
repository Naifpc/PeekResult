import React from "react";
import { Link } from "react-router-dom";

function login() {
  return (
    <div
      class="modal  fade"
      id="loginModal"
      tabindex="-1"
      aria-labelledby="login"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0  p-5">
          <form>
            <div class="modal-headerborder-0">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h4 className="fw-bold">تسجيل الدخول</h4>
              <h6 className="text-secondary">
                عند تسجيل دخولك فانت فانت توافق على
                <Link
                  className="link-offset-2  link-offset-3-hover
                                link-underline link-underline-opacity-0 
                                link-underline-opacity-75-hover"
                >
                  {" "}
                  سياسة الاستخدام{" "}
                </Link>
                و اطلعت على
                <Link
                  className="link-offset-2  link-offset-3-hover
                                link-underline link-underline-opacity-0 
                                link-underline-opacity-75-hover"
                >
                  {" "}
                  سياسة الخصوصية{" "}
                </Link>
              </h6>
              <div className="my-4">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    الايميل
                  </label>
                  <input
                    type="email"
                    class="form-control bg-body-secondary border-0 shadow"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="example@email.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    كلمة السر
                  </label>
                  <input
                    type="password"
                    class="form-control  bg-body-secondary border-0 shadow"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mt-4 px-5 d-flex justify-content-center">
                  <button type="button" class="btn btn-secondary w-75   ">
                    تسجيل الدخول
                  </button>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-center  ">
              <p className="fs-6 ">
                ليس لديك حساب؟
                <button
                  type="button"
                  className="btn btn-link link-offset-2  link-offset-3-hover
                                link-underline link-underline-opacity-0 
                                link-underline-opacity-75-hover pt-0"
                  data-bs-toggle="modal"
                  data-bs-target="#registerModal"
                >
                  تسجيل حساب
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function register() {
  return (



<div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">

      <div class="modal-header border-0">
        <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="container p-2 p-sm-2 p-md-3 p-lg-4 p-xl-5 ">
        
        <div className="text-center">

        <img
        className=" mb-3"
          src={`${process.env.PUBLIC_URL}/PR-Logo-Light.svg`}
          alt="PEEK RESULT"
          width="150"
        />
        <h3
        className=" mb-3"
         >انشاء حساب</h3>

        </div>
        
        <ul class="nav nav-tabs " id="myTab" role="tablist">
          <li class=" nav-item " role="presentation">
            <button
              class="nav-link text-body active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              متدرب
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link text-body"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              مدرب
            </button>
          </li>
        </ul>

        <div
          class="tab-content p-5 rounded bg-body-secondary shadow"
          id="myTabContent"
        >
          <div class="col-12">
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <form class="row g-3 needs-validation" novalidate>
            <div class="col-12">
                <label for="validationCustomUsername" class="form-label">
                  نوع الحساب
                </label>
                <div class="input-group has-validation flex-row-reverse">
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    value="متدرب"
                    disabled
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>
              <div class="col-12">
                <label for="validationCustomUsername" class="form-label">
                  الاسم
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

              <div class="col-12">
                <label for="validationCustomUsername" class="form-label">
                  الايميل
                </label>
                <div class="input-group has-validation flex-row-reverse ">
                  <input
                    type="text"
                    class="form-control "
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    placeholder="example@email.com"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>

              <div class="col-12">
                <label for="validationCustomUsername" class="form-label">
                  كلمة السر
                </label>
                <div class="input-group has-validation flex-row-reverse ">
                  <input
                    type="password"
                    class="form-control "
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    placeholder="********"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>

              <div class="col-12">
                <label for="validationCustomUsername" class="form-label">
                  اعادة كلمة السر
                </label>
                <div class="input-group has-validation flex-row-reverse ">
                  <input
                    type="password"
                    class="form-control "
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    placeholder="********"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>

              <div class="col-12"></div>
              <div class="col-12">
                <button class="btn btn-secondary w-100" type="submit">
                  التالي
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

            <div class="col-12">
                <label for="validationCustomUsername" class="form-label">
                  نوع الحساب
                </label>
                <div class="input-group has-validation flex-row-reverse">
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    value="مدرب"
                    disabled
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>
              <div class="col-12">
                <label for="validationCustomUsername" class="form-label">
                  الاسم
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

              <div class="col-12">
                <label for="validationCustomUsername" class="form-label">
                  الايميل
                </label>
                <div class="input-group has-validation flex-row-reverse ">
                  <input
                    type="text"
                    class="form-control "
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    placeholder="example@email.com"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>

              <div class="col-12">
                <label for="validationCustomUsername" class="form-label">
                  كلمة السر
                </label>
                <div class="input-group has-validation flex-row-reverse ">
                  <input
                    type="password"
                    class="form-control "
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    placeholder="********"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>

              <div class="col-12">
                <label for="validationCustomUsername" class="form-label">
                  اعادة كلمة السر
                </label>
                <div class="input-group has-validation flex-row-reverse ">
                  <input
                    type="password"
                    class="form-control "
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    placeholder="********"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>

              <div class="col-12"></div>
              <div class="col-12">
                <button class="btn btn-secondary w-100" type="submit">
                التالي
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      <div class="modal-footer border-0">

      </div>
    </div>
  </div>
</div>

  );
}

export { login, register };
