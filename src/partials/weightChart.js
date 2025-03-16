import React from "react";
import DoughnutChart from "../partials/DoughnutChart";

function WightChart({ userData }) {
  return (
    <div className="row bg-body-secondary rounded align-items-center p-3">
      <h4 className="mb-4 text-center">توزيع الوزن</h4>
      <div className="col-12 col-lg-6 my-3 ">
        <DoughnutChart
          weight={userData.weight}
          fatWeight={userData.fatWeight}
          muscleWeight={userData.muscleWeight}
        />
      </div>
      <div className="col-12 col-lg-6 d-flex justify-content-evenly">
        <div className="">
          <div className="d-flex flex-nowrap align-items-center gap-1 fs-6">
            <span class="p-1 rounded-circle bg-primary"></span>
            <p className=" mb-1 m-0"> وزن الجسم </p>
          </div>
          <div className="d-flex gap-1 align-items-baseline">
            <h2 className="fw-bold m-0">{userData.weight}</h2>
            <h6 className="text-secondary">/{userData.weight} كجم</h6>
          </div>
        </div>

        <hr className="border"></hr>

        <div className="">
          <div className="d-flex flex-nowrap align-items-center gap-1 fs-6 ">
            <span
              class="p-1 rounded-circle"
              style={{ backgroundColor: "rgb(54, 162, 235)" }}
            ></span>
            <p className=" mb-1 m-0  text-nowrap">وزن العضلات</p>
          </div>

          <div className="d-flex gap-1 align-items-baseline">
            <h2 className="fw-bold m-0">{userData.muscleWeight}</h2>
            <h6 className="text-secondary">/{userData.weight} كجم</h6>
          </div>
        </div>

        <hr className="border"></hr>

        <div className="">
          <div className="d-flex flex-nowrap align-items-center gap-1 fs-6">
            <span
              class="p-1 rounded-circle"
              style={{ backgroundColor: "rgb(255, 206, 86)" }}
            ></span>
            <p className=" mb-1 m-0"> وزن الدهون </p>
          </div>
          <div className="d-flex gap-1 align-items-baseline">
            <h2 className="fw-bold m-0">{userData.fatWeight}</h2>
            <h6 className="text-secondary">/{userData.weight} كجم</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WightChart;
