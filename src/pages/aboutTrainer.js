import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink, Outlet, Link } from "react-router-dom";

function AboutTrainer() {
  let { id } = useParams(); // get id from url
  const [trainerObject, setTrainerObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:9000/trainer/byId/${id}`).then((response) => {
      //query data by ID
      setTrainerObject(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <div className="container-fluid bg-body-secondary  ">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            <div className="header-image "></div>
          </div>
        </div>
      </div>
      <div className="aboutTrainer-container"></div>
      <div class="container p-2 p-sm-2 p-md-3 p-lg-4 p-xl-5  ">
        <div className="container">
          <div className="row g-3 gx-5 mb-4">
            <div className="col-12">
              <h1 className="fw-bold">{trainerObject.trainer?.username}</h1>
            </div>
            <h5 className=" ">الوصف</h5>
            <div className="col-12 col-lg-6  ">
              
              <p className="fs-6 text-secondary m-0">
                {trainerObject.trainer?.description}
              </p>
            </div>

            <div className="col-12  col-lg-6 ">
              <table>
                <tr>
                  <td><i class="bi bi-clock-history text-secondary"></i>
                  <span class="text-secondary text-nowrap">الخبرة:</span></td>
                  <td><span class="text-primary-emphasis text-nowrap">
                  {trainerObject.trainer?.experience}
                </span></td>
                </tr>
                <tr >
                  <td className="ps-5" > <i class="bi bi-gender-ambiguous text-secondary"></i>
                  <span class="text-secondary text-nowrap ">تدريب:</span></td>
                  <td><span class="text-primary-emphasis text-nowrap">رجال فقط</span></td>
                </tr>
              </table>
            </div>

            <div className="col-12">             
              <div className="d-flex gap-1 align-items-center ">
              <h6 className="text-secondary border-start m-0 ps-2 ms-2  ">المجالات</h6>
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
          <div className="row">
            <div className="col-12 col-md-4">
              <div class="card peek-sub   text-center mb-4 border-primary sub-card">
                <div class="card-header rounded-0  border-primary bg-primary">
                  <h4 class="my-0 font-weight-normal">باقة الPeek</h4>
                </div>
                <div class="card-body sub-card-body">
                  <h1 class="card-title pricing-card-title">
                    300sr <small class="text-muted">/ شهر</small>
                  </h1>
                  <div className="container px-5">
                    <select
                      className="form-select form-select-lg"
                      name=""
                      id=""
                    >
                      <option value="">12 شهر</option>
                    </select>
                  </div>
                  <div className="container d-flex justify-content-center">
                    <ul class="list text-end mt-3 mb-4">
                      <li>جدول تغذية</li>
                      <li>جدول تدريب</li>
                      <li>تواصل مع المدرب</li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-primary"
                  >
                    اشترك
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div class="card text-center mb-4  sub-card">
                <div class="card-header ">
                  <h4 class="my-0 font-weight-normal">باقة التدريب</h4>
                </div>
                <div class="card-body sub-card-body">
                  <h1 class="card-title pricing-card-title">
                    150sr <small class="text-muted">/ شهر</small>
                  </h1>
                  <div className="container px-5">
                    <select
                      className="form-select form-select-lg"
                      name=""
                      id=""
                    >
                      <option value="">12 شهر</option>
                    </select>
                  </div>
                  <div className="container d-flex justify-content-center">
                    <ul class="list text-end mt-3 mb-4">
                      <li>جدول تدريب</li>
                      <li>تواصل مع المدرب</li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    class="btn btn-lg btn-block  btn-outline-primary"
                  >
                    اشترك
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12  col-md-4">
              <div class="card  text-center mb-4 sub-card">
                <div class="card-header">
                  <h4 class="my-0 font-weight-normal"> باقة الدايت</h4>
                </div>
                <div class="card-body sub-card-body">
                  <h1 class="card-title pricing-card-title">
                    60sr <small class="text-muted">/ شهر</small>
                  </h1>
                  <div className="container px-5">
                    <select
                      className="form-select form-select-lg"
                      name=""
                      id=""
                    >
                      <option value="">12 شهر</option>
                    </select>
                  </div>
                  <div className="container d-flex justify-content-center">
                    <ul class="list text-end mt-3 mb-4">
                      <li>جدول تغذية</li>
                      <li>تواصل مع المدرب</li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-outline-primary"
                  >
                    اشترك
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTrainer;
