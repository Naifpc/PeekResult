import React from "react";
import Calender from "../partials/calender.js";
import Accordion from "react-bootstrap/Accordion";
import HumanBody from "../partials/humanBody.js";

function schedules() {
  return (
    <div class="container p-3  p-sm-3 p-md-3 p-lg-4 p-xl-5 ">
      <h4 className="mb-4">الجداول</h4>
      <div className="row mb-5 g-3">

        <div className="col-12 col-lg-6">
          <Calender />
        </div>
        <div className="col-12 col-lg-6">
          <Accordion flush >
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="text-end">
                  <h5> اسم التمرين</h5>
                  <div className="d-flex gap-1 text-secondary">
                  <i class="bi bi-stopwatch"></i>
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
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <div className="text-end">
                  <h5> اسم التمرين</h5>
                  <div className="d-flex gap-1 text-secondary">
                  <i class="bi bi-stopwatch"></i>
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
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <div className="text-end">
                  <h5> اسم التمرين</h5>
                  <div className="d-flex gap-1 text-secondary">
                  <i class="bi bi-stopwatch"></i>
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
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <div className="text-end">
                  <h5> اسم التمرين</h5>
                  <div className="d-flex gap-1 text-secondary">
                  <i class="bi bi-stopwatch"></i>
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
       
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default schedules;
