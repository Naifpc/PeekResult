import React from "react";
import "./App.css";
import Home from "./pages/home";
import Schedules from "./pages/schedules";
import Offers from "./pages/offers";
import Account from "./pages/account";
import { MobileBotNavbar, MobiletopNavbar } from "./partials/MobileNavbar";
import AccountData from "./pages/accountData";
import MySubscription from "./pages/mySubscription";
import AboutTrainer from "./pages/aboutTrainer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import { useEffect, useState } from "react";
import axios from "axios";
import DefaultLayout from "./layouts/defaultLayout";
import TrainerHome from "./pages/trainer-home";
import TrainersLayout from "./layouts/TrainersLayout";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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
      console.log(response);
      if (response.data.error) {
        setUserData(false);
      } else {
        setUserData(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    setUserData(false);
  };

  return (
    <Router>
      <>
        <BrowserView>
          <Routes>
            <Route
              element={
                <DefaultLayout
                  fetchData={fetchData}
                  userData={userData}
                  logout={logout}
                />
              }
            >
              <Route
                path="/Account"
                element={
                  <Account
                    fetchData={fetchData}
                    userData={userData}
                    logout={logout}
                  />
                }
              />
              <Route path="/:id?" element={<Home />} />
              <Route path="/Schedules" element={<Schedules />} />
              <Route path="/Offers" element={<Offers />} />
              <Route path="/accountData" element={<AccountData />} />
              <Route path="/mySubscription" element={<MySubscription />} />
              <Route path="/aboutTrainer/:id" element={<AboutTrainer />} />
            </Route>

            <Route
              element={
                <TrainersLayout
                  fetchData={fetchData}
                  userData={userData}
                  logout={logout}
                />
              }
            >
              <Route path="/trainers" element={<TrainerHome />} />
            </Route>
          </Routes>
        </BrowserView>

        <MobileView>
          <MobiletopNavbar fetchData={fetchData} userData={userData} />
          <Routes>
            <Route
              path="/Account"
              element={
                <Account
                  fetchData={fetchData}
                  userData={userData}
                  logout={logout}
                />
              }
            />
            <Route path="/:id?" element={<Home />} />
            <Route path="/Schedules" element={<Schedules />} />
            <Route path="/Offers" element={<Offers />} />
            <Route path="/accountData" element={<AccountData />} />
            <Route path="/mySubscription" element={<MySubscription />} />
            <Route path="/aboutTrainer/:id" element={<AboutTrainer />} />
          </Routes>
          <MobileBotNavbar />
        </MobileView>
      </>
    </Router>
  );
}

export default App;
