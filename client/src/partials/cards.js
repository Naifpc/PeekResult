import React from "react";
import { useNavigate } from "react-router-dom";

function Trainer({ name, experience, field, image, id, avatar, key }) {
  // Construct the image URL
  const imageUrl = `url(http://localhost:9000/${avatar})`;

  let navigate = useNavigate();

  return (
    <div
      className="col-xxl-2 col-xl-3 col-md-3 col-lg-3 col-sm-4 col-6 mb-4"
      key={key}
    >
      <div
        className="card  bg-body-secondary border-0 card-custom"
        onClick={() => {
          navigate(`/aboutTrainer/${id}`);
        }}
      >
        <div
          className="card-custom-img"
          style={{ backgroundImage: imageUrl }}
        ></div>

        <div className="card-body card-custom-body text-end">
          <h3 className="card-title">{name}</h3>
          <div className="d-flex mt-2 justify-content-between text-secondary">
            <h6 className="card-subtitle align-content-center">
              <i className="bi bi-clock-history"></i> {experience} سنوات
            </h6>
            <span className="badge text-bg-secondary">{field}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function offer() {
  return (
    <div className="container offer-card p-0 shadow-lg d-flex  bg-body-secondary mb-3 rounded-start">
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

export { Trainer, offer };
