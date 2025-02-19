import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";


function Register() {
  const [listOfFields, setListOfFields] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/fields").then((response) => {
      setListOfFields(response.data);
    });
  }, []);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required().min(3).max(24),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8).max(24),
  });

  const onSubmitTrainee = (data) => {
    axios.post("http://localhost:9000/authenticate/register", data).then((response) => {
    });
  };

  const onSubmitTrainer = (data) => {
    axios.post("http://localhost:9000/trainerFields", data).then((response) => {
    
    });

  };

  return (
    <div
      class="modal fade"
      id="registerModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
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
                <h3 className=" mb-3">انشاء حساب</h3>
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
                class="tab-content p-5 rounded bg-body-secondary "
                id="myTabContent"
              >
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <Formik
                    initialValues={{ username: "", email: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={onSubmitTrainee}
                  >
                    <Form>
                      <div className="row g-3">
                        <div className="form-floating mb-3 col-12">
                          <Field
                            type="text"
                            className="form-control bg-transparent"
                            id="floatingUsername"
                            name="username"
                            placeholder="الاسم"
                          />
                          <label htmlFor="floatingUsername text-start">
                            الاسم
                          </label>
                          <ErrorMessage
                            name="username"
                            component="span"
                            className="text-danger"
                          />
                        </div>

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

                        <div className="col-12 d-flex justify-content-center mt-5">
                          <button
                            className="btn w-75 btn-primary mx-auto"
                            type="submit"
                          >
                            <div>تسجيل</div>
                          </button>
                        </div>
                      </div>
                    </Form>
                  </Formik>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <Formik
                    initialValues={{
                      username: "",
                      email: "",
                      password: "",
                      experience: "",
                      description: "",
                      fieldIds: "",
                      gender: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={onSubmitTrainer}
                  >
                    <Form>
                      <div className="row g-3 ">
                        <div className="col-12 form-floating">
                          <Field
                            className="form-control bg-transparent"
                            name="username"
                            placeholder=" "
                          />
                          <label className="form-label">الاسم</label>
                          <ErrorMessage
                            name="username"
                            component="span"
                            className="text-danger"
                          />
                        </div>

                        <div className="col-12 form-floating">
                          <Field
                            type="email"
                            className="form-control bg-transparent"
                            name="email"
                            placeholder=" "
                          />
                          <label className="form-label">الايميل</label>
                          <ErrorMessage
                            name="email"
                            component="span"
                            className="text-danger"
                          />
                        </div>

                        <div className="col-12 form-floating">
                          <Field
                            type="password"
                            className="form-control bg-transparent"
                            name="password"
                            placeholder=" "
                          />
                          <label className="form-label">كلمة السر</label>
                          <ErrorMessage
                            name="password"
                            component="span"
                            className="text-danger"
                          />
                        </div>

                        <div className="col-12 form-floating">
                          <Field
                            className="form-control bg-transparent"
                            name="experience"
                            placeholder=" "
                          />
                          <label className="form-label">سنوات الخبرة</label>
                          <ErrorMessage
                            name="experience"
                            component="span"
                            className="text-danger"
                          />
                        </div>

                        <div className="col-12 form-floating">
                          <Field
                            as="select"
                            className="form-select bg-transparent"
                            name="gender"
                          >
                            <option value="رجال فقط">رجال فقط </option>
                            <option value="نساء فقط">نساء فقط </option>
                            <option value="رجال و نساء">رجال و نساء </option>
                          </Field>

                          <ErrorMessage
                            name="field"
                            component="span"
                            className="text-danger"
                          />
                        </div>

                        <div className="col-12">
                          <h6 className="bg-transparent">المجالات </h6>
                          <div className="d-flex gap-2 flex-wrap ">
                            {listOfFields.map((value, key) => {
                              return (
                                <>
                                  <Field
                                    type="checkbox"
                                    className="btn-check"
                                    id={value.fieldName}
                                    name="fieldIds"
                                    value={`${value.id}`}
                                  />
                                  <label
                                    className="btn btn-outline-secondary"
                                    htmlFor={value.fieldName}
                                  >
                                    <div>
                                    {value.fieldName}
                                    </div>
                                   
                                  </label>
                                </>
                              );
                            })}
                          </div>
                          <ErrorMessage
                            name="fieldIds"
                            component="span"
                            className="text-danger"
                          />
                        </div>

                        <div className="col-12 form-floating">
                          <Field
                            type="textarea"
                            className="form-control bg-transparent"
                            name="description"
                            placeholder=" "
                            style={{ height: "100px" }}
                          />
                          <label className="form-label">اخبرنا عنك </label>
                          <ErrorMessage
                            name="description"
                            component="span"
                            className="text-danger"
                          />
                        </div>

                        <div className="col-12 d-flex justify-content-center mt-5">
                          <button
                            className="btn w-75 btn-primary mx-auto"
                            type="submit"
                          >
                            <div>تسجيل</div>
                          </button>
                        </div>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer border-0"></div>
        </div>
      </div>
    </div>
  );
}

export default Register ;
