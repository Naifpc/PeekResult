import React from "react";
import Accordion from "react-bootstrap/Accordion";
import AnimatedPage from "../animations/AnimatedPage.js";
import { useState } from "react";
import TriaingItem from "../partials/trainingItem.js";

function Schedules() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    today.toISOString().substring(0, 10)
  );

  const datePrev = () => {
    let value = new Date(currentDate);
    value.setDate(value.getDate() - 1);
    setCurrentDate(value.toISOString().substring(0, 10));
  };

  const dateNext = () => {
    let value = new Date(currentDate);
    value.setDate(value.getDate() + 1);
    setCurrentDate(value.toISOString().substring(0, 10));
  };

  return (
    <AnimatedPage>
      <div class="container p-3  p-sm-3 p-md-3 p-lg-4 p-xl-5 ">
        <h4 className="mb-4">الجداول</h4>
        <div className="row mb-5 g-3">
          <div className="col-12 col-lg-6">
            <div className="d-flex justify-content-between">
              <button
                type="button"
                onClick={() => {
                  dateNext();
                }}
                className="btn"
              >
                <i class="bi bi-caret-right-fill"></i>
              </button>
              <input
                type="date"
                value={currentDate}
                className="form-control text-center bg-body-secondary border-0  rounded"
              />
              <button
                type="button"
                onClick={() => {
                  datePrev();
                }}
                className="btn"
              >
                <i class="bi bi-caret-left-fill"></i>
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <Accordion flush alwaysOpen>
              <TriaingItem num={1} />
              <TriaingItem num={2} />
              <TriaingItem num={3} />
              <TriaingItem num={4} />
            </Accordion>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Schedules;
