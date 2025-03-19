import React from "react";
import AnimatedPage from "../animations/AnimatedPage";
import { isMobile, isBrowser } from "react-device-detect";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";

function CreatePlan({ setPrev }) {
  setPrev("/plans");

  const [daysList, setDaysList] = useState([
    { name: "اليوم الاول", exercisesList: [{ exercise: "" }] },
    { name: "اليوم الثاني", exercisesList: [{ exercise: "" }] },
    { name: "اليوم الثالث", exercisesList: [{ exercise: "" }] },
    { name: "اليوم الرابع", exercisesList: [{ exercise: "" }] },
    { name: "اليوم الخامس", exercisesList: [{ exercise: "" }] },
    { name: "اليوم السادس", exercisesList: [{ exercise: "" }] },
    { name: "اليوم السابع", exercisesList: [{ exercise: "" }] },
  ]);

  const [selectedDay, setSelectedDay] = useState(0);

  const addExcercies = () => {
    // Create a copy of the current daysList
    const updatedDaysList = [...daysList];

    // Update the exercisesList for the selected day
    updatedDaysList[selectedDay].exercisesList.push({ exercise: "" });

    // Update the state with the new daysList
    setDaysList(updatedDaysList);
  };

  const nextDay = () => {
    setSelectedDay(selectedDay + 1);
  };

  const prevDay = () => {
    setSelectedDay(selectedDay - 1);
  };

  return (
    <AnimatedPage>
      <div class="container p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5  ">
        <div className="row g-4">
          {daysList.map((value, key) => {
            if (selectedDay == key) {
              return (
                <>
                  <div className="col-12 col-lg-9 ">
                    <div className="d-flex justify-content-between ">
                      {selectedDay < 6 ? (
                        <button
                          type="button"
                          onClick={nextDay}
                          className="btn pe-0"
                        >
                          <i class="bi bi-caret-right-fill"></i>
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn pe-0 border-0"
                          disabled
                        >
                          <i class="bi bi-caret-right-fill"></i>
                        </button>
                      )}

                      <input
                        type="text"
                        className="form-control text-center bg-body-secondary border-0  rounded"
                        value={value.name}
                        disabled
                      />
                      {selectedDay > 0 ? (
                        <button
                          type="button"
                          onClick={prevDay}
                          className="btn ps-0"
                        >
                          <i class="bi bi-caret-left-fill"></i>
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn ps-0 border-0"
                          disabled
                        >
                          <i class="bi bi-caret-left-fill"></i>
                        </button>
                      )}
                    </div>
                  </div>
                  {isBrowser && (
                    <div className="col-12 col-lg-3 mb-0 ">
                      <div className="d-flex gap-2">
                        <button
                          type="button"
                          className="btn btn-primary fw-bold text-white w-100"
                        >
                          حفظ الخطة <i class="bi bi-upload"></i>
                        </button>
                      </div>
                    </div>
                  )}

                  {value.exercisesList.map((value, key) => {
                    return (
                      <>
                        <div className="col-12">
                          <Accordion>
                            <Accordion.Item eventKey={key}>
                              <Accordion.Header>
                                <div className="d-flex gap-3">
                                  <div>{key + 1}</div>
                                  <div></div>
                                  <div>اسم التمرين</div>
                                </div>
                              </Accordion.Header>
                              <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>

                        {isBrowser && (
                          <>
                            {key + 1 ===
                              daysList[selectedDay].exercisesList.length &&
                              daysList[selectedDay].exercisesList.length <
                                7 && (
                                <div className="col-12 mb-0 ">
                                  <button
                                    type="button"
                                    className="btn text-secondary fw-bold p-0"
                                    onClick={addExcercies}
                                  >
                                    اضافة تمرين{" "}
                                    <i className="bi bi-plus-square"></i>
                                  </button>
                                </div>
                              )}
                          </>
                        )}
                        {isMobile && (
                          <>
                            {daysList[selectedDay].exercisesList.length < 7 && (
                              <div className="container d-flex fixed-bottom  py-5 p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5">
                                <button
                                  type="button"
                                  className="btn d-flex rounded-circle bg-body-secondary mb-4 p-1 align-items-center justify-content-center"
                                  style={{ width: 50, height: 50 }}
                                  onClick={addExcercies}
                                >
                                  <i className="bi bi-plus fs-1 text-white"></i>
                                </button>
                              </div>
                            )}

                            <div className="fixed-bottom container p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5">
                              <button
                                type="button"
                                class="btn btn-primary w-100 text-white  rounded-pill"
                              >
                                حفظ الخطة <i class="bi bi-upload"></i>
                              </button>
                            </div>
                          </>
                        )}
                      </>
                    );
                  })}
                </>
              );
            }
          })}
        </div>
      </div>
    </AnimatedPage>
  );
}

export default CreatePlan;
