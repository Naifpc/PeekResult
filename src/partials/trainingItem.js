import React from "react";
import { Dropdown } from "react-bootstrap";

function triaingItem() {
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>
        <div className="text-end">
          <h5> اسم التمرين</h5>
          <div className="d-flex gap-1 text-secondary">
            <h6 className="fw-light">10</h6>
            <h6 className="fw-light">دقائق</h6>
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
          <div className="col-12 rounded bg-body-secondary d-flex justify-content-evenly p-3">
            <div className="d-flex justify-content-center gap-1">
              <h6 className="m-0">3</h6>
              <h6 className="m-0">جلسات</h6>
            </div>
            <div className="border"></div>
            <div className="d-flex justify-content-center gap-1">
              <h6 className="m-0">10</h6>
              <h6 className="m-0">عدات</h6>
            </div>
            <div className="border"></div>
            <div className="d-flex justify-content-center gap-1">
              <h6 className="m-0">شدة</h6>
              <h6 className="m-0">عالية</h6>
            </div>
          </div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default triaingItem;
