import React from "react";

function home() {
  return (
    <div class="container p-5 ">
      <div class="input-group rounded  ">
        <input
          type="search"
          class="form-control rounded bg-body-secondary text-dark search-bar"
          placeholder="البحث"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span class="input-group-text border-0" id="search-addon">
          <i class="bi bi-search "></i>
        </span>
      </div>

      <div class="m-5"></div>

      <div class="d-flex  gap-4">
        
        <p class="align-content-center pb-2 fs-4 border-start ps-4">المجالات</p>
        
        <div class="d-flex overflow-x-auto nowrap justify-content-center gap-4  pb-4">

        <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off"/>
        <label class="btn btn-secondary filter" for="btn-check">Single toggle</label>

        <input type="checkbox" class="btn-check" id="btn-check1" autocomplete="off"/>
        <label class="btn btn-secondary filter" for="btn-check1">Single toggle</label>

        <input type="checkbox" class="btn-check" id="btn-check2" autocomplete="off"/>
        <label class="btn btn-secondary filter" for="btn-check2">Single toggle</label>

        <input type="checkbox" class="btn-check" id="btn-check3" autocomplete="off"/>
        <label class="btn btn-secondary filter" for="btn-check3">Single toggle</label>

        <input type="checkbox" class="btn-check" id="btn-check4" autocomplete="off"/>
        <label class="btn btn-secondary filter" for="btn-check4">Single toggle</label>

        <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off"/>
        <label class="btn btn-secondary filter" for="btn-check">Single toggle</label>

        <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off"/>
        <label class="btn btn-secondary filter" for="btn-check">Single toggle</label>
        
        <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off"/>
        <label class="btn btn-secondary filter" for="btn-check">Single toggle</label>

        
        <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off"/>
        <label class="btn btn-secondary filter" for="btn-check">Single toggle</label>

        

      

      </div>

      </div>

      <div class="m-5"></div>

      <div class="container">
        <div class="row  ">
          
          <div class="col-md-4 mb-3  ">
            <div class="card card-custom shadow  border-0">
              <div class="card-custom-img"></div>

              <div class="card-body text-end">
                <h4 class="card-title">ابو نايف</h4>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">الاسم: محمد نايف فلمبان</li>
                  <li class="list-group-item">الخبرة: 5 سنين</li>
                  <li class="list-group-item">المجال: زقمبي</li>
                </ul>
              </div>
              <div class="card-footer d-flex ">
                <a href="#" class="btn btn-outline-primary">
                  اشترك
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card card-custom shadow  border-0">
              <div class="card-custom-img"></div>

              <div class="card-body text-end">
                <h4 class="card-title">ابو نايف</h4>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">الاسم: محمد نايف فلمبان</li>
                  <li class="list-group-item">الخبرة: 5 سنين</li>
                  <li class="list-group-item">المجال: زقمبي</li>
                </ul>
              </div>
              <div class="card-footer d-flex ">
                <a href="#" class="btn btn-outline-primary">
                  اشترك
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card card-custom shadow  border-0">
              <div class="card-custom-img"></div>

              <div class="card-body text-end ">
                <h4 class="card-title">ابو نايف</h4>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">الاسم: محمد نايف فلمبان</li>
                  <li class="list-group-item">الخبرة: 5 سنين</li>
                  <li class="list-group-item">المجال: زقمبي</li>
                </ul>
              </div>
              <div class="card-footer d-flex ">
                <a href="#" class="btn btn-outline-primary">
                  اشترك
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card card-custom shadow  border-0">
              <div class="card-custom-img"></div>

              <div class="card-body text-end">
                <h4 class="card-title">ابو نايف</h4>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">الاسم: محمد نايف فلمبان</li>
                  <li class="list-group-item">الخبرة: 5 سنين</li>
                  <li class="list-group-item">المجال: زقمبي</li>
                </ul>
              </div>
              <div class="card-footer d-flex ">
                <a href="#" class="btn btn-outline-primary">
                  اشترك
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
