import React from "react";
import "./App.css";
import Home from "./pages/home";
import Schedules from "./pages/schedules";
import Offers from "./pages/offers";
import Account from "./pages/account";
import {
  MobileBotNavbar,
  MobiletopNavbar,
} from "./partials/MobileNavbar";
import Footer from "./partials/footer";
import BrowserNavbar from "./partials/BrowserNavbar";
import AccountData from "./pages/accountData";
import MySubscription from "./pages/mySubscription";
import AboutTrainer from "./pages/aboutTrainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  BrowserView,
  MobileView,
} from "react-device-detect";

  function App() {
    return(
      <Router>
        <>
          <BrowserView>
            <BrowserNavbar />

            <Routes>
              <Route path="/Account" element={<Account />} />
              <Route path="/:id?" element={<Home />} />
              <Route path="/Schedules" element={<Schedules />} />
              <Route path="/Offers" element={<Offers />} />
              <Route path="/accountData" element={<AccountData />} />
              <Route path="/mySubscription" element={<MySubscription />} />
              <Route path="/aboutTrainer/:id" element={<AboutTrainer />} />
            </Routes>

            <Footer />
          </BrowserView>

          <MobileView>
            <MobiletopNavbar />
            <Routes>
              <Route path="/Account" element={<Account />} />
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

    )
}

export default App;
