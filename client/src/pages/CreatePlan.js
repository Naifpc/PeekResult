import React from "react";
import AnimatedPage from "../animations/AnimatedPage";
import { isMobile, isBrowser } from "react-device-detect";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AnimatedAccordion from "../animations/AnimatedAccordion";
import * as Yup from "yup";

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
                          <AnimatedAccordion>
                            <Formik>
                              <Form>
                                <Accordion>
                                  <Accordion.Item eventKey={key}>
                                    <Accordion.Header>
                                      <div className="d-flex gap-3">
                                        <div>{key + 1}</div>
                                        <div></div>

                                        <Field
                                          type="text"
                                          className="form-control border-0 text-secondary bg-transparent p-0 m-0"
                                          id="floatingEmail"
                                          name="email"
                                          placeholder="اسم التمرين"
                                        />
                                      </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <div className="row g-2">
                                        <div className="col-12 d-flex justify-content-between">
                                          <div className="d-flex  gap-2 py-1   ">
                                            <button className="btn btn-outline-secondary rounded-pill">
                                              راحة{" "}
                                              <i class="bi bi-battery-charging"></i>
                                            </button>
                                            <button className="btn btn-outline-secondary rounded-pill">
                                              كارديو <i class="bi bi-fire"></i>
                                            </button>
                                          </div>
                                          <div>
                                            <button className="btn  w-100 h-100 text-white rounded-pill fw-bold">
                                              <i class="bi bi-trash3 fs-5 text-danger"></i>
                                            </button>
                                          </div>
                                        </div>

                                        <div className="col-4 text-center">
                                          <label className="fw-bold">
                                            جلسات
                                          </label>
                                          <Field
                                            type="number"
                                            className="form-control bg-transparent border-0 text-center text-secondary "
                                            id="floatingEmail"
                                            name="email"
                                            placeholder="0"
                                          />
                                        </div>
                                        <div className="col-4 text-center">
                                          <label className="fw-bold">
                                            عدات
                                          </label>
                                          <Field
                                            type="number"
                                            className="form-control bg-transparent border-0 text-center text-secondary "
                                            id="floatingEmail"
                                            name="email"
                                            placeholder="0"
                                          />
                                        </div>
                                        <div className="col-4 text-center">
                                          <label className="fw-bold">
                                            الوزن
                                          </label>
                                          <Field
                                            type="number"
                                            className="form-control bg-transparent border-0 text-center text-secondary "
                                            id="floatingEmail"
                                            name="email"
                                            placeholder="0"
                                          />
                                        </div>
                                        <hr />

                                        <div className="form-floating col-12">
                                          <Field
                                            type="select"
                                            className="form-control bg-transparent"
                                            id="floatingEmail"
                                            name="email"
                                            placeholder="اسم التمرين"
                                          />
                                          <label htmlFor="floatingEmail">
                                            العضلة المستهدفة
                                          </label>
                                        </div>
                                        <div className="form-floating col-12">
                                          <Field
                                            type="text"
                                            className="form-control bg-transparent"
                                            id="floatingEmail"
                                            name="email"
                                            placeholder="اسم التمرين"
                                          />
                                          <label htmlFor="floatingEmail">
                                            رابط الفيديو{" "}
                                            <i class="bi bi-link-45deg"></i>
                                          </label>
                                        </div>
                                      </div>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Accordion>
                              </Form>
                            </Formik>
                          </AnimatedAccordion>
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
