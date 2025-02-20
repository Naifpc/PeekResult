import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";


function Login() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8).max(24),
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:9000/authenticate/login", data)
      .then((response) => {
        if(response.data.error){
          alert(response.data.error);
        } else {
                  sessionStorage.setItem("accessToken", response.data);

        }
      });
  };

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
              <Formik
                initialValues={{ username: "", email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <div className="row g-3 mt-3">

                    <div className="form-floating mb-3 col-12">
                      <Field
                        type="email"
                        className="form-control bg-transparent"
                        id="floatingEmail"
                        name="email"
                        placeholder="الايميل"
                      />
                      <label htmlFor="floatingEmail">الايميل</label>
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="text-danger"
                      />
                    </div>

                    <div className="form-floating mb-3 col-12">
                      <Field
                        type="password"
                        className="form-control bg-transparent"
                        id="floatingPassword"
                        name="password"
                        placeholder="كلمة السر"
                      />
                      <label htmlFor="floatingPassword">كلمة السر</label>
                      <ErrorMessage
                        name="password"
                        component="span"
                        className="text-danger"
                      />
                    </div>

                    <div className="col-12 d-flex justify-content-center">
                      <button
                        className="btn w-75 btn-primary mx-auto"
                        type="submit"
                      >
                        <div>تسجيل دخول</div>
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
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
        </div>
      </div>
    </div>
  );
}

export default Login;
