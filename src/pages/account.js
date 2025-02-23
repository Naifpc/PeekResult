import React from "react";
import { Link } from "react-router-dom";
import DoughnutChart from "../partials/DoughnutChart";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";



function calculateAge(birthDate) {
  // Convert the birthdate string to a Date object
  let birthDateObj = new Date(birthDate);

  // Get today's date
  let today = new Date();

  // Calculate the age
  let age = today.getFullYear() - birthDateObj.getFullYear();

  // Adjust if the birthdate hasn't happened yet this year
  let monthDifference = today.getMonth() - birthDateObj.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
  }

  return  age;

}

function Account() {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
      axios.get(`http://localhost:9000/authenticate/userData`,{ // get user data 
        headers: {
          accessToken: sessionStorage.getItem('accessToken')
        }
      }).then((response) => {
        setUserData(response.data);
      });
    },[]);

  const validationSchema = Yup.object().shape({
    birthDate: Yup.date(),
    gender: Yup.string(),

    length: Yup.number().min(0).max(250),
    neckLength: Yup.number().min(0).max(250),
    waistLength: Yup.number().min(0).max(250),

    bodyWeight: Yup.number().min(0).max(250),
    muscleWeight: Yup.number().min(0).max(250),
    fatWeight: Yup.number().min(0).max(250),
  });


  const onSubmit = (data) => {
    axios
      .post("http://localhost:9000/authenticate/update", data,{
        headers: {
          accessToken: sessionStorage.getItem('accessToken')
        }
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else{
          alert('update success');
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



  return (
    <div class="container p-2 p-sm-2 p-md-3 p-lg-4 p-xl-5 ">
      <h4 className="mb-4">القياسات</h4>

      <div className="row g-3 align-items-center">
        <div className="col-12 col-lg-6">
          <DoughnutChart
          weight={ userData.weight} />
        </div>

        <div className="col-12 col-lg-6">
          <div className="row g-2">
            <div className="col-12">
              <h5 className="m-0"> الجسم</h5>

              <h2 className="fw-bold m-0">{userData.weight}</h2>
              <h6 className="text-secondary">/100</h6>

              <div
                class="progress "
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar " style={{ width: `${userData.weight}%` }}></div>
              </div>
            </div>
            <div className="col-12">
              <h5 className="m-0"> نسبة العضلات</h5>

              <h2 className="fw-bold m-0">{userData.muscleWeight}</h2>
              <h6 className="text-secondary">/100</h6>

              <div
                class="progress "
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar "
                  style={{ width: `${userData.muscleWeight}%`, backgroundColor: "rgb(54, 162, 235)" }}
                ></div>
              </div>
            </div>
            <div className="col-12">
              <h5 className="m-0"> نسبة الدهون</h5>

              <h2 className="fw-bold m-0">{userData.fatWeight}</h2>
              <h6 className="text-secondary">/100</h6>

              <div
                class="progress "
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar"
                  style={{ width: `${userData.fatWeight}%`, backgroundColor: "rgb(255, 206, 86)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4"></div>

      <div className=" row gap-3 g-1  ">
        <div className="col-sm-12 col-lg bg-body-secondary text-center p-1 rounded  ">
          <h6>الطول</h6>
          <h2>{userData.height}</h2>
          <span class="badge rounded-pill text-bg-secondary">سم</span>
        </div>

        <div className="col-sm-12 col-lg  bg-body-secondary text-center p-1 rounded  ">
          <h6>العمر</h6>
          <h2>{calculateAge(userData.birthDate)}</h2>
          <span class="badge rounded-pill text-bg-secondary">سنة</span>
        </div>
      </div>

      <div class="">
        <h4 className="my-4">تحديث البيانات</h4>

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
              initialValues={{ birthDate: "", gender: "" }}
              validationSchema={validationSchema}
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

                  <div className="col-12 d-flex justify-content-center">
                    <div class="col-12">
                      <button class="btn btn-secondary" type="submit">
                        حفظ
                      </button>
                    </div>
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
                  initialValues={{
                    length: "0",
                    neckLength: "0",
                    waistLength: "0",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form>
                    <div className="row g-3 mt-3">
                      <div className="form-floating mb-3 col-12">
                        <Field
                          type="number"
                          className="form-control bg-transparent"
                          id="length"
                          name="length"
                          onFocus={handleClickLength}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="length">الطول/ سم</label>
                        <ErrorMessage
                          name="length"
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

                      <div className="col-12 d-flex justify-content-center">
                        <div class="col-12">
                          <button class="btn btn-secondary" type="submit">
                            حفظ
                          </button>
                        </div>
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
              initialValues={{
                bodyWeight: "0",
                muscleWeight: "0",
                fatWeight: "0",
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div className="row g-3 mt-3">
                  <div className="form-floating mb-3 col-12">
                    <Field
                      type="number"
                      className="form-control bg-transparent"
                      id="bodyWeight"
                      name="bodyWeight"
                    />
                    <label htmlFor="length">وزن الجسم/ كجم</label>
                    <ErrorMessage
                      name="bodyWeight"
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

                  <div className="col-12 d-flex justify-content-center">
                    <div class="col-12">
                      <button class="btn btn-secondary" type="submit">
                        حفظ
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>

      <h4 className="my-4">الحساب</h4>
      <div className="container my-4">
        <div className="row gap-3">
          <div className="col bg-body-secondary rounded text-center ">
            <Link className="nav-link" to="/accountData">
              <div className=" p-4  ">
                <h1 className="">
                  <i class="bi bi-person-fill "></i>
                </h1>
                <h6 className="">الملف الشخصي</h6>
              </div>
            </Link>
          </div>

          <div className="col bg-body-secondary rounded text-center ">
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
      <div className="container-fluid my-4 mb-5">
        <div className="row ">
          <div className="col-12 col-md-4 ">
            <button class="btn btn-outline-danger w-100">
              {" "}
              <i class="bi bi-box-arrow-right "></i> تسجل خروج
            </button>
          </div>
        </div>
      </div>

      <div className="mb-5 p-1"></div>
    </div>
  );
}

export default Account;
