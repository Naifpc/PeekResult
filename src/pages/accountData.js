import React from "react";

function account() {
  return (
    <div class="container p-2 p-sm-2 p-md-3 p-lg-4 p-xl-5 ">
      <h4 className="mb-4">الحساب الشخصي</h4>

      <form class="row g-3">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            الاسم الاول
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            value="Mark"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">
          الاسم الاخير

          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault02"
            value="Otto"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefaultUsername" class="form-label">
            Email
          </label>
          <div class="input-group flex-row-reverse">
            
          <span class="input-group-text" id="inputGroupPrepend2"><i class="bi bi-envelope"></i></span>
            <input
              type="email"
              class="form-control"
              id="validationDefaultUsername"
              value="Otto@gmail.com"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
        <div class="col">
          <label for="validationDefault03" class="form-label">
            نوع الحساب
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault03"
            value="متدرب"
            disabled
          />
        </div>


        <div class="col-12 ">
          
          <button class="btn btn-secondary" type="submit">
             تحديث الحساب
          </button>
          <button class="btn link-danger me-1" type="submit">
            حذف الحساب
          </button>
        </div>
      </form>
    </div>
  );
}

export default account;
