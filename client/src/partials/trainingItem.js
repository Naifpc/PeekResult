import React from "react";
import Accordion from "react-bootstrap/Accordion";
import HumanBody from "./humanBody.js";
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
          <div className="col-6 col-lg-6 border p-5 text-center rounded">
            <h1>video</h1>
          </div>
          <div className="col-6 col-lg-6 text-center">
            <HumanBody />
          </div>

          <div className="col-12">
            <div className="row rounded-top bg-body-secondary p-2 text-center">
              <div className="col-4">
                <h6 className="text-secondary">الوزن</h6>
                <input
                  type="number"
                  className="form-control bg-transparent text-center"
                  defaultValue={15}
                />
              </div>

              <div className="col-4">
                <h6 className="text-secondary">العدات</h6>
                <h6 className="m-0">
                  <input
                    type="number"
                    className="form-control bg-transparent text-center"
                    defaultValue={8}
                  />
                </h6>
              </div>

              <div className="col-4 ">
                <h6 className="text-secondary">حفظ</h6>
                <button className="btn bg-primary w-100 ">
                  <i class="bi bi-save2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row border-top bg-body-secondary rounded-bottom">
          <div className="col-12  text-center border-bottom text-secondary">
            شدة عالية
          </div>
          <div className="col-12 text-center text-secondary">5 جلسات فعلية</div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default TriaingItem;
