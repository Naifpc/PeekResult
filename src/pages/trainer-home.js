import React, { useMemo } from "react";
import AnimatedPage from "../animations/AnimatedPage";
import Search from "../partials/search";
import Filter from "../partials/filter";
import UserIcon from "../partials/userIcon";
function TrainerHome() {
  const fields = [
    { fieldName: "فعال", id: "1" },
    { fieldName: "انتظار", id: "2" },
    { fieldName: "ملغي", id: "1" },
  ];
  return (
    <AnimatedPage>
      <div class="container p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5  ">
        <div className="row g-4">
          <h4>العملاء</h4>
          <Search placeholder={"اسم العميل"} />
          <Filter listOfFields={fields} />
          <div className="col-12">
            <div className=" d-flex justify-content-between gap-3 bg-body-secondary rounded p-2 user-row">
              <div className="d-flex gap-2">
                <UserIcon username={"Naif"} size={20} />
                <div className="align-content-center">
                  <h6 className="m-0 fw-bold">نايف العوام</h6>
                  <h6 className="m-0 text-secondary fw-light">23 سنة</h6>
                </div>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <h6 className="rounded-pill m-0  text-success-emphasis p-2">
                  فعال
                </h6>
                <i class="bi bi-three-dots-vertical"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default TrainerHome;
