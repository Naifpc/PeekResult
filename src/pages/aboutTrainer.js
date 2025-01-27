import React from "react";
import { Link } from "react-router-dom";

function aboutTrainer() {
  return (
    <>
      <div className="header-image rounded"></div>
      <div class="container p-2 p-sm-2 p-md-3 p-lg-4 p-xl-5 ">
        <div className="container">
          <div className="row ">
            <div className="col">
              <h1>محمد نايف</h1>
            </div>
            <div className="col d-flex gap-2 justify-content-end text-primary align-items-center">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <span class="badge text-bg-secondary">كمال اجسام</span>
            </div>
          </div>
          <div className="row my-4">
            <div className="col ">
              <h4 className="fw-bold">الوصف</h4>
              <p className="fs-6">
                محمد نايف انا مدرب متخصص في تدريب كمال اجسام، يتمتع بخبرة واسعة
                في تدريب الأفراد من الأساسيات إلى المستوى المحترف. يقدم محمد
                نايف دروساً متكاملة تشمل تقنيات الدفاع والهجوم، بالإضافة إلى
                تدريبات لتحسين اللياقة البدنية والتحكم في الأداء الفني. يشتهر
                بأسلوبه الفعال والمبدع في تحفيز الطلاب وتطوير مهاراتهم.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div class="card peek-sub   text-center mb-4 border-primary">
                <div class="card-header  border-primary bg-primary">
                  <h4 class="my-0 font-weight-normal">باقة الPeek</h4>
                </div>
                <div class="card-body">
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
              <div class="card text-center mb-4 ">
                <div class="card-header ">
                  <h4 class="my-0 font-weight-normal">باقة التدريب</h4>
                </div>
                <div class="card-body">
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
              <div class="card  text-center mb-4 ">
                <div class="card-header">
                  <h4 class="my-0 font-weight-normal"> باقة الدايت</h4>
                </div>
                <div class="card-body">
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

export default aboutTrainer;
