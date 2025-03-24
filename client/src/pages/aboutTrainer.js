import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink, Outlet, Link } from "react-router-dom";
import AnimatedPage from "../animations/AnimatedPage";

function AboutTrainer() {
  let { id } = useParams(); // get id from url
  const [trainerObject, setTrainerObject] = useState({});
  const imageUrl = `url(http://localhost:9000/${trainerObject.trainerData?.avatar.replace(
    "\\",
    "/"
  )})`;

  useEffect(() => {
    axios.get(`http://localhost:9000/trainers/byId/${id}`).then((response) => {
      //query data by ID
      setTrainerObject(response.data);
    });
  }, []);

  return (
    <AnimatedPage>
      <>
        <div className="container-fluid bg-body-secondary  ">
          <div className="row justify-content-center">
            <div className="col-12 col-md-4">
              <div
                className="header-image "
                style={{ backgroundImage: imageUrl }}
              ></div>
            </div>
          </div>
        </div>
        <div className="aboutTrainer-container"></div>
        <div class="container p-2 p-sm-2 p-md-3 p-lg-4 p-xl-5  ">
          <div className="container">
            <div className="row g-3 gx-5 mb-4">
              <div className="col-12">
                <h1 className="fw-bold">
                  {trainerObject.trainerData?.username}
                </h1>
              </div>
              <h5 className=" ">الوصف</h5>
              <div className="col-12 col-lg-6  ">
                <p className="fs-6 text-secondary m-0">
                  {trainerObject.trainerData?.description}
                </p>
              </div>

              <div className="col-12  col-lg-6 ">
                <table>
                  <tr>
                    <td>
                      <i class="bi bi-clock-history text-secondary"></i>
                      <span class="text-secondary text-nowrap">الخبرة:</span>
                    </td>
                    <td>
                      <span class="text-primary-emphasis text-nowrap">
                        {trainerObject.trainerData?.experience}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5">
                      {" "}
                      <i class="bi bi-gender-ambiguous text-secondary"></i>
                      <span class="text-secondary text-nowrap ">تدريب:</span>
                    </td>
                    <td>
                      <span class="text-primary-emphasis text-nowrap">
                        {trainerObject.trainerData?.gender}
                      </span>
                    </td>
                  </tr>
                </table>
              </div>

              <div className="col-12">
                <div className="d-flex gap-1 align-items-center ">
                  <h6 className="text-secondary border-start m-0 ps-2 ms-2  ">
                    المجالات
                  </h6>
                  {trainerObject.fields?.map((element, index) => (
                    <Link to={`/${element.id}`}>
                      <span
                        key={index}
                        className="field-badge badge  bg-transparent border border-1 text-secondary  p-2 fw-normal"
                      >
                        {element.fieldName}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <h4 className="mb-4">الباقات</h4>
            <div className="row d-flex align-items-center">
              <div className="col-12 col-md-4 p-0">
                <div class="card  border-0 rounded-0 bg-body-secondary">
                  <div class="card-body p-4">
                    <div className="row g-4">
                      <div className="col-12">
                        <h4 class="my-0 fw-bold">باقة التدريب</h4>
                      </div>
                      <div className="col-12">
                        {" "}
                        <div className="d-flex  align-items-center">
                          <h2 class="card-title m-0 ">100</h2>
                          <img
                            src={`${process.env.PUBLIC_URL}/Saudi_Riyal_Symbol-2.svg`}
                            alt="SAR"
                            width="20"
                          />
                          <h6 class="text-secondary m-0">/ شهر</h6>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="button"
                          class="btn  btn-primary text-white "
                        >
                          اشترك
                        </button>
                      </div>
                      <div className="col-12">
                        {" "}
                        <p>جدول تدريب</p>
                      </div>
                      <div className="col-12">
                        <p>تواصل مع المدرب</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 p-0">
                <div class="card  border-0 rounded-0 bg-body-tertiary glow-primary z-1">
                  <div class="card-body p-4">
                    <div className="row g-4">
                      <div className="col-12">
                        <h4 class="my-0 fw-bold">باقة PEEK</h4>
                      </div>
                      <div className="col-12">
                        {" "}
                        <div className="d-flex  align-items-center">
                          <h2 class="card-title pricing-card-title m-0 ">
                            150
                          </h2>
                          <img
                            src={`${process.env.PUBLIC_URL}/Saudi_Riyal_Symbol-2.svg`}
                            alt="SAR"
                            width="20"
                          />
                          <h6 class="text-secondary m-0">/ شهر</h6>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="button"
                          class="btn  btn-primary text-white "
                        >
                          اشترك
                        </button>
                      </div>
                      <div className="col-12">
                        {" "}
                        <p>جدول تدريب</p>
                      </div>
                      <div className="col-12">
                        {" "}
                        <p>جدول تغذية</p>
                      </div>
                      <div className="col-12">
                        <p>تواصل مع المدرب</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 p-0">
                <div class="card  border-0 rounded-0 bg-body-secondary">
                  <div class="card-body p-4">
                    <div className="row g-4">
                      <div className="col-12">
                        <h4 class="my-0 fw-bold">باقة التدريب</h4>
                      </div>
                      <div className="col-12">
                        {" "}
                        <div className="d-flex  align-items-center">
                          <h2 class="card-title pricing-card-title m-0">50</h2>
                          <img
                            src={`${process.env.PUBLIC_URL}/Saudi_Riyal_Symbol-2.svg`}
                            alt="SAR"
                            width="20"
                          />
                          <h6 class="text-secondary m-0">/ شهر</h6>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="button"
                          class="btn  btn-primary text-white "
                        >
                          اشترك
                        </button>
                      </div>
                      <div className="col-12">
                        {" "}
                        <p>جدول تغذية</p>
                      </div>
                      <div className="col-12">
                        <p>تواصل مع المدرب</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </AnimatedPage>
  );
}

export default AboutTrainer;
