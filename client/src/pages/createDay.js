import React from "react";
import AnimatedPage from "../animations/AnimatedPage";
import { isMobile, isBrowser } from "react-device-detect";
import { Link } from "react-router-dom";
import PlusButton from "../partials/plusButton";

function CreateDay({ setPrev }) {
  setPrev("/plans");
  return (
    <AnimatedPage>
      <div class="container p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5  ">
        <div className="row g-4">
          {isBrowser && (
            <div className="col-12 mb-0">
              <button type="button" class="btn text-primary fw-bold p-0">
                خطة جديدة <i class="bi bi-plus-square"></i>
              </button>
            </div>
          )}

          <div className="col-12">
            <div className=" d-flex justify-content-between   bg-body-secondary rounded p-2 px-3 user-row">
              <div className="d-flex gap-3 align-items-center">
                <h6 className="m-0">1</h6>
                <div className="align-content-center">
                  <h6 className="m-0 fw-bold">الاحد</h6>
                  <h6 className="m-0 text-secondary fw-light"></h6>
                </div>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <i class="bi bi-chevron-left fs-5"></i>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className=" d-flex justify-content-between   bg-body-secondary rounded p-2 px-3 user-row">
              <div className="d-flex gap-3 align-items-center">
                <h6 className="m-0">2</h6>
                <div className="align-content-center">
                  <h6 className="m-0 fw-bold">الاثنين</h6>
                  <h6 className="m-0 text-secondary fw-light"></h6>
                </div>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <i class="bi bi-chevron-left fs-5"></i>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className=" d-flex justify-content-between   bg-body-secondary rounded p-2 px-3 user-row">
              <div className="d-flex gap-3 align-items-center">
                <h6 className="m-0">3</h6>
                <div className="align-content-center">
                  <h6 className="m-0 fw-bold">الثلاثاء</h6>
                  <h6 className="m-0 text-secondary fw-light"></h6>
                </div>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <i class="bi bi-chevron-left fs-5"></i>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className=" d-flex justify-content-between   bg-body-secondary rounded p-2 px-3 user-row">
              <div className="d-flex gap-3 align-items-center">
                <h6 className="m-0">4</h6>
                <div className="align-content-center">
                  <h6 className="m-0 fw-bold">الاربعاء</h6>
                  <h6 className="m-0 text-secondary fw-light"></h6>
                </div>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <i class="bi bi-chevron-left fs-5"></i>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className=" d-flex justify-content-between   bg-body-secondary rounded p-2 px-3 user-row">
              <div className="d-flex gap-3 align-items-center">
                <h6 className="m-0">5</h6>
                <div className="align-content-center">
                  <h6 className="m-0 fw-bold">الخميس</h6>
                  <h6 className="m-0 text-secondary fw-light"></h6>
                </div>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <i class="bi bi-chevron-left fs-5"></i>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className=" d-flex justify-content-between   bg-body-secondary rounded p-2 px-3 user-row">
              <div className="d-flex gap-3 align-items-center">
                <h6 className="m-0">6</h6>
                <div className="align-content-center">
                  <h6 className="m-0 fw-bold">الجمعة</h6>
                  <h6 className="m-0 text-secondary fw-light"></h6>
                </div>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <i class="bi bi-chevron-left fs-5"></i>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className=" d-flex justify-content-between   bg-body-secondary rounded p-2 px-3 user-row">
              <div className="d-flex gap-3 align-items-center">
                <h6 className="m-0">7</h6>
                <div className="align-content-center">
                  <h6 className="m-0 fw-bold">السبت</h6>
                  <h6 className="m-0 text-secondary fw-light"></h6>
                </div>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <i class="bi bi-chevron-left fs-5"></i>
              </div>
            </div>
          </div>

          {isMobile && (
            <>
              <div className="fixed-bottom container p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5">
                <button
                  type="button"
                  class="btn btn-primary w-100 text-white  rounded-pill"
                >
                  حفظ الخطة
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </AnimatedPage>
  );
}

export default CreateDay;
