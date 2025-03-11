import React from "react";
import DoughnutChart from "../partials/DoughnutChart";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { isMobile } from "react-device-detect";
import LoginRequired from "../partials/loginRequired";
import Alerts from "../partials/alerts";
import AnimatedPage from "../animations/AnimatedPage";
import { useEffect, useState } from "react";

function calculateAge(birthDate) {
  //calculate age from birthdate
  let birthDateObj = new Date(birthDate);
  let today = new Date();
  let age = today.getFullYear() - birthDateObj.getFullYear();
  let monthDifference = today.getMonth() - birthDateObj.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }

  return age;
}

function calculateBMI(heightCm, weightKg) {
  let heightMeters = heightCm / 100;
  let bmi = weightKg / (heightMeters * heightMeters);
  return Math.trunc(bmi);
}

function Account({ fetchData, userData, logout }) {
  const [modalShow, setModalShow] = useState(true);
  const [alertMessage, setAlertMessage] = useState(false);


  const onSubmit = (data) => {
    axios
      .post("http://localhost:9000/authenticate/update", data, {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          fetchData();
          setAlertMessage(true);
        }
      });
  };

  const [imageSrc, setImageSrc] = useState(
    `${process.env.PUBLIC_URL}/body.svg`
  );

  const handleClickLength = () => {
    setImageSrc(`${process.env.PUBLIC_URL}/body-length.svg`);
  };

  const handleClickNeck = () => {
    setImageSrc(`${process.env.PUBLIC_URL}/body-neck.svg`);
  };

  const handleClickWaist = () => {
    setImageSrc(`${process.env.PUBLIC_URL}/body-waist.svg`);
  };

  const handleBlur = () => {
    setImageSrc(`${process.env.PUBLIC_URL}/body.svg`);
  };

  const generalValidationSchema = Yup.object().shape({
    birthDate: Yup.date().required(),
    gender: Yup.string().required(),
  });

  const heightValidationSchema = Yup.object().shape({
    height: Yup.number().min(0).max(250).required(),
    neckLength: Yup.number().min(0).max(250).required(),
    waistLength: Yup.number().min(0).max(250).required(),
  });

  const weightValidationSchema = Yup.object().shape({
    weight: Yup.number().min(0).max(250).required(),
    muscleWeight: Yup.number().min(0).max(250).required(),
    fatWeight: Yup.number().min(0).max(250).required(),
  });

  return (
    <AnimatedPage>
      {userData ? (
        <>
          <Alerts
            variant={"success"}
            key={"success"}
            showAlert={alertMessage}
            onClose={() => setAlertMessage(false)}
            msg={`تم تحديث البيانات بنجاح`}
            icon={<i class="bi bi-check-circle-fill"></i>}
          />

          <div class="container p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5 ">
            <h4 className="mb-4">البيانات</h4>

            <div className="row  g-3 align-items-center rounded bg-body-secondary ">
              <div className="col-12 col-lg-6 my-3">
                <DoughnutChart
                  weight={userData.weight}
                  fatWeight={userData.fatWeight}
                  muscleWeight={userData.muscleWeight}
                />
              </div>
              <div className="col-12 col-lg-6">
                <div className="row p-1">
                  <div className="col-4 border-start">
                    <div className="d-flex flex-nowrap align-items-center gap-1 fs-6">
                      <span class="p-1 rounded-circle bg-primary"></span>
                      <p className=" mb-1 m-0"> وزن الجسم </p>
                    </div>
                    <h2 className="fw-bold m-0">{userData.weight}</h2>
                    <h6 className="text-secondary">/{userData.weight} كجم</h6>
                  </div>
                  <div className="col-4 ">
                    <div className="d-flex flex-nowrap align-items-center gap-1 fs-6 ">
                      <span
                        class="p-1 rounded-circle"
                        style={{ backgroundColor: "rgb(54, 162, 235)" }}
                      ></span>
                      <p className=" mb-1 m-0  text-nowrap"> وزن العضلات </p>
                    </div>

                    <h2 className="fw-bold m-0">{userData.muscleWeight}</h2>
                    <h6 className="text-secondary">/{userData.weight} كجم</h6>
                  </div>
                  <div className="col-4 border-end">
                    <div className="d-flex flex-nowrap align-items-center gap-1 fs-6">
                      <span
                        class="p-1 rounded-circle"
                        style={{ backgroundColor: "rgb(255, 206, 86)" }}
                      ></span>
                      <p className=" mb-1 m-0"> وزن الدهون </p>
                    </div>

                    <h2 className="fw-bold m-0">{userData.fatWeight}</h2>
                    <h6 className="text-secondary">/{userData.weight} كجم</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className=" row  p-1 gap-2 mt-1">
              <div className="col-sm-12 col-lg bg-body-secondary text-center p-1 rounded  ">
                <h6>مؤشر كتلة الجسم</h6>
                <h2>{calculateBMI(userData.height, userData.weight)}</h2>
                <span class="badge rounded-pill text-bg-secondary">BMI</span>
              </div>

              <div className="col-sm-12 col-lg  bg-body-secondary text-center p-1 rounded  ">
                <h6>العمر</h6>
                <h2>{calculateAge(userData.birthDate)}</h2>
                <span class="badge rounded-pill text-bg-secondary">سنة</span>
              </div>
            </div>
            <h4 className="my-4">تحديث البيانات</h4>
            <div className="row p-1">
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
                    عام
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
                    القياسات
                  </button>
                </li>
                <li class="nav-item " role="presentation">
                  <button
                    class="nav-link text-body"
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
                    enableReinitialize
                    initialValues={{
                      birthDate: userData.birthDate,
                      gender: userData.gender,
                    }}
                    validationSchema={generalValidationSchema}
                    onSubmit={onSubmit}
                  >
                    <Form>
                      <div className="row g-3 mt-3">
                        <div className="form-floating mb-3 col-12">
                          <Field
                            type="date"
                            className="form-control bg-transparent"
                            id="birthDate"
                            name="birthDate"
                          />
                          <label htmlFor="birthDate">تاريخ الميلاد</label>
                          <ErrorMessage
                            name="birthDate"
                            component="span"
                            className="text-danger"
                          />
                        </div>

                        <div className="form-floating mb-3 col-12">
                          <Field
                            as="select"
                            className="form-control bg-transparent"
                            id="gender"
                            name="gender"
                          >
                            <option value="">اختر</option>
                            <option value="ذكر">ذكر</option>
                            <option value="انثى">انثى</option>
                          </Field>
                          <label htmlFor="gender">الجنس</label>
                          <ErrorMessage
                            name="gender"
                            component="span"
                            className="text-danger"
                          />
                        </div>

                        <div className="col-12 col-lg-2 d-flex justify-content-center">
                          <button class="btn btn-secondary w-75" type="submit">
                            حفظ
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
                  <div className="row">
                    <div className="col-6">
                      <Formik
                        enableReinitialize
                        initialValues={{
                          height: userData.height,
                          neckLength: userData.neckLength,
                          waistLength: userData.waistLength,
                        }}
                        validationSchema={heightValidationSchema}
                        onSubmit={onSubmit}
                      >
                        <Form>
                          <div className="row g-3 mt-3">
                            <div className="form-floating mb-3 col-12">
                              <Field
                                type="number"
                                className="form-control bg-transparent"
                                id="height"
                                name="height"
                                onFocus={handleClickLength}
                                onBlur={handleBlur}
                              />
                              <label htmlFor="height">الطول/ سم</label>
                              <ErrorMessage
                                name="height"
                                component="span"
                                className="text-danger"
                              />
                            </div>

                            <div className="form-floating mb-3 col-12">
                              <Field
                                type="number"
                                className="form-control bg-transparent"
                                id="neckLength"
                                name="neckLength"
                                onFocus={handleClickNeck}
                                onBlur={handleBlur}
                              />
                              <label htmlFor="neckLength">الرقبة/ سم</label>
                              <ErrorMessage
                                name="neckLength"
                                component="span"
                                className="text-danger"
                              />
                            </div>

                            <div className="form-floating mb-3 col-12">
                              <Field
                                type="number"
                                className="form-control bg-transparent"
                                id="waistLength"
                                name="waistLength"
                                onFocus={handleClickWaist}
                                onBlur={handleBlur}
                              />
                              <label htmlFor="waistLength">الخصر/ سم</label>
                              <ErrorMessage
                                name="waistLength"
                                component="span"
                                className="text-danger"
                              />
                            </div>

                            <div className="col-12 col-lg-3 d-flex justify-content-center">
                              <button
                                class="btn btn-secondary w-75"
                                type="submit"
                              >
                                حفظ
                              </button>
                            </div>
                          </div>
                        </Form>
                      </Formik>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                      <img
                        className="text-center "
                        src={imageSrc}
                        alt="PEEK RESULT"
                        width="150"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <Formik
                    enableReinitialize
                    initialValues={{
                      weight: userData.weight,
                      muscleWeight: userData.muscleWeight,
                      fatWeight: userData.fatWeight,
                    }}
                    validationSchema={weightValidationSchema}
                    onSubmit={onSubmit}
                  >
                    <Form>
                      <div className="row g-3 mt-3">
                        <div className="form-floating mb-3 col-12">
                          <Field
                            type="number"
                            className="form-control bg-transparent"
                            id="weight"
                            name="weight"
                          />
                          <label htmlFor="weight">وزن الجسم/ كجم</label>
                          <ErrorMessage
                            name="weight"
                            component="span"
                            className="text-danger"
                          />
                        </div>

                        <div className="form-floating mb-3 col-12">
                          <Field
                            type="number"
                            className="form-control bg-transparent"
                            id="muscleWeight "
                            name="muscleWeight"
                          />
                          <label htmlFor="muscleWeight">وزن العضلات/ كجم</label>
                          <ErrorMessage
                            name="muscleWeight"
                            component="span"
                            className="text-danger"
                          />
                        </div>

                        <div className="form-floating mb-3 col-12">
                          <Field
                            type="number"
                            className="form-control bg-transparent"
                            id="fatWeight"
                            name="fatWeight"
                          />
                          <label htmlFor="fatWeight">وزن الدهون/ كجم</label>
                          <ErrorMessage
                            name="fatWeight"
                            component="span"
                            className="text-danger"
                          />
                        </div>

                        <div className="col-12 col-lg-2 d-flex justify-content-center">
                          <button class="btn btn-secondary w-75" type="submit">
                            حفظ
                          </button>
                        </div>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>

            
            {isMobile && (
              
              <div className="row">
                <h4 className="my-4">الحساب</h4>
                <div class="list-group p-1  ">
                  <button
                    type="button "
                    class="list-group-item d-flex justify-content-between list-group-item-action border-0 border-bottom  bg-body-secondary p-4 "
                    aria-current="true"
                  >
                    <div>
                      <i class="bi bi-person ms-1"></i>
                      تحديث الحساب
                    </div>
                    <i class="bi bi-arrow-left"></i>
                  </button>
                  <button
                    type="button"
                    class="list-group-item d-flex justify-content-between list-group-item-action  border-0  bg-body-secondary p-4"
                  >
                    <div>
                      <i class="bi bi-person-vcard ms-1"></i>
                      اشتراكي
                    </div>
                    <i class="bi bi-arrow-left"></i>
                  </button>
                </div>

                <div className="mt-4 p-1">
                  <button
                    className="btn bg-body-secondary text-danger  w-100 p-3"
                    onClick={logout}
                  >
                    <i class="bi bi-box-arrow-right "></i> تسجل خروج
                  </button>
                </div>
                <div className="my-5"></div>
              </div>
            )}
          </div>
          
        </>
      ):(

        <LoginRequired show={modalShow} onHide={() => setModalShow(false)} />


      )}
    </AnimatedPage>
  );
}

export default Account;
