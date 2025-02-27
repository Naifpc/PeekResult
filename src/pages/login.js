import React from "react";

function Login(props) {
  return (
    <div class="container p-2 p-sm-3 p-md-3 p-lg-4 p-xl-5 ">
    
      <div className="container mb-5 bg-body-secondary rounded shadow p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5 ">
      <div className="container text-center">
      <img
              src={`${process.env.PUBLIC_URL}/PR-Logo-Light.png`}
              alt="PEEK RESULT"
              width="180"
            />
      </div>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              الايميل
            </label>
            <input
              type="email"
              class="form-control border-0 shadow "
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
              class="form-control border-0 shadow "
              id="exampleInputPassword1"

            />
          </div>

          <button type="submit" class="btn btn-primary">
            سجل الدخول
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
