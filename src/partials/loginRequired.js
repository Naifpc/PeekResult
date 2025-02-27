import React from "react";
import { Link } from "react-router-dom";

import Modal from "react-bootstrap/Modal";

function LoginRequired(props) {
 
  return (
    <Modal
      {...props}
      backdrop="static"
      keyboard={false}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header  className="border-0">
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>

      <Modal.Body className="border-0 p-5 text-center">
      <div className="row g-2">
      <i class="bi bi-person fs-1"></i>
        <h4 className="fw-bold">يجب تسجيل الدخول</h4>
        <h6 className="text-secondary">
          عليك تسجيل الدخول لعرض هذه الصفحة
        </h6>
        <button className="btn w-50 btn-primary mx-auto" type="submit">
                  <div>تسجيل دخول</div>
                </button>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <p className="fs-6 w-100 text-center">
          ليس لديك حساب؟
          <button
            type="button"
            className="btn btn-link link-offset-2  link-offset-3-hover
                                link-underline link-underline-opacity-0 
                                link-underline-opacity-75-hover pt-0"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            تسجيل حساب
          </button>
        </p>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginRequired;
