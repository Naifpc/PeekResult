import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function SavePlan(props) {
  let navigate = useNavigate();
  const daysList = props.daysList;
  const onSubmit = (data) => {
    axios
      .post(
        "http://localhost:9000/plans/newPlan",
        { name: data.name, daysList },
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          props.onHide();
          navigate("/plans");
        }
      });
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(4).max(15),
  });

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Formik
          initialValues={{
            name: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Modal.Header closeButton className="border-0 ">
              <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
            </Modal.Header>

            <Modal.Body className="border-0 p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5  ">
              <div className="row g-2">
                <div className="col-12">
                  <h4 className="fw-bold text-center mb-4 ">حفظ الخطة</h4>
                </div>
                <div className="col-12">
                  <div className="form-floating col-12 ">
                    <Field
                      type="text"
                      className="form-control bg-transparent "
                      name="name"
                      placeholder="اسم التمرين"
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      className="text-danger"
                    />
                    <label htmlFor="floatingEmail">
                      {" "}
                      <i class="bi bi-pencil-square"></i> اسم الخطة
                    </label>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="px-lg-5">
              <div className="row g-2 align-items-center w-100  ">
                <div className="col-12 col-lg-3">
                  <button
                    type="submit"
                    class="btn btn-primary text-white w-100"
                  >
                    حفظ
                  </button>
                </div>
                <div className="col-12 col-lg-3">
                  <button
                    type="button"
                    onClick={props.onHide}
                    className="btn btn-link  link-secondary w-100
                                link-underline link-underline-opacity-0 
                                 p-0 m-0"
                  >
                    الغاء
                  </button>
                </div>
              </div>
            </Modal.Footer>
          </Form>
        </Formik>
      </Modal>
    </>
  );
}

export default SavePlan;
