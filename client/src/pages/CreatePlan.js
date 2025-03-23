import React from "react";
import AnimatedPage from "../animations/AnimatedPage";
import { isMobile, isBrowser } from "react-device-detect";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AnimatedAccordion from "../animations/AnimatedAccordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import * as Yup from "yup";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import SavePlan from "../partials/savePlan";

////////////////////////////////////Button////////////////////////////////////////////////////
const up = "bi bi-chevron-up";
const dwn = "bi bi-chevron-down";

function ContextAwareToggle({ eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button type="button" className="btn" onClick={decoratedOnClick}>
      <i className={isCurrentEventKey ? up : dwn}></i>
    </button>
  );
}
////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////
function CreatePlan({ setPrev, setAlertShow, setAlertMessage }) {
  setPrev("/plans");
  const [modalShow, setModalShow] = useState(false);
  const [daysList, setDaysList] = useState([
    {
      name: "اليوم الاول",
      exercises: [
        {
          name: "",
          sets: "",
          reps: "",
          weight: "",
          muscles: "",
          intensity: "",
          videoLink: "",
        },
      ],
    },
    {
      name: "اليوم الثاني",
      exercises: [
        {
          name: "",
          sets: "",
          reps: "",
          weight: "",
          muscles: "",
          intensity: "",
          videoLink: "",
        },
      ],
    },
    {
      name: "اليوم الثالث",
      exercises: [
        {
          name: "",
          sets: "",
          reps: "",
          weight: "",
          muscles: "",
          intensity: "",
          videoLink: "",
        },
      ],
    },
    {
      name: "اليوم الرابع",
      exercises: [
        {
          name: "",
          sets: "",
          reps: "",
          weight: "",
          muscles: "",
          intensity: "",
          videoLink: "",
        },
      ],
    },
    {
      name: "اليوم الخامس",
      exercises: [
        {
          name: "",
          sets: "",
          reps: "",
          weight: "",
          muscles: "",
          intensity: "",
          videoLink: "",
        },
      ],
    },
    {
      name: "اليوم السادس",
      exercises: [
        {
          name: "",
          sets: "",
          reps: "",
          weight: "",
          muscles: "",
          intensity: "",
          videoLink: "",
        },
      ],
    },
    {
      name: "اليوم السابع",
      exercises: [
        {
          name: "",
          sets: "",
          reps: "",
          weight: "",
          muscles: "",
          intensity: "",
          videoLink: "",
        },
      ],
    },
  ]);

  const [selectedDay, setSelectedDay] = useState(0);

  const handleExerciseChange = (key, field, event) => {
    const updatedDaysList = [...daysList];
    updatedDaysList[selectedDay].exercises[key][field] = event.target.value;
    setDaysList(updatedDaysList);
  };

  const addExcercies = () => {
    // Create a copy of the current daysList
    const updatedDaysList = [...daysList];

    // Update the exercises for the selected day
    updatedDaysList[selectedDay].exercises.push({
      name: "",
      sets: "",
      reps: "",
      weight: "",
      muscles: "",
      intensity: "",
      videoLink: "",
    });

    // Update the state with the new daysList
    setDaysList(updatedDaysList);
  };

  const removeExcercies = (key) => {
    const updatedDaysList = [...daysList];

    if (updatedDaysList[selectedDay].exercises.length <= 1) {
      setAlertMessage("تمرين واحد في اليوم على الاقل");
      setAlertShow(true);
      return; // Stop execution before deleting
    }

    updatedDaysList[selectedDay].exercises.splice(key, 1);
    setDaysList(updatedDaysList);
  };

  const nextDay = () => {
    setSelectedDay(selectedDay + 1);
  };

  const prevDay = () => {
    setSelectedDay(selectedDay - 1);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).max(15),
    sets: Yup.number().required(),
    reps: Yup.number().required(),
    weight: Yup.number().required(),
    muscles: Yup.string().required(),
    intensity: Yup.string().required(),
    videoLink: Yup.string().required(),
  });

  return (
    <AnimatedPage>
      <div className="container p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5  ">
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
                          <i className="bi bi-caret-right-fill"></i>
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn pe-0 border-0"
                          disabled
                        >
                          <i className="bi bi-caret-right-fill"></i>
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
                          <i className="bi bi-caret-left-fill"></i>
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn ps-0 border-0"
                          disabled
                        >
                          <i className="bi bi-caret-left-fill"></i>
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
                          onClick={() => setModalShow(true)}
                        >
                          حفظ الخطة <i className="bi bi-upload"></i>
                        </button>
                      </div>
                    </div>
                  )}

                  {value.exercises.map((value, key) => {
                    return (
                      <>
                        <div className="col-12">
                          <Formik
                            initialValues={{
                              name: "",
                              sets: 0,
                              reps: 0,
                              weight: 0,
                              muscles: "",
                              intensity: "",
                              videoLink: "",
                            }}
                          >
                            <Form>
                              <AnimatedAccordion key={key}>
                                <Accordion defaultActiveKey="0">
                                  <Card className="border-0 bg-body-secondary ">
                                    <Card.Header className="d-flex justify-content-between align-items-center border-0 bg-body-secondary rounded">
                                      <div className="d-flex gap-2 align-items-center">
                                        <h5 className="m-0">{key + 1}</h5>
                                        <hr className="border h-50" />
                                        <div className="input-group w-75 ">
                                          <span
                                            className="input-group-text rounded-0 rounded-end  bg-body-secondary  border border-start-0"
                                            id="basic-addon1"
                                          >
                                            <i className="bi bi-pencil-square text-secondary"></i>
                                          </span>
                                          <Field
                                            name="name"
                                            type="text"
                                            className="form-control flex-row rounded-0 rounded-start bg-body-secondary  border border-end-0"
                                            placeholder="تمرين جديد"
                                            value={value.name}
                                            onChange={(event) =>
                                              handleExerciseChange(
                                                key,
                                                "name",
                                                event
                                              )
                                            }
                                          />
                                          <ErrorMessage
                                            name="name"
                                            component="span"
                                            className="text-danger"
                                          />
                                        </div>
                                      </div>
                                      <ContextAwareToggle
                                        eventKey={key}
                                      ></ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={key}>
                                      <Card.Body className="bg-body-secondary">
                                        <div className="row g-2">
                                          <div className="col-12 d-flex justify-content-between">
                                            <div className="d-flex  gap-2 py-1   ">
                                              <button className="btn btn-outline-secondary rounded-pill">
                                                راحة{" "}
                                                <i className="bi bi-battery-charging"></i>
                                              </button>
                                              <button className="btn btn-outline-secondary rounded-pill">
                                                كارديو{" "}
                                                <i className="bi bi-fire"></i>
                                              </button>
                                            </div>
                                            <div>
                                              <button
                                                className="btn  w-100 h-100 text-white rounded-pill fw-bold filter-badge"
                                                onClick={() =>
                                                  removeExcercies(key)
                                                }
                                              >
                                                <i className="bi bi-trash3 fs-5 text-danger"></i>
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
                                              name="sets"
                                              placeholder="0"
                                              value={value.sets}
                                              onChange={(event) =>
                                                handleExerciseChange(
                                                  key,
                                                  "sets",
                                                  event
                                                )
                                              }
                                            />
                                            <ErrorMessage
                                              name="sets"
                                              component="span"
                                              className="text-danger"
                                            />
                                          </div>
                                          <div className="col-4 text-center">
                                            <label className="fw-bold">
                                              عدات
                                            </label>
                                            <Field
                                              type="number"
                                              className="form-control bg-transparent border-0 text-center text-secondary "
                                              name="reps"
                                              value={value.reps}
                                              placeholder="0"
                                              onChange={(event) =>
                                                handleExerciseChange(
                                                  key,
                                                  "reps",
                                                  event
                                                )
                                              }
                                            />
                                            <ErrorMessage
                                              name="reps"
                                              component="span"
                                              className="text-danger"
                                            />
                                          </div>
                                          <div className="col-4 text-center">
                                            <label className="fw-bold">
                                              الوزن
                                            </label>
                                            <Field
                                              type="number"
                                              className="form-control bg-transparent border-0 text-center text-secondary "
                                              name="weight"
                                              placeholder="0"
                                              value={value.weight}
                                              onChange={(event) =>
                                                handleExerciseChange(
                                                  key,
                                                  "weight",
                                                  event
                                                )
                                              }
                                            />
                                            <ErrorMessage
                                              name="weight"
                                              component="span"
                                              className="text-danger"
                                            />
                                          </div>
                                          <hr />

                                          <div className="form-floating col-12 col-lg-6">
                                            <Field
                                              type="text"
                                              className="form-control bg-transparent"
                                              name="muscles"
                                              value={value.muscles}
                                              placeholder="اسم التمرين"
                                              onChange={(event) =>
                                                handleExerciseChange(
                                                  key,
                                                  "muscles",
                                                  event
                                                )
                                              }
                                            />
                                            <ErrorMessage
                                              name="muscles"
                                              component="span"
                                              className="text-danger"
                                            />
                                            <label htmlFor="floatingEmail">
                                              العضلة المستهدفة
                                            </label>
                                          </div>
                                          <div className="form-floating col-12 col-lg-6">
                                            <Field
                                              type="text"
                                              className="form-control bg-transparent"
                                              name="intensity"
                                              value={value.intensity}
                                              placeholder="اسم التمرين"
                                              onChange={(event) =>
                                                handleExerciseChange(
                                                  key,
                                                  "intensity",
                                                  event
                                                )
                                              }
                                            />
                                            <ErrorMessage
                                              name="intensity"
                                              component="span"
                                              className="text-danger"
                                            />
                                            <label htmlFor="floatingEmail">
                                              الشدة
                                            </label>
                                          </div>
                                          <div className="form-floating col-12">
                                            <Field
                                              type="text"
                                              className="form-control bg-transparent"
                                              name="videoLink"
                                              value={value.videoLink}
                                              placeholder="اسم التمرين"
                                              onChange={(event) =>
                                                handleExerciseChange(
                                                  key,
                                                  "videoLink",
                                                  event
                                                )
                                              }
                                            />
                                            <ErrorMessage
                                              name="videoLink"
                                              component="span"
                                              className="text-danger"
                                            />
                                            <label htmlFor="floatingEmail">
                                              رابط الفيديو{" "}
                                              <i className="bi bi-link-45deg"></i>
                                            </label>
                                          </div>
                                        </div>
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                </Accordion>
                              </AnimatedAccordion>
                            </Form>
                          </Formik>
                        </div>

                        {isBrowser && (
                          <>
                            {key + 1 ===
                              daysList[selectedDay].exercises.length &&
                              daysList[selectedDay].exercises.length < 7 && (
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
                      </>
                    );
                  })}
                </>
              );
            }
          })}
          {isMobile && (
            <>
              {daysList[selectedDay].exercises.length < 7 && (
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
                  onClick={() => setModalShow(true)}
                  className="btn btn-primary w-100 text-white  rounded-pill"
                >
                  حفظ الخطة <i className="bi bi-upload"></i>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <SavePlan
        show={modalShow}
        onHide={() => setModalShow(false)}
        daysList={daysList}
      />
    </AnimatedPage>
  );
}

export default CreatePlan;
