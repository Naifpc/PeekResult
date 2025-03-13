import React, { useEffect } from "react";
import DoughnutChart from "../partials/DoughnutChart";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { isMobile } from "react-device-detect";
import LoginRequired from "../partials/loginRequired";
import Alerts from "../partials/alerts";
import AnimatedPage from "../animations/AnimatedPage";
import { useState } from "react";
import HumanBody from "../partials/humanBody";

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

function Account({ fetchData, userData, logout }) {
  const [modalShow, setModalShow] = useState(true);
  const [alertMessage, setAlertMessage] = useState(false);
  const [bodyImage, setBodyImage] = useState([]);




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
            <div className=" row p-1 gap-4 mt-1">
              <h4 className="">البيانات</h4>
              
                <div className="col-12 d-flex justify-content-center align-items-center ">
                  <div className="bg-body-secondary d-flex  justify-content-center border border-4 rounded-circle align-items-center"
                  style={{width:100,height:100}}>
                    <h1 className="text-secondary m-0 text-center opacity-50">
                      {userData.username[0].toUpperCase()}
                    </h1>
                  </div>
                </div>
                <div className="col-12 align-items-center mb-4">
                  <h3 className="text-center mb-1">{userData.username}</h3>
                  <h6 className="text-center fw-light text-secondary">
                    {userData.email}
                  </h6>
                </div>
                <div className="col-12  d-flex justify-content-evenly">
                  <div className="text-center">
                    <div className="d-flex gap-1 align-items-baseline">
                      <h1 className="fw-bold m-0">{userData.weight}</h1>
                      <h6 className="fw-light text-secondary m-0">كجم</h6>
                    </div>
                    <h6 className="fw-light ">الوزن</h6>
                  </div>

                  <hr className="border"></hr>

                  <div className="text-center">
                    <div className="d-flex gap-1 align-items-baseline">
                      <h1 className="fw-bold m-0">{userData.height}</h1>
                      <h6 className="fw-light text-secondary m-0">كجم</h6>
                    </div>
                    <h6 className="fw-light ">الطول</h6>
                  </div>

                  <hr className="border"></hr>

                  <div className="text-center">
                    <div className="d-flex gap-1 align-items-baseline">
                      <h1 className="fw-bold m-0">
                        {calculateAge(userData.birthDate)}
                      </h1>
                      <h6 className="fw-light text-secondary m-0">سنة</h6>
                    </div>
                    <h6 className="fw-light">العمر</h6>
                  </div>
                </div>
             
              <div className="col-12">
                <div className="row bg-body-secondary rounded align-items-center p-3">
                  <h4 className="mb-4 text-center">توزيع الوزن</h4>
                  <div className="col-12 col-lg-6 my-3 ">
                    <DoughnutChart
                      weight={userData.weight}
                      fatWeight={userData.fatWeight}
                      muscleWeight={userData.muscleWeight}
                    />
                  </div>
                  <div className="col-12 col-lg-6 d-flex justify-content-evenly">
                   
                      <div className="">
                        <div className="d-flex flex-nowrap align-items-center gap-1 fs-6">
                          <span class="p-1 rounded-circle bg-primary"></span>
                          <p className=" mb-1 m-0"> وزن الجسم </p>
                        </div>
                        <div className="d-flex gap-1 align-items-baseline">
                          <h2 className="fw-bold m-0">{userData.weight}</h2>
                          <h6 className="text-secondary">
                            /{userData.weight} كجم
                          </h6>
                        </div>
                      </div>

                      <hr className="border"></hr>

                      <div className="">
                        <div className="d-flex flex-nowrap align-items-center gap-1 fs-6 ">
                          <span
                            class="p-1 rounded-circle"
                            style={{ backgroundColor: "rgb(54, 162, 235)" }}
                          ></span>
                          <p className=" mb-1 m-0  text-nowrap">
                            وزن العضلات
                          </p>
                        </div>

                        <div className="d-flex gap-1 align-items-baseline">
                          <h2 className="fw-bold m-0">
                            {userData.muscleWeight}
                          </h2>
                          <h6 className="text-secondary">
                            /{userData.weight} كجم
                          </h6>
                        </div>
                      </div>

                      <hr className="border"></hr>

                      <div className="">
                        <div className="d-flex flex-nowrap align-items-center gap-1 fs-6">
                          <span
                            class="p-1 rounded-circle"
                            style={{ backgroundColor: "rgb(255, 206, 86)" }}
                          ></span>
                          <p className=" mb-1 m-0"> وزن الدهون </p>
                        </div>
                        <div className="d-flex gap-1 align-items-baseline">
                          <h2 className="fw-bold m-0">{userData.fatWeight}</h2>
                          <h6 className="text-secondary">
                            /{userData.weight} كجم
                          </h6>
                        </div>
                      </div>
                   
                  </div>
                </div>
              </div>
            </div>

            <h4 className="my-4">تحديث البيانات</h4>
            <div className="row p-1">
              <ul class="nav nav-tabs " id="myTab" role="tablist">
                <li class=" nav-item " role="presentation">
                  <button
                    class="nav-link text-body   active"
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
                    class="nav-link text-body "
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
                    class="nav-link text-body "
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
                            <div>حفظ</div>
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
                                onFocus={()=>setBodyImage("height")}
                                onBlur={()=>setBodyImage("front")}
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
                                onFocus={()=>setBodyImage("neck")}
                                onBlur={()=>setBodyImage("front")}
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
                                onFocus={()=>setBodyImage("waist")}
                                onBlur={()=>setBodyImage("front")}
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
                                <div>حفظ</div>
                              </button>
                            </div>
                          </div>
                        </Form>
                      </Formik>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                      <HumanBody
                        value={bodyImage}
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
                            <div>حفظ</div>
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
                <div class="list-group p-1 rounded ">
                  <button
                    type="button "
                    class="list-group-item  d-flex justify-content-between list-group-item-action border-0 border-bottom  bg-body-secondary p-4 "
                    aria-current="true"
                  >
                    <div>
                      <i class="bi bi-person ms-1"></i>
                      اعدادات الحساب
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
                    className="btn bg-body-secondary text-danger rounded  w-100 p-3"
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
      ) : (
        <LoginRequired show={modalShow} onHide={() => setModalShow(false)} fetchData={fetchData} />
      )}
    </AnimatedPage>
  );
}

export default Account;
