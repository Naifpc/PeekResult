import React from "react";

function footer() {
  return (
    <footer class="text-center text-lg-end  bg-body border-top  pt-3 flex-column">
      <div className="footer-wrap">
        <section class="">
          <div class="container text-center text-md-end mt-1">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class=" fw-bold">بيك ريسلت</h6>
                <p>
                  المنصة الافض للوصل بين المدرب والمتدرب, جميع احتياجات المتدرب
                  في مكان واحد
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">الشركة</h6>

                <p>
                  <a
                    href="#!"
                    class="text-white link-offset-2 link-offset-3-hover link-underline link-underline-primary link-underline-opacity-0 link-underline-opacity-75-hover"
                  >
                    سياسة الاستخدام
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">روابط مهمة</h6>

                <p>
                  <a
                    href="#!"
                    class="text-white link-offset-2 link-offset-3-hover link-underline link-underline-primary link-underline-opacity-0 link-underline-opacity-75-hover"
                  >
                    من نحن
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <a class="" href="/">
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
        <section className="footer-bar border-top  container mt-3 px-5 pt-3">
          <div className=" d-flex align-content-evenly   ">
            <div className="w-50">
              <p>رقم السجل التجاري: 2055157957</p>
            </div>

            <div className="container d-flex gap-3 align-content-center justify-content-end  w-50 ">
              <a>
                <i class="bi bi-instagram text-primary"></i>
              </a>
              <a>
                <i class="bi bi-twitter-x text-primary"></i>
              </a>

              <a>
                <i class="bi bi-tiktok text-primary"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default footer;
