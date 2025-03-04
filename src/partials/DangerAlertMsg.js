import React from "react";


function DangerAlert({ msg }) {
  return (
    <div
      class="alert alert-danger d-flex align-items-center gap-1 mt-3"
      role="alert"
    >
      <i class="bi bi-exclamation-triangle-fill"></i>
      <div>{msg}</div>
    </div>
  );
}

export default DangerAlert;
