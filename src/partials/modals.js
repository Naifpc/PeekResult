import React from "react";
import { Link } from "react-router-dom";

function login() {
  return (
    <div
      class="modal  fade"
      id="loginModal"
      tabindex="-1"
      aria-labelledby="login"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0  p-5">
        <form>
          <div class="modal-headerborder-0">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h4 className="fw-bold">تسجيل الدخول</h4>
            <h6 className="text-secondary">
              عند تسجيل دخولك فانت فانت توافق على 
              
              <Link className="link-offset-2  link-offset-3-hover
                                link-underline link-underline-opacity-0 
                                link-underline-opacity-75-hover"> سياسة الاستخدام </Link> 
                                
                                  و اطلعت على
              
              
              <Link className="link-offset-2  link-offset-3-hover
                                link-underline link-underline-opacity-0 
                                link-underline-opacity-75-hover"> سياسة الخصوصية </Link>
            </h6 >
              <div className="my-4">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  الايميل
                </label>
                <input
                  type="email"
                  class="form-control bg-body-secondary border-0 shadow"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="example@email.com"
                />

              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  كلمة السر
                </label>
                <input
                  type="password"
                  class="form-control  bg-body-secondary border-0 shadow"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mt-4 px-5 d-flex justify-content-center">
              <button type="button" class="btn btn-secondary w-75   ">
              تسجيل الدخول
            </button>

              </div>
              

              
              </div>
              
             
             
            
          </div>
          <div class="modal-footer justify-content-center  ">
          <p className="fs-6 ">ليس لديك حساب؟  
                 <Link className="link-offset-2  link-offset-3-hover
                                link-underline link-underline-opacity-0 
                                link-underline-opacity-75-hover"
                 > تسجيل حساب  </Link></p>
            
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
