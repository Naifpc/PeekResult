import React from "react";
import Accordion from "react-bootstrap/Accordion";
import HumanBody from "../partials/humanBody.js";
function TriaingItem({ num }) {
  return (
    <Accordion.Item eventKey={`${num}`}>
      <Accordion.Header>
        <div className="text-end">
          <h5> اسم التمرين</h5>
          <div className="d-flex gap-1 text-secondary">
            <h6 className="fw-light">5</h6>
            <h6 className="fw-light"> جلسات فعلية</h6>
          </div>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <div className="row g-2">
          <div className="col-12 col-lg-6 border p-5 text-center rounded">
            <h1>video</h1>
          </div>
          <div className="col-12 col-lg-6 text-center">
            <HumanBody />
          </div>
          
          <div className="col-12">
            <div className="row rounded bg-body-secondary p-2 text-center">
              <div className="col-6">
                <h6 className="text-secondary">الوزن</h6>
                <input type="number" className="form-control border-0 text-center" defaultValue={15} />
              </div>

              <div className="col-6">
                <h6 className="text-secondary">العدات</h6>
                <h6 className="m-0">
                  <input type="number" className="form-control border-0 text-center" defaultValue={8} />
                </h6>
              </div>

              <div className="col-12 mt-3">
            <div
              class=" progress bg-body"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-success" style={{ width: "25%" }}>
                {" "}
                شدة منخفضة
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <button className="btn btn-primary w-50"><i class="bi bi-save2"></i> حفظ</button>
          </div>
            </div>
          </div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default TriaingItem;
