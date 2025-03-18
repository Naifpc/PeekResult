import React from "react";

export default function PlusButton({ onClick }) {
  return (
    <div className="container d-flex fixed-bottom  py-5 p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5">
      <button
        type="button"
        className="btn d-flex rounded-circle bg-primary mb-5 p-1 align-items-center justify-content-center"
        style={{ width: 50, height: 50 }}
        onClick={onclick}
      >
        <i className="bi bi-plus fs-1 text-white"></i>
      </button>
    </div>
  );
}
