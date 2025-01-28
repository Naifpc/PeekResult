import React from "react";

function footer() {
  return (
    <footer class="text-center text-lg-end text-white bg-body-secondary pt-3">
       <section className="mb-3">
        <div className="container d-flex gap-3 align-content-center justify-content-center border-bottom  pb-3 ">
        <a>
          <i class="bi bi-instagram"></i>
        </a>
        <a>
        <i class="bi bi-twitter-x"></i>
        </a>

        <a>
        <i class="bi bi-tiktok"></i>
        </a>
        
        
        

        </div>
      </section>
      <section class="">
        <div class="container text-center text-md-end mt-1">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

              <h6 class=" fw-bold">بيك ريسلت</h6>
              <p>
                المنصة الافض للوصل بين المدرب والمتدرب, جميع احتياجات المتدرب في مكان واحد
              </p>


            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">الشركة</h6>

              <p>
                <a href="#!" class="text-white">
                  سياسة الاستخدام
                </a>
              </p>
              
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">روابط مهمة</h6>

              <p>
                <a href="#!" class="text-white">
                  من نحن
                </a>
              </p>
             
             
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <a class="" href="/" >
            <img
              src={`${process.env.PUBLIC_URL}/PR-Logo-Light.svg`}
              alt="PEEK RESULT"
              width="150"
            />
          </a>
        
            </div>

          </div>
        </div>
      </section>
      <section className="footer-bar  mt-3">
        <div className="d-flex align-content-center justify-content-center bg-body-tertiary p-0 ">
            <p>
            رقم السجل التجاري: 2055157957
            </p>
        </div>
      </section>
    </footer>
  );
}

export default footer;
