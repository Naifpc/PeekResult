import React from "react";
import Modal from "react-bootstrap/Modal";
import UserIcon from "./userIcon";
import { isMobile } from "react-device-detect";

function AccountModal(props) {
  return (
    <>
      <Modal
        {...props}
        className=""
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="border-0 bg-body-secondary">
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>

        <Modal.Body className="border-0 p-2 p-sm-2 p-md-2 p-lg-3 p-xl-4 bg-body-secondary ">
          <div className="container-fluid ">
            <h6 className=" text-center mb-4 fw-bold">
              {props.userData.email}
            </h6>
            <div className="row g-1 rounded-4 bg-body p-1 py-4">
              <div className="border-bottom">
                <div className="d-flex justify-content-center mb-1">
                  <UserIcon username={props.userData.username} size={80} />
                </div>
                <h6 className="fw-bold text-center mb-4 ">
                  هلا,{props.userData.username}
                </h6>
              </div>
              <button className="d-flex align-content-center gap-4 btn ">
                <i class="bi bi-person-circle"></i>
                <div className="">الحساب</div>
              </button>
              <button className="d-flex align-content-center gap-4 btn ">
                <i class="bi bi-person-vcard"></i>
                <div className="">اشتراكاتي</div>
              </button>
              <button className="d-flex align-content-center gap-4 btn ">
                <i class="bi bi-gear-fill"></i>
                <div className="">الاعدادات</div>
              </button>
            </div>
            <button
              className="d-flex align-content-center justify-content-center gap-2 btn text-danger w-100"
              onClick={props.logout}
            >
              <i class="bi bi-box-arrow-right"></i>
              <div className="">تسجيل الخروج</div>
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AccountModal;
