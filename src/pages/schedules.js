import React from "react";
import { CalendarDaysExample } from "../partials/calender.js";

function schedules() {
  return (
    <div class="container p-1 p-sm-2 p-md-3 p-lg-4 p-xl-5 ">
      <div class="accordion shadow accordion-flush  " id="accordionFlushExample">
        <div class="accordion-item ">
          <h2 class="accordion-header ">
            <button
              class="accordion-button collapsed  "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <div className="text-end">
                <h3>جدول التمارين</h3>
                <h5 className="text-secondary">اطلع على جدول تمارينك اليوم </h5>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
             <div className="text-end">
                <h3>جدول الاكل</h3>
                <h5 className="text-secondary">اطلع على جدول الاكل اليوم </h5>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
               <div className="text-end">
                <h3>التقويم </h3>
                <h5 className="text-secondary">اطلع على جدول تمارينك الشهري </h5>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse show"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <CalendarDaysExample/>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default schedules;
