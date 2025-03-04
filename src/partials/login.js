import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import DangerAlert from "./DangerAlertMsg";
import Modal from "react-bootstrap/Modal";
import Register from "./register";
import { isMobile } from "react-device-detect";

function Login(props) {
  const [modalShow, setModalShow] = useState(false);


  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8).max(24),
  });

  const [alerMessage, setAlerMessage] = useState(false);

  const onSubmit = (data) => {
    axios
      .post("http://localhost:9000/authenticate/login", data)
      .then((response) => {
        if (response.data.error) {
          setAlerMessage(true);
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
      fullscreen={isMobile?(true):(false)}
      className=""
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
   
      <Modal.Header closeButton className="border-0">
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>

      <Modal.Body className="border-0 p-5 ">
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

        {alerMessage && <DangerAlert msg={`كلمة السر او الايميل خاطئ`} />}

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
                <button className="btn w-75 btn-primary mx-auto" type="submit">
                  <div>تسجيل دخول</div>
                </button>
              </div>
            </div>
          </Form>
        </Formik>
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
    <Register
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
   </>


  );
}

export default Login;
