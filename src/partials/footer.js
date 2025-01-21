import React from "react";

function footer() {
  return (
    <footer class="text-center text-lg-start text-white bg-body-secondary pt-3">
      <section class="">
        <div class="container text-center text-md-start mt-1">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">Peek Result</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", height: "2px", color: "#fc732f" }}
              />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">Products</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", height: "2px", color: "#fc732f" }}
              />
              <p>
                <a href="#!" class="text-white">
                  MDBootstrap
                </a>
              </p>
              <p>
                <a href="#!" class="text-white">
                  MDWordPress
                </a>
              </p>
              <p>
                <a href="#!" class="text-white">
                  BrandFlow
                </a>
              </p>
              <p>
                <a href="#!" class="text-white">
                  Bootstrap Angular
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">Useful links</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", height: "2px", color: "#fc732f" }}
              />
              <p>
                <a href="#!" class="text-white">
                  Your Account
                </a>
              </p>
              <p>
                <a href="#!" class="text-white">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a href="#!" class="text-white">
                  Shipping Rates
                </a>
              </p>
              <p>
                <a href="#!" class="text-white">
                  Help
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold">Contact</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", height: "2px", color: "#fc732f" }}
              />
              <p>
                <i class="fas fa-home mr-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i class="fas fa-envelope mr-3"></i> info@example.com
              </p>
              <p>
                <i class="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i class="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default footer;
