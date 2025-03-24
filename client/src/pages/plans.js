import React from "react";
import AnimatedPage from "../animations/AnimatedPage";
import { isMobile, isBrowser } from "react-device-detect";
import { Link } from "react-router-dom";
import PlusButton from "../partials/plusButton";
import { useState, useEffect } from "react";
import axios from "axios";

function Plans() {
  const [plans, setPlans] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/plans/myPlans", {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),
        },
      });
      if (response.data.error) {
        setPlans(false);
      } else {
        setPlans(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const DeletePlan = async (key) => {
    try {
      const response = await axios.post(
        "http://localhost:9000/plans/deletePlan",
        { key },
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      );
      if (response.data.error) {
      } else {
        fetchData();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <AnimatedPage>
      <div class="container p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5  ">
        <div className="row g-4">
          <h4>الخطط</h4>
          {isBrowser && (
            <div className="col-12 mb-0">
              <Link to="/createPlan">
                <button class="btn text-primary fw-bold p-0">
                  خطة جديدة <i class="bi bi-plus-square"></i>
                </button>
              </Link>
            </div>
          )}

          {plans.map((plan, key) => {
            return (
              <div className="col-12">
                <div className=" d-flex justify-content-between   bg-body-secondary rounded p-2 px-3 user-row">
                  <div className="d-flex gap-3 align-items-center">
                    <h6 className="m-0">{key + 1}</h6>
                    <div className="align-content-center">
                      <h6 className="m-0 fw-bold">{plan.name}</h6>
                      <p className="m-0 text-secondary fw-light fs-6">
                        اخر تحديث {new Date(plan.updatedAt).toDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-1 align-items-center">
                    <button className="btn" onClick={() => DeletePlan(plan.id)}>
                      <i class="bi bi-trash text-danger fs-5"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {isMobile && (
          <Link to="/createPlan">
            <PlusButton />
          </Link>
        )}
      </div>
    </AnimatedPage>
  );
}

export default Plans;
