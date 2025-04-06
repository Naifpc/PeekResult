import { React, useState } from "react";
import AnimatedPage from "../animations/AnimatedPage";
import { isMobile, isBrowser } from "react-device-detect";
import { Formik, Form, Field, ErrorMessage } from "formik";
import HumanBody from "../partials/humanBody";

function Register({ setPrev, setSecondaryTitle }) {
  setPrev("/");
  setSecondaryTitle("تسجبل حساب");

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qestionsList, setQestionsList] = useState([
    {
      name: "الجنس",
      value: 0,

      html: (
        <>
          <div class="form-check mb-3 bg-body-secondary p-5 py-3 rounded">
            <Field
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios2">
              ذكر <i class="bi bi-gender-male"></i>
            </label>
          </div>

          <div class="form-check bg-body-secondary p-5 py-3 rounded">
            <Field
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios2">
              انثى <i class="bi bi-gender-female"></i>
            </label>
          </div>
        </>
      ),
    },

    {
      name: "الوزن  ",
      value: 0,

      html: (
        <>
          <div className="d-flex justify-content-center mb-1 ">
            <i
              class="bi bi-speedometer2 mb-3 text-secondary"
              style={{ fontSize: 150 }}
            ></i>
          </div>
          <div className="input-group px-5">
            <Field
              type="number"
              placeholder="0"
              class="form-control border-0 bg-body-secondary rounded-end rounded-start-0   fs-3 text-white"
              aria-describedby="basic-addon1"
            />
            <span class="input-group-text border-0 bg-body-secondary rounded-start rounded-end-0 fs-3 text-secondary  ">
              كجم
            </span>
          </div>
        </>
      ),
    },
    {
      name: "كم طولك",
      value: 0,

      html: (
        <>
          <div className="d-flex justify-content-center mb-3 ">
            <HumanBody value={"height"} />
          </div>
          <div className="input-group px-5">
            <Field
              type="number"
              placeholder="0"
              class="form-control border-0 bg-body-secondary rounded-end rounded-start-0   fs-3 text-white"
              aria-describedby="basic-addon1"
            />
            <span class="input-group-text border-0 bg-body-secondary rounded-start rounded-end-0 fs-3 text-secondary  ">
              سم
            </span>
          </div>
        </>
      ),
    },

    {
      name: "مقاس الخصر ",
      value: 0,

      html: (
        <>
          <div className="d-flex justify-content-center mb-3 ">
            <HumanBody value={"waist"} />
          </div>
          <div className="input-group px-5">
            <Field
              type="number"
              placeholder="0"
              class="form-control border-0 bg-body-secondary rounded-end rounded-start-0   fs-3 text-white"
              aria-describedby="basic-addon1"
            />
            <span class="input-group-text border-0 bg-body-secondary rounded-start rounded-end-0 fs-3 text-secondary  ">
              سم
            </span>
          </div>
        </>
      ),
    },
    {
      name: "مقاس الرقبة ",
      value: 0,

      html: (
        <>
          <div className="d-flex justify-content-center mb-3 ">
            <HumanBody value={"neck"} />
          </div>
          <div className="input-group px-5">
            <Field
              type="number"
              placeholder="0"
              class="form-control border-0 bg-body-secondary rounded-end rounded-start-0   fs-3 text-white"
              aria-describedby="basic-addon1"
            />
            <span class="input-group-text border-0 bg-body-secondary rounded-start rounded-end-0 fs-3 text-secondary  ">
              سم
            </span>
          </div>
        </>
      ),
    },
    {
      name: "تاريخ الميلاد",
      value: 0,

      html: (
        <>
          <div className="d-flex justify-content-center mb-1 ">
            <i
              class="bi bi-calendar-event text-secondary"
              style={{ fontSize: 150 }}
            ></i>
          </div>
          <div className="input-group px-5">
            <Field
              type="Date"
              class="form-control  border-0 bg-body-secondary text-center fs-3 text-white "
              aria-describedby="basic-addon1"
            />
          </div>
        </>
      ),
    },
    {
      name: "inbody ",
      value: 0,
      html: (
        <>
          <div
            className="
           px-5"
          >
            <div className="form-floating mb-3 col-12">
              <Field
                type="number"
                className="form-control  border-0 bg-body-secondary"
                id="muscleWeight "
                name="muscleWeight"
                placeholder="زن العضلات/ كجم"
              />
              <label htmlFor="muscleWeight">وزن العضلات/ كجم</label>
              <ErrorMessage
                name="muscleWeight"
                component="span"
                className="text-danger"
              />
            </div>

            <div className="form-floating mb-3 col-12">
              <Field
                type="number"
                className="form-control  border-0 bg-body-secondary"
                id="fatWeight"
                name="fatWeight"
                placeholder="زن العضلات/ كجم"
              />
              <label htmlFor="fatWeight">وزن الدهون/ كجم</label>
              <ErrorMessage
                name="fatWeight"
                component="span"
                className="text-danger"
              />
            </div>
          </div>
        </>
      ),
    },
  ]);

  const numOfQuestions = qestionsList.length;

  const nextButton = () => {
    let next = currentQuestion + 1;
    setCurrentQuestion(next);
  };

  const pervButton = () => {
    let perv = currentQuestion - 1;
    setCurrentQuestion(perv);
  };

  return (
    <AnimatedPage>
      <div class="container p-2 p-sm-2 p-md-3 p-lg-4 p-xl-5  ">
        {qestionsList.map((question, key) => {
          if (key === currentQuestion)
            return (
              <>
                <Formik>
                  <Form>
                    <div className=" g-4">
                      <div className="col-12 d-flex flex-row-reverse justify-content-between">
                        <span class="badge text-bg-primary text-white p-2 px-3 ">
                          {key + 1} من {numOfQuestions}
                        </span>
                        {key > 0 && (
                          <button
                            className="btn  text-white rounded-pill p-0"
                            onClick={pervButton}
                          >
                            السابق
                          </button>
                        )}
                      </div>
                      <div className="col-12">
                        <h3 className="fw-bold text-center">{question.name}</h3>
                      </div>

                      <div className="">
                        <div class="position-absolute top-50 start-50 translate-middle w-100  p-2 p-sm-2 p-md-3 p-lg-4 p-xl-5">
                          {question.html}
                        </div>
                      </div>

                      {isMobile &&
                        (key + 1 === numOfQuestions ? (
                          <div className="fixed-bottom container pb-4 p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5">
                            <button
                              type="submit"
                              className="btn btn-primary w-100 text-white rounded-pill p-2 "
                            >
                              تسجبل <i className="bi bi-check"></i>
                            </button>
                          </div>
                        ) : (
                          <div className="fixed-bottom container pb-4 p-3 p-sm-3 p-md-3 p-lg-4 p-xl-5">
                            <button
                              type="button"
                              className="btn btn-primary w-100 text-white rounded-pill p-2"
                              onClick={nextButton}
                            >
                              التالي <i className="bi bi-arrow-left-short"></i>
                            </button>
                          </div>
                        ))}
                    </div>
                  </Form>
                </Formik>
              </>
            );
        })}
      </div>
    </AnimatedPage>
  );
}

export default Register;
