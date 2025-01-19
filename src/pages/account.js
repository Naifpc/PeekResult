import React from "react";
import { CalendarDaysExample } from "../partials/calender.js";

function account() {
  return (
    <div class="container p-5 ">
      <div className="container d-flex justify-content-center gap-5">
        <div className="p-4 bg-body-secondary rounded text-center w-50">
          <h1 className="text-primary">
            <i class="bi bi-person-fill "></i>
          </h1>
          <h5>الملف الشخصي</h5>
        </div>
        <div className="p-4 bg-body-secondary rounded text-center w-50">
          <h1 className="text-primary">
          <i class="bi bi-person-lines-fill"></i>
          </h1>
          <h5>الاشتراكات </h5>
        </div>
      </div>
    </div>
  );
}

export default account;
