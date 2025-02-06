import React from "react";
import Calender from "../partials/calender.js";

function schedules() {
  return (
    <div class="container p-1 p-sm-2 p-md-3 p-lg-4 p-xl-5 ">
      <h4 className="mb-4">الجداول</h4>
      <div class="accordion shadow   " id="accordionFlushExample">
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
                <h4>جدول التمارين</h4>
                <h6 className="text-secondary">اطلع على جدول تمارينك اليوم </h6>
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
              class="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
             <div className="text-end">
                <h4>جدول الاكل</h4>
                <h6 className="text-secondary">اطلع على جدول الاكل اليوم </h6>
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
                <h4>الخطة </h4>
                <h6 className="text-secondary">اطلع على خطة هذا الشهر   </h6>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse show"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <Calender/>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default schedules;
