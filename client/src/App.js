import React from "react";
import "./App.css";
import Home from "./pages/home";
import Schedules from "./pages/schedules";
import Offers from "./pages/offers";
import Account from "./pages/account";
import AccountData from "./pages/accountData";
import MySubscription from "./pages/mySubscription";
import AboutTrainer from "./pages/aboutTrainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DefaultLayout from "./layouts/defaultLayout";
import TrainerHome from "./pages/trainer-home";
import TrainersLayout from "./layouts/TrainersLayout";
import Plans from "./pages/plans";
import CreatePlan from "./pages/CreatePlan";
import SecondaryLayout from "./layouts/secondaryLayout";
import Alerts from "./partials/alerts";

function App() {
  const [userData, setUserData] = useState([]);
  const [prev, setPrev] = useState("/");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setAlertShow] = useState(false);
  const accessToken = sessionStorage.getItem("accessToken");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/authenticate/userData",
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      );
      if (response.data.error) {
        setUserData(false);
      } else {
        setUserData(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const TrainerfetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/trainers/userData",
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      );
      if (response.data.error) {
        setUserData(false);
      } else {
        setUserData(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Router>
      <>
        <Alerts
          variant={"danger"}
          key={"danger"}
          showAlert={alertMessage}
          onClose={() => setAlertMessage(false)}
          icon={<i class="bi bi-exclamation-triangle-fill"></i>}
          msg={alertMessage}
        />
        <Routes>
          <Route
            element={
              <DefaultLayout
                fetchData={fetchData}
                userData={userData}
                setUserData={setUserData}
              />
            }
          >
            <Route
              path="/Account"
              element={<Account fetchData={fetchData} userData={userData} />}
            />
            <Route path="/:id?" element={<Home />} />
            <Route path="/Schedules" element={<Schedules />} />
            <Route path="/Offers" element={<Offers />} />
            <Route path="/accountData" element={<AccountData />} />
            <Route path="/mySubscription" element={<MySubscription />} />
            <Route path="/aboutTrainer/:id" element={<AboutTrainer />} />
          </Route>

          <Route
            path="/trainers"
            element={
              <TrainersLayout
                fetchData={TrainerfetchData}
                userData={userData}
              />
            }
          >
            <Route path="/trainers" element={<TrainerHome />} />
            <Route
              path="/trainers/aboutTrainer/:id"
              element={<AboutTrainer />}
            />
            <Route path="/trainers/plans" element={<Plans />} />
          </Route>

          <Route
            element={
              <SecondaryLayout
                fetchData={TrainerfetchData}
                userData={userData}
                prev={prev}
              />
            }
          >
            <Route
              path="/createPlan"
              element={
                <CreatePlan
                  setPrev={setPrev}
                  setAlertShow={setAlertShow}
                  setAlertMessage={setAlertMessage}
                />
              }
            />
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
