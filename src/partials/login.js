import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import Alerts from "./alerts";
import Modal from "react-bootstrap/Modal";
import Register from "./register";
import { isMobile } from "react-device-detect";

function Login(props) {
  const [modalShow, setModalShow] = useState(false);
  let navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8).max(24),
  });

  const [alertMessage, setAlertMessage] = useState(false);

  const onSubmit = (data) => {
    axios
      .post("http://localhost:9000/authenticate/login", data)
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

  const trainerSubmit = (data) => {
    axios
      .post("http://localhost:9000/trainers/login", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.error) {
          setAlertMessage(true);
        } else {
          sessionStorage.setItem("accessToken", response.data);
          props.onHide();
          navigate("/trainers");
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
                متدرب
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
                مدرب
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
                initialValues={{ username: "", email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
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
            <div
              class="tab-pane fade"
              id="trainer-login"
              role="tabpanel"
              aria-labelledby="trainer-login"
            >
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={trainerSubmit}
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
          </div>
        </Modal.Body>
        <Modal.Footer>
          <p className="fs-6 w-100 text-center">
            ليس لديك حساب؟
            <button
              type="button"
              className="btn btn-link link-offset-2  link-offset-3-hover
                                link-underline link-underline-opacity-0 
                                link-underline-opacity-75-hover pt-0"
              onClick={() => setModalShow(true)}
            >
              تسجيل حساب
            </button>
          </p>
        </Modal.Footer>
      </Modal>
      <Register show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Login;
