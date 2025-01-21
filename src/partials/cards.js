import React from "react";

function trainer() {
  return (
    <div className="col-xxl-2 col-xl-3 col-md-3 col-lg-3 col-sm-4 col-6   mb-4">
      <div class=" card  shadow bg-body-secondary border-0  card-custom">
        <div class="card-custom-img"></div>

        <div class="card-body text-end ">
          <h3 class="card-title">محمد نايف</h3>
          <div className="d-flex mt-2  justify-content-between text-secondary ">
            <h6 class="card-subtitle align-content-center">
              {" "}
              <i class="bi bi-clock-history"></i> 5 سنوات
            </h6>
            <span class="badge text-bg-secondary">تضخيم</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function offer() {
  return (
    <div className="container p-0 shadow-lg d-flex  bg-body-secondary mb-3 rounded-start">
      <div className="bg-secondary rounded-end align-content-center fs-5 p-2">
        1
      </div>

      <div className=" align-content-center offer-image  ">
        <img
          class="w-100 h-100"
          src="https://i0.wp.com/www.almwatin.com/wp-content/uploads/2024/12/%D9%8A%D9%88%D9%85-%D8%A7%D9%84%D8%AA%D8%A3%D8%B3%D9%8A%D8%B3.jpg?fit=686%2C386&ssl=1"
        />
      </div>

      <div class="container-fluid p-2">
        <h6>عرض يوم التاسيس</h6>
        <h6 className="text-secondary">محتورى العرض</h6>
      </div>
      <div className="container-fluid d-flex justify-content-end p-2">
        <div className="bg-danger rounded align-content-center py-2 px-4 fs-6 fw-bold  ">
          50%
        </div>
      </div>
    </div>
  );
}

export { trainer, offer };
