import React from "react";
import AnimatedPage from "../animations/AnimatedPage";
import { isMobile, isBrowser } from "react-device-detect";
import { Link } from "react-router-dom";
import PlusButton from "../partials/plusButton";

function Plans() {
  return (
    <AnimatedPage>
      <div class="container p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5  ">
        <div className="row g-4">
          <h4>الخطط</h4>
          {isBrowser && (
            <div className="col-12 mb-0">
              <button type="button" class="btn text-primary fw-bold p-0">
                خطة جديدة <i class="bi bi-plus-square"></i>
              </button>
            </div>
          )}
          <Link
            to="/createPlan"
            className="text-body link-underline link-underline-opacity-0"
          >
            <div className="col-12">
              <div className=" d-flex justify-content-between   bg-body-secondary rounded p-2 px-3 user-row">
                <div className="d-flex gap-3 align-items-center">
                  <h6 className="m-0">1</h6>
                  <div className="align-content-center">
                    <h6 className="m-0 fw-bold">سحب دفع</h6>
                    <h6 className="m-0 text-secondary fw-light">
                      اخر تحديث 23/03/2024
                    </h6>
                  </div>
                </div>
                <div className="d-flex gap-1 align-items-center">
                  <i class="bi bi-trash text-danger fs-5"></i>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {isMobile && <PlusButton />}
      </div>
    </AnimatedPage>
  );
}

export default Plans;
