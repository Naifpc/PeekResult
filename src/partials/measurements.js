import React from "react";

function Measurements({ userData }) {
  function calculateAge(birthDate) {
    //calculate age from birthdate
    let birthDateObj = new Date(birthDate);
    let today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    let monthDifference = today.getMonth() - birthDateObj.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }

    return age;
  }
  return (
    <div className="d-flex justify-content-evenly">
      <div className="text-center">
        <div className="d-flex gap-1 align-items-baseline">
          <h1 className="fw-bold m-0">{userData.weight}</h1>
          <h6 className="fw-light text-secondary m-0">كجم</h6>
        </div>
        <h6 className="fw-light ">الوزن</h6>
      </div>

      <hr className="border"></hr>

      <div className="text-center">
        <div className="d-flex gap-1 align-items-baseline">
          <h1 className="fw-bold m-0">{userData.height}</h1>
          <h6 className="fw-light text-secondary m-0">كجم</h6>
        </div>
        <h6 className="fw-light ">الطول</h6>
      </div>

      <hr className="border"></hr>

      <div className="text-center">
        <div className="d-flex gap-1 align-items-baseline">
          <h1 className="fw-bold m-0">{calculateAge(userData.birthDate)}</h1>
          <h6 className="fw-light text-secondary m-0">سنة</h6>
        </div>
        <h6 className="fw-light">العمر</h6>
      </div>
    </div>
  );
}

export default Measurements;
