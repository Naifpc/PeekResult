import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import Alerts from "./alerts";
import Modal from "react-bootstrap/Modal";
import { isMobile } from "react-device-detect";

function Login(props) {
  let navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required().min(4).max(25),
    role: Yup.string().required().oneOf(["trainee", "trainer"]),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8).max(24),
  });

  const validationSchemaLogin = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8).max(24),
  });

  const [alertMessage, setAlertMessage] = useState(false);

  const onSubmitLogin = (data) => {
    axios
      .post("http://localhost:9000/authenticate/login", data)
      .then((response) => {
        if (response.data.error) {
          setAlertMessage(true);
        } else {
          sessionStorage.setItem("accessToken", response.data);
          if (sessionStorage.role === "trainer") {
            navigate("/trainers");
          }
          props.onHide();
          props.fetchData();
        }
      });
  };

  const onSubmitRegister = (data) => {
    axios
      .post("http://localhost:9000/authenticate/register", data)
      .then((response) => {
        if (response.data.error) {
          setAlertMessage(true);
        } else {
          sessionStorage.setItem("accessToken", response.data);
          props.onHide();
          props.fetchData();
        }
      });
  };

  return (
    <>
      <Modal
        {...props}
        fullscreen={isMobile ? true : false}
        className=""
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="border-0 ">
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>

        <Modal.Body className="border-0 p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5  ">
          <h4 className="fw-bold text-center mb-4 ">تسجيل الدخول</h4>

          <ul class="nav nav-tabs " id="loginTab" role="tablist">
            <li class=" nav-item " role="presentation">
              <button
                class="nav-link text-body active"
                data-bs-toggle="tab"
                data-bs-target="#trainee-login"
                type="button"
                role="tab"
                aria-controls="trainee-login"
                aria-selected="true"
              >
                تسجيل دخول
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link text-body"
                data-bs-toggle="tab"
                data-bs-target="#trainer-login"
                type="button"
                role="tab"
                aria-controls="trainer-login"
                aria-selected="false"
              >
                تسجيل حساب
              </button>
            </li>
          </ul>

          <div
            class="tab-content p-5 rounded bg-body-secondary "
            id="myTabContent"
          >
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
            <div
              class="tab-pane fade show active"
              id="trainee-login"
              role="tabpanel"
              aria-labelledby="trainee-login"
            >
              <Alerts
                variant={"danger"}
                key={"danger"}
                showAlert={alertMessage}
                onClose={() => setAlertMessage(false)}
                icon={<i class="bi bi-exclamation-triangle-fill"></i>}
                msg={`كلمة السر او الايميل خاطئ`}
              />
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchemaLogin}
                onSubmit={onSubmitLogin}
              >
                <Form>
                  <div className="row g-3">
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
                        className="btn w-75 btn-primary mx-auto text-white rounded-pill"
                        type="submit"
                      >
                        <div>تسجيل دخول</div>
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
            <div
              class="tab-pane fade"
              id="trainer-login"
              role="tabpanel"
              aria-labelledby="trainer-login"
            >
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  role: "",
                  username: "",
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmitRegister}
              >
                <Form>
                  <div className="row g-3">
                    <div className="col-12 form-floating">
                      <Field
                        as="select"
                        className="form-select   bg-body-secondary"
                        name="role"
                      >
                        <option value="">نوع الحساب</option>
                        <option value="trainer">مدرب </option>
                        <option value="trainee">متدرب </option>
                      </Field>

                      <ErrorMessage
                        name="role"
                        component="span"
                        className="text-danger"
                      />
                    </div>
                    <div className="form-floating  col-12">
                      <Field
                        type="text"
                        className="form-control bg-transparent"
                        name="username"
                        placeholder="الاسم"
                      />
                      <label htmlFor="floatingEmail">الاسم</label>
                      <ErrorMessage
                        name="username"
                        component="span"
                        className="text-danger"
                      />
                    </div>
                    <div className="form-floating  col-12">
                      <Field
                        type="email"
                        className="form-control bg-transparent"
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

                    <div className="form-floating col-12">
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
                        className="btn w-75 btn-primary mx-auto text-white rounded-pill"
                        type="submit"
                      >
                        <div>تسجيل جديد</div>
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
