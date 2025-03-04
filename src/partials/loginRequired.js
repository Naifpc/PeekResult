import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./login"
import { useEffect, useState } from "react";

import Modal from "react-bootstrap/Modal";

function LoginRequired(props) {
  let navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  
  return (
    <>
      <Modal
        {...props}
        backdrop="static"
        keyboard={false}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="border-0">
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>

        <Modal.Body className="border-0 p-5 text-center">
          <div className="row g-2">
            <div className="col-12">
            <i class="bi bi-person fs-1"></i>
            <h4 className="fw-bold">يجب تسجيل الدخول</h4>
            </div>
            <div className="col-12">
            <h6 className="text-secondary">
              عليك تسجيل الدخول لعرض هذه الصفحة
            </h6>
            </div>
            <div className="col-12">
              <button className="btn w-75 btn-primary mx-auto" type="button"   onClick={() => setModalShow(true)}>
                <div>تسجيل الدخول</div>
              </button>
            </div>
            <div className="col-12">
              <button
                className="btn w-75 btn-outline-secondary mx-auto"
                type="button"
                onClick={() => {
                  navigate(`/`);
                }}
              >
                <div>رجوع</div>
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Login
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
    </>
  );
}

export default LoginRequired;
